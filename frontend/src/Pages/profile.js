import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Explorenav from "../components/loginnav";
import aboutImage from "../assets/aboutimage.jpeg";
import servicesImage from "../assets/service.jpg"; // New service image
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const navigate = useNavigate();
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const collaborationsRef = useRef(null);
  const milestonesRef = useRef(null);

  const [username, setUsername] = useState("");
  const [businessTitle, setBusinessTitle] = useState("Loading...");
  const [businessLocation, setBusinessLocation] = useState("Loading...");
  const [aboutUs, setAboutUs] = useState("Loading...");
  const [services, setServices] = useState("Loading...");
  const [collaborations, setCollaborations] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [businessName, setBusinessName] = useState(["loading..."]);
  const [servicesDescription, setServiceDescription] = useState(["loading..."]);
  const [businessDomain, setBusinessDomain] = useState(["loading..."]);
  const [businessLogo, setBusinessLogo] = useState("")

  const userId = jwtDecode(localStorage.getItem("token"))?.id;

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "User");

    fetch(`http://localhost:8000/api/profile/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBusinessTitle(data.businessTitle || "No Title");
        setBusinessLocation(data.businessLocation || "No Location");
        setAboutUs(data.businessDescription || "No About Us Info Available");
        setServices(data.services || "No Services Info Available");
        setCollaborations(data.collaborationInterests || []);
        setMilestones(data.milestones || []);
        setBusinessName(data.businessName || "No name");
        setServiceDescription(data.servicesDescription || "No services description");
        setBusinessDomain(data.collaborationInterests || "No collaborations interests");
        setBusinessLogo(data.businessLogo)
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-[20%] fixed h-full">
        <Explorenav />
      </div>

      {/* Main Content */}
      <div className="ml-[22%] w-[80%] mt-[2%] mx-[2%]">
        {/* Header */}
        <div className="flex flex-col bg-gradient-to-r from-blue-900 to-blue-600 text-white p-8 rounded-t-lg">
          <h1 className="text-3xl font-bold self-end mr-12">Welcome,</h1>
          <h1 className="text-3xl font-bold self-end mr-12">{username}</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-b-lg p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={`http://localhost:8000/static/${businessLogo}`}
                className="w-28 h-28 rounded-full border-gray-200 border shadow-lg"
                alt="Business Logo"
              />
              <div className="ml-6">
                <h2 className="text-2xl font-extrabold text-gray-800">{businessName}</h2>
                <p className="text-gray-600 text-lg">{businessLocation}</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/editprofile")}
              className="bg-green-500 font-semibold text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              EDIT PAGE
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8">
            <nav className="flex justify-between">
              <button onClick={() => scrollToSection(aboutUsRef)} className="text-gray-700 hover:text-blue-600 ml-60">
                ABOUT US
              </button>
              <button onClick={() => scrollToSection(servicesRef)} className="text-gray-700 hover:text-blue-600 mr-60">
                OUR SERVICES
              </button>
            </nav>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>

          {/* About Us Section */}
          <div ref={aboutUsRef} className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-start gap-6">
            {/* Left Column: Title & Image */}
            <div className="md:w-1/2 w-full">
              <p className="text-green-600 font-semibold uppercase tracking-wider">— About Us</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Get to Know Our Business</h2>
              <img src={aboutImage} className="w-full rounded-lg shadow-lg mt-6" alt="About Us" />
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full self-center">
              <p className="text-gray-700 text-lg leading-relaxed">{aboutUs}</p>
            </div>
          </div>

          {/* Our Services Section */}
          <div ref={servicesRef} className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-start gap-6">
            {/* Left Column: Title & Image */}
            <div className="md:w-1/2 w-full">
              <p className="text-green-600 font-semibold uppercase tracking-wider">— Our Services</p>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">What we're offering </h2>
              <img src={servicesImage} className="w-full md:w-3/4 rounded-lg shadow-lg mt-4" alt="Our Services" />
            </div>

            {/* Right Column: Text Content */}
            <div className="w-full self-center">
              <p className="text-gray-700 text-lg leading-relaxed">{servicesDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
