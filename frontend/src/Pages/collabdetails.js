import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Explorenav from "../components/loginnav";
import companylogo from "../assets/cyphersol.jpeg";
import aboutImage from "../assets/aboutimage.jpeg";
import servicesImage from "../assets/service.jpg";
import imagetr from "../assets/gometric.jpeg";
import { jwtDecode } from "jwt-decode"; // For fetching logged-in username

const CollabDetails = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token")

  const userid = jwtDecode(token)?.id
  const [collabDetails, setCollabDetails] = useState(null);
  const [username, setUsername] = useState("");  // Store logged-in username
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const collaborationsRef = useRef(null);
  const milestonesRef = useRef(null);

  console.log("Sending Request With:");


  useEffect(() => {
    // Fetch Collaboration Details
    axios
      .get(`http://localhost:8000/api/collaboration/${id}`)
      .then((response) => {
        console.log("Collaboration Details:", response.data);
        setCollabDetails(response.data);
      })
      .catch((error) => console.error("Error fetching details:", error));

    // Fetch Username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // ✅ Correct way to fetch username
    }
  }, [id]);

  if (!collabDetails) {
    return <p className="text-center mt-10">Loading collaboration details...</p>;
  }

  // Function to Handle Request Submission
  const handleRequest = async () => {

    if (!collabDetails.userId || !username || !collabDetails.title) {
      alert("Error: Missing required data for request.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8000/api/collaboration-request`, {
        ownerId: collabDetails.userId,// Corrected field name
        senderId: userid,
        senderUsername: username,               // Ensure username is fetched correctly
        collaborationTitle: collabDetails.title    // Collaboration project title
      });

      alert(`Request sent successfully to ${collabDetails.user?.profile?.businessName}`);
    } catch (error) {
      console.log(error)
      console.error("Error sending request:", error.response?.data || error.message);
      alert(`Failed to send request: ${error.response?.data?.error || "Unknown error"}`);
    }
  };



  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 min-h-screen">
        <Explorenav />
      </div>

      {/* Main Content */}
      <div className="relative flex-grow p-10 overflow-y-auto">
        {/* Geometric Image at Top Right */}
        <div className="bg-white p-8 rounded-2xl shadow-lg ml-6 max-w-6xl w-full relative">
          <img
            src={imagetr}
            alt="Geometric Design"
            className="absolute top-0 right-0 w-40 md:w-48 lg:w-56 rounded-r-2xl"
          />

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">
            {collabDetails.title || "No Title"}
          </h1>

          {/* Company Info */}
          <div className="flex items-center mt-6">
            <img
              src={companylogo}
              alt="Company Logo"
              className="w-16 h-16 rounded-full border border-gray-300"
            />
            <h2 className="ml-4 text-xl font-semibold text-gray-800">
              {collabDetails.user?.profile?.businessName || "Unknown Company"}
            </h2>
          </div>

          {/* Collaboration Details Grid */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <p className="font-semibold text-gray-700">Revenue Shared</p>
              <p className="text-gray-600">
                {collabDetails.revenueShared}% Revenue Sharing (Negotiable)
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-700">Skilled In</p>
              <p className="text-gray-600">
                {collabDetails.skills || "Not Specified"}
              </p>
            </div>

            <div className="col-span-2">
              <p className="font-semibold text-gray-700">Roles & Responsibilities</p>
              <p className="text-gray-600">{collabDetails.roles || "Not specified"}</p>
            </div>

            <div>
              <p className="font-semibold text-gray-700">Time Period</p>
              <p className="text-gray-600">{collabDetails.timePeriod} Months</p>
            </div>
          </div>

          {/* Send Request Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleRequest}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
            >
              SEND REQUEST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollabDetails;
