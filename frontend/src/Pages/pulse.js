import React, { useState } from "react";
import * as XLSX from "xlsx";

function Pulse() {
  const [score, setScore] = useState(null);
  const [percentScore, setPercentScore] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      try {
        const df1 = XLSX.utils.sheet_to_json(workbook.Sheets["Balance Sheet - Assets"]);
        const df2 = XLSX.utils.sheet_to_json(workbook.Sheets["Balance Sheet - L&E"]);
        const df3 = XLSX.utils.sheet_to_json(workbook.Sheets["Income Statement"]);

        calculateZScore(df1, df2, df3);
      } catch (err) {
        setError("❌ Error reading sheets. Make sure sheet names are correct.");
        console.error(err);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const findValue = (data, key, colName) => {
    const row = data.find((row) => row[colName]?.trim().toLowerCase() === key.toLowerCase());
    return row ? parseFloat(row["Amount (₹ Crores)"] || 0) : 0;
  };

  const calculateZScore = (df1, df2, df3) => {
    setError("");

    const totalCurrentAssets = findValue(df1, "Total Current Assets", "Assets");
    const totalAssets = findValue(df1, "Total Assets", "Assets");
    const accountsPayable = findValue(df2, "Accounts Payable", "Liabilities & Equity");
    const shortTermDebt = findValue(df2, "Short-Term Debt", "Liabilities & Equity");
    const retainedEarnings = findValue(df2, "Retained Earnings", "Liabilities & Equity");
    const marketEquity = findValue(df2, "Common Stock (Market)", "Liabilities & Equity");
    const totalLiabilities = findValue(df2, "Total Liabilities", "Liabilities & Equity");
    const ebit = findValue(df3, "EBIT (Operating Profit)", "Income Statement");
    const sales = findValue(df3, "Revenue (Sales)", "Income Statement");

    if (!totalAssets || !totalLiabilities) {
      setError("❌ Missing Total Assets or Total Liabilities. Please check your data.");
      return;
    }

    const X1 = (totalCurrentAssets - (accountsPayable + shortTermDebt)) / totalAssets;
    const X2 = retainedEarnings / totalAssets;
    const X3 = ebit / totalAssets;
    const X4 = marketEquity / totalLiabilities;
    const X5 = sales / totalAssets;

    const Z = 1.2 * X1 + 1.4 * X2 + 3.3 * X3 + 0.6 * X4 + 1.0 * X5;
    const percent = Math.round((Math.min(Z, 4.0) / 4.0) * 100 * 100) / 100;

    let msg = "";
    if (Z > 2.99) msg = "✅ Safe Zone – Company is financially healthy.";
    else if (Z >= 1.81) msg = "⚠️ Grey Zone – Moderate financial risk.";
    else msg = "❌ Distress Zone – High financial risk.";

    setScore(Z.toFixed(2));
    setPercentScore(percent);
    setMessage(msg);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "30px", maxWidth: "600px", margin: "auto" }}>
      <h2>📈 Altman Z-score Calculator (React)</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {error && <p style={{ color: "red" }}>{error}</p>}

      {score && (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc" }}>
          <h3>Z-score: {score}</h3>
          <p>Financial Health (0–100): <strong>{percentScore}%</strong></p>
          <p><em>{message}</em></p>
        </div>
      )}
    </div>
  );
}

export default Pulse;
