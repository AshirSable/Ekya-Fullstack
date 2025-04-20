import React, { useState, useEffect } from "react";
import Explorenav from "../components/loginnav";
import TopBar from "../components/topbar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function OngoingCollab() {
  const [collaborations, setCollaborations] = useState([]);
  const userId = jwtDecode(localStorage.getItem("token"))?.id;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/ongoing-collaborations/${userId}`)
      .then((res) => {
        setCollaborations(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching ongoing collaborations:", err);
      });
  }, [userId]);

  const handleStatusToggle = async (collabId) => {
    try {
      await axios.put(`http://localhost:8000/api/ongoing-collaborations/status/${collabId}`, {
        userId,
      });
      setCollaborations((prev) =>
        prev.map((item) => {
          if (item.id === collabId) {
            const ownerCompleted =
              userId === item.ownerId ? true : item.ownerCompleted;
            const collaboratorCompleted =
              userId === item.collaboratorId ? true : item.collaboratorCompleted;
            const status = ownerCompleted && collaboratorCompleted ? "completed" : "in-progress";
            return {
              ...item,
              ownerCompleted,
              collaboratorCompleted,
              status,
            };
          }
          return item;
        })
      );
    } catch (error) {
      console.error("❌ Error updating status:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 bg-gray-800">
        <Explorenav />
      </div>

      <div className="flex-1 p-5 ml-6 overflow-y-auto">
        <TopBar />
        {collaborations.map((collab, index) => {
          const isOwner = userId === collab.ownerId;
          const partnerName = isOwner ? collab.collaboratorName : collab.ownerName;
          const partnerLogo = isOwner ? collab.collaboratorLogo : collab.ownerLogo;

          return (
            <div
              key={index}
              className="w-full h-60 rounded-lg relative overflow-hidden shadow-md p-6 mb-6 bg-white"
            >
              <h1 className="text-xl font-bold text-black">{collab.projectTitle}</h1>
              <h3 className="text-md text-gray-500 mt-1">
                A collaboration on: {collab.projectTitle}
              </h3>

              <div className="flex gap-3 mt-3">
                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-gray-600 bg-gray-200 rounded-full">
                  2 Months
                </span>
                <span
                  className={`inline-flex items-center px-4 py-1 text-sm font-medium text-white rounded-full capitalize ${
                    collab.status === "completed" ? "bg-green-600" : "bg-yellow-500"
                  }`}
                >
                  {collab.status}
                </span>
              </div>

              <img
                src={collab.ownerLogo || "/assets/defaultlogo.png"}
                className="absolute bottom-0 left-0 w-28 h-auto object-cover"
                alt="Owner Logo"
              />

              <img
                src={partnerLogo || "/assets/defaultlogo.png"}
                className="absolute top-1/2 right-9 transform -translate-y-1/2 w-28 h-auto object-cover"
                alt="Partner Logo"
              />

              <h1 className="absolute bottom-4 right-6 text-lg font-normal text-gray-600">
                Collaborating with {partnerName}
              </h1>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={
                      (isOwner && collab.ownerCompleted) ||
                      (!isOwner && collab.collaboratorCompleted)
                    }
                    onChange={() => handleStatusToggle(collab.id)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    Mark as Completed (Both collaborators must mark it)
                  </span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OngoingCollab;
