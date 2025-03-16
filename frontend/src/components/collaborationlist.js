import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/google.jpeg";

const CollaborationsList = () => {
  const [collaborations, setCollaborations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/collaboration")
      .then((response) => {
        console.log("Frontend received:", response.data);
        setCollaborations(response.data.collaborations || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex space-x-4 overflow-x-auto mt-5">
      {collaborations.length > 0 ? (
        collaborations.map((collab) => (
          <div
            key={collab.id}
            className="bg-white p-6 rounded-lg shadow-md border mb-5 w-56 min-w-[14rem] cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/collabdetails/${collab.id}`)} // Pass ID to details page
          >
            <div className="flex justify-center items-center mb-4 h-[12vh]">
              <img
                src={collab.image || googleLogo}
                alt={collab.title}
                className="object-contain h-full"
              />
            </div>
            <hr />
            <h4 className="font-semibold mb-2 mt-4">{collab.title}</h4>
            <p className="text-sm text-gray-500">
              Revenue Shared: {collab.revenueShared}
            </p>
            <p className="text-sm text-gray-500">Timeline: {collab.timePeriod}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No collaborations found</p>
      )}
    </div>
  );
};

export default CollaborationsList;
