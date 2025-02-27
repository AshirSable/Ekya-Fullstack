import React, { useState, useEffect } from "react";
import Explorenav from "../components/loginnav";
import { FaPlusCircle } from "react-icons/fa";
import CollaborationForm from "../components/addcollabform";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AddCollab = () => {
  const [showForm, setShowForm] = useState(false);
  const [collaborations, setCollaborations] = useState([]);
  const token = localStorage.getItem("token");
  const userId = jwtDecode(token).id;

  useEffect(() => {
    if (!token) {
      console.error("User ID or Token missing. Cannot fetch data.");
      return;
    }

    const fetchCollaborations = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/collaboration/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCollaborations(response.data.collaborations || []);
      } catch (error) {
        console.error("Error fetching collaborations:", error.response?.data?.message || error.message);
      }
    };

    fetchCollaborations();
  }, [token]);

  const handleTitleUpdate = async (title, revenueShared, timePeriod) => {
    setShowForm(false);
    try {
      const response = await axios.post("http://localhost:8000/api/collaboration/create", {
        title,
        revenueShared,
        timePeriod,
        userId,
      }, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });

      setCollaborations([...collaborations, response.data.collaboration]);
    } catch (error) {
      console.error("Error creating collaboration:", error.response?.data?.message || error.message);
    }
  };

  const handleDelete = async (collabId) => {
    try {
      await axios.delete(`http://localhost:8000/api/collaboration/delete/${collabId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCollaborations(collaborations.filter(collab => collab.id !== collabId));
    } catch (error) {
      console.error("Error deleting collaboration:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Explorenav />

      <div className="ml-72 p-6 flex flex-col w-full">
        {/* Welcome Message */}
        <div className="bg-green-100 rounded-lg p-6 shadow-md mb-6">
          <h1 className="text-2xl font-semibold mb-4">Welcome!</h1>
          <p className="text-gray-600">
            Create a Collaboration Request: Connect with Like-Minded Businesses for Mutual Success.
          </p>
        </div>

        {/* Your Collaborations Header */}
        <h1 className="text-2xl font-semibold mb-4">Your Collaborations</h1>

        {/* Collaboration List (Updated Alignment) */}
        <div className="flex flex-col space-y-4 mb-10">
          {!showForm ? (
            collaborations.length > 0 ? (
              collaborations.map((collab) => (
                <div key={collab.id} className="bg-white rounded-lg shadow-md h-24 w-full border  self-center  border-gray-200 p-4">
                  <h2 className="text-xl font-semibold">{collab.title}</h2>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex space-x-10">
                      <p className="text-sm text-gray-700">
                        Revenue Shared: <span className="font-semibold">{collab.revenueShared}</span>
                      </p>
                      <p className="text-sm text-gray-700">
                        Time Period: <span className="font-semibold">{collab.timePeriod}</span>
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-blue-600 text-blue-600 font-semibold px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white">
                        Edit
                      </button>
                      <button className="bg-green-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-green-600">
                        Requests
                      </button>
                      <button
                        onClick={() => handleDelete(collab.id)}
                        className="bg-red-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : null
          ) : (
            <CollaborationForm setShowForm={setShowForm} handleTitleUpdate={handleTitleUpdate} />
          )}
        </div>

        {/* Floating Add Button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 flex items-center"
          >
            <FaPlusCircle className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AddCollab;
