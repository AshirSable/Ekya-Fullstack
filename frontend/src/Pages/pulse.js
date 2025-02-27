import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Explorenav from "../components/loginnav";
import * as XLSX from "xlsx";
import Papa from "papaparse";

const Pulse = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [healthScore, setHealthScore] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Session expired. Please log in again.");
      navigate("/login");
    }
  }, [navigate]);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");

    if (file) {
      const fileExtension = file.name.split(".").pop();
      
      if (fileExtension === "csv") {
        Papa.parse(file, {
          header: true,
          complete: (results) => {
            processData(results.data);
          },
        });
      } else if (fileExtension === "xlsx" || fileExtension === "xls") {
        const reader = new FileReader();
        reader.onload = (e) => {
          const workbook = XLSX.read(e.target.result, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          processData(data);
        };
        reader.readAsBinaryString(file);
      } else {
        alert("Invalid file type. Please upload a CSV or Excel file.");
      }
    }
  };

  const processData = async (data) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Session expired. Please log in again.");
      navigate("/login");
      return;
    }

    const processedData = data.map((item) => ({
      cashFlow: parseFloat(item["CashFlow"]),
      revenue: parseFloat(item["Revenue"]),
      expenses: parseFloat(item["Expenses"]),
      debtToEquityRatio: parseFloat(item["DebtToEquityRatio"]),
    }));

    try {
      const response = await fetch("http://localhost:5000/api/financialPulse/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Ensure the token is sent for authentication
        },
        body: JSON.stringify(processedData),
      });

      const result = await response.json();
      if (response.ok) {
        setHealthScore(result.healthScores[0]);
      } else {
        console.error("Error analyzing financial health:", result.message);
        alert("Error processing data. Please try again.");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100 min-h-screen">
        <Explorenav />

        <div className="ml-80 h-44 w-full mr-8 mt-7 bg-white rounded-lg shadow-md p-5 relative overflow-hidden">
          <div>
            <p className="text-2xl text-green-600 font-semibold">Financial Pulse</p>
            <p className="mt-2 text-gray-600">
              Assess Financial Health With Financial Pulse, Monitor Key Metrics to Maintain a Healthy Business
            </p>
            {healthScore && (
              <p className="mt-4 text-sm text-gray-600">
                Financial Health Score: <p className="text-3xl font-bold"> {healthScore}/100 </p>
              </p>
            )}
          </div>

          <div className="absolute top-24 right-9">
            <button
              onClick={handleClick}
              className="p-3 bg-green-500 font-semibold text-white rounded-lg hover:bg-green-600 transition"
            >
              Upload Excel File
            </button>

            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              ref={fileInputRef}
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />

            {fileName && (
              <p className="mt-2 text-sm text-gray-600 text-left">Uploaded: {fileName}</p>
            )}
          </div>
        </div> 
      </div>
    </>
  );
};

export default Pulse;
