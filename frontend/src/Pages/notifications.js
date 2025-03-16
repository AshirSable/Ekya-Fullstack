import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import Explorenav from "../components/loginnav";
import axios from "axios";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/notifications`)
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => console.error("Error fetching notifications:", error));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Explorenav />
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Notifications</h1>

      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className="p-5 bg-white shadow-md rounded-lg border hover:shadow-lg transition-all duration-200"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Collaboration Request
              </h2>
              <p className="text-gray-600">
                <strong>{notif.senderName}</strong> has requested collaboration for{" "}
                <strong>{notif.projectTitle}</strong>.
              </p>
              <p className="text-xs text-gray-400 mt-1">{notif.timestamp}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notifications yet.</p>
        )}
      </div>
    </div>
  );
}
