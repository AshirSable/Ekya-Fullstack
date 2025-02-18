import React, { useState, useEffect } from "react";
import Explorenav from "../components/loginnav";
import { FaPlusCircle } from "react-icons/fa";
import CollaborationForm from "../components/addcollabform";

const AddCollab = () => {
  const [showForm, setShowForm] = useState(false);
  const [collaborations, setCollaborations] = useState([]);
  
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId"); // Ensure userId is stored during login

  // Fetch collaborations from backend
  useEffect(() => {
    const fetchCollaborations = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/collaborations/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setCollaborations(data.collaborations);
        } else {
          console.error("Failed to fetch collaborations:", data.message);
        }
      } catch (error) {
        console.error("Error fetching collaborations:", error);
      }
    };

    if (userId) fetchCollaborations();
  }, [userId, token]); // Re-fetch data when userId or token changes

  // Handle form submission and store data in database
  const handleTitleUpdate = async (title, revenueShared, timePeriod) => {
    setShowForm(false);

    try {
      const response = await fetch("http://localhost:8080/api/collaborations/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          revenueShared,
          timePeriod,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setCollaborations([...collaborations, data.collaboration]);
      } else {
        console.error("Failed to create collaboration:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 min-h-screen">
      {/* Left Sidebar */}
      <Explorenav />

      {/* Main Content */}
      <div className="ml-72 p-6 flex flex-col w-full">
        <div className="bg-green-100 rounded-lg p-6 shadow-md mb-6">
          <h1 className="text-2xl font-semibold mb-4">Welcome!</h1>
          <p className="text-gray-600">
            Create a Collaboration Request: Connect with Like-Minded Businesses
            for Mutual Success.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Your Collaborations</h1>
        </div>

        {/* Your Collaborations Section */}
        <div className="flex flex-col items-center justify-center flex-grow mb-10">
          {!showForm ? (
            collaborations.length > 0 ? (
              collaborations.map((collab) => (
                <div key={collab.id} className="bg-white rounded-lg shadow-md h-24 w-full mb-4 border border-gray-200">
                  <div className="m-4">
                    <h2 className="text-xl font-semibold mb-2">{collab.title}</h2>
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row">
                        <p className="text-sm mb-2 pr-14 text-gray-700">
                          Revenue Shared: 
                          <span className="text-black font-semibold pl-2">{collab.revenueShared}</span>
                        </p>
                        <p className="text-sm mb-2 text-gray-700">
                          Time Period: 
                          <span className="text-black font-semibold pl-2">{collab.timePeriod}</span>
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex space-x-2">
                        <button className="border border-blue-600 text-blue-600 font-semibold px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white">
                          Edit
                        </button>
                        <button className="bg-green-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-green-600">
                          Requests
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 cursor-pointer hover:border-gray-400 flex flex-col items-center justify-center"
                onClick={() => setShowForm(true)}
                style={{ height: "200px", width: "300px" }}
              >
                <FaPlusCircle className="text-4xl text-gray-500 mb-3" />
                <p className="text-lg text-gray-500">Create new Collabs</p>
              </div>
            )
          ) : (
            <CollaborationForm
              setShowForm={setShowForm}
              handleTitleUpdate={handleTitleUpdate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCollab;
