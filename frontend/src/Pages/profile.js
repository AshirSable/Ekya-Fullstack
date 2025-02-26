import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Explorenav from "../components/loginnav";
import companylogo from "../assets/cyphersol.jpeg";
import aboutImage from "../assets/aboutimage.jpeg";

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const collaborationsRef = useRef(null);
  const milestonesRef = useRef(null);
  const userId = localStorage.getItem("userId");
  
  const [username, setUsername] = useState("");
  const [businessTitle, setBusinessTitle] = useState("Loading...");
  const [businessLocation, setBusinessLocation] = useState("Loading...");

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "User");
    
    // Fetch business profile details from the backend
    fetch(`http://localhost:5000/api/profile/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}` // Include auth token
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setBusinessTitle(data.businessTitle || "No Title");
          setBusinessLocation(data.businessLocation || "No Location");
        }
      })
      .catch(error => console.error("Error fetching profile:", error));
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-[20%] fixed h-full">
        <Explorenav />
      </div>
      <div className="ml-[22%] w-[80%] mt-[2%] mx-[2%]">
        <div className="flex flex-col bg-gradient-to-r from-blue-900 to-blue-600 text-white p-8 rounded-t-lg">
          <h1 className="text-3xl font-bold self-end mr-12">Welcome,</h1>
          <h1 className="text-3xl font-bold self-end mr-12">{username}</h1>
        </div>

        <div className="bg-white shadow-md rounded-b-lg p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={companylogo}
                className="w-28 h-28 rounded-full border-gray-200 border shadow-lg"
              />
              <div className="ml-6">
                <h2 className="text-xl font-bold">{businessTitle}</h2>
                <p className="text-gray-500">{businessLocation}</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/editprofile")}
              className="bg-green-500 font-semibold text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              EDIT PAGE
            </button>
          </div>

          <div className="mt-8">
            <nav className="flex justify-between">
              <button
                onClick={() => scrollToSection(aboutUsRef)}
                className="text-gray-700 hover:text-blue-600"
              >
                ABOUT US
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-gray-700 hover:text-blue-600"
              >
                OUR SERVICES
              </button>
              <button
                onClick={() => scrollToSection(collaborationsRef)}
                className="text-gray-700 hover:text-blue-600"
              >
                COLLABORATION INTERESTS
              </button>
              <button
                onClick={() => scrollToSection(milestonesRef)}
                className="text-gray-700 hover:text-blue-600"
              >
                MILESTONES & ACHIEVEMENTS
              </button>
            </nav>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
