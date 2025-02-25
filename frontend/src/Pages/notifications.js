import { useState } from "react";
import { FaCheck, FaTimes, FaEye, FaUser } from "react-icons/fa";
import Explorenav from "../components/loginnav";

export default function Notifications() {
  const [filter, setFilter] = useState("all");

  const notifications = [
    { id: 1, type: "incoming", topic: "AI-powered Furniture Tool", description: "XYZ Ltd wants to collaborate on your AI furniture tool.", timestamp: "2 hours ago" },
    { id: 2, type: "accepted", topic: "Real-time Data Dashboard", description: "Your request to join ABC Tech’s project has been accepted!", timestamp: "5 hours ago" },
    { id: 3, type: "incoming", topic: "Smart Supply Chain System", description: "DEF Corp wants to join your project on logistics AI.", timestamp: "1 day ago" },
    { id: 4, type: "accepted", topic: "Blockchain Security Framework", description: "Your collaboration request with SecureNet was accepted!", timestamp: "3 days ago" },
    { id: 5, type: "incoming", topic: "Eco-friendly Packaging AI", description: "GreenTech wants to collaborate on sustainable materials.", timestamp: "6 days ago" },
    { id: 6, type: "accepted", topic: "AI-driven CRM Platform", description: "CRM Solutions accepted your request to collaborate!", timestamp: "1 week ago" },
  ];

  const filteredNotifications = notifications.filter(notif => filter === "all" || notif.type === filter);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Explorenav />
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Notifications</h1>

      {/* Filter Tabs */}
      <div className="mb-6 flex space-x-4 border-b pb-2">
        {["all", "incoming", "accepted"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 text-sm font-medium rounded-t-md ${
              filter === type ? "border-b-4 border-[#2BAF7F] text-[#2BAF7F]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {type === "all" ? "All" : type === "incoming" ? "Incoming Requests" : "Accepted Requests"}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notif) => (
          <div
            key={notif.id}
            className="p-5 bg-white shadow-md rounded-lg border hover:shadow-lg transition-all duration-200"
          >
            <h2 className="text-lg font-semibold text-gray-800">{notif.topic}</h2>
            <p className="text-gray-600">{notif.description}</p>

            {/* Timestamp */}
            <p className="text-xs text-gray-400 mt-1">{notif.timestamp}</p>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-3">
              {notif.type === "incoming" ? (
                <>
                  {/* <button className="flex items-center px-3 py-1.5 bg-[#2BAF7F] text-white text-sm rounded-md shadow hover:bg-[#259968] transition">
                    <FaCheck className="mr-2" /> Accept
                  </button>
                  <button className="flex items-center px-3 py-1.5 bg-red-500 text-white text-sm rounded-md shadow hover:bg-red-600 transition">
                    <FaTimes className="mr-2" /> Reject
                  </button> */}
                  <button className="flex items-center px-3 py-1.5 bg-[#3B82F6] text-white text-sm rounded-md shadow hover:bg-[#2563EB] transition">
                    <FaUser className="mr-2" /> View Profile
                  </button>
                </>
              ) : (
                <>
                  <button className="flex items-center px-3 py-1.5 bg-[#31d34c] text-white text-sm rounded-md shadow hover:bg-[#2563EB] transition">
                    {"Go To Ongoing ->"}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
