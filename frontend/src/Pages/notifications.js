import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Explorenav from "../components/loginnav";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const userId = jwtDecode(localStorage.getItem("token"))?.id;
  useEffect(() => {

    if (!userId) {
      console.warn("⚠️ No userId found in localStorage.");
      return;
    }

    axios
      .get(`http://localhost:8000/api/collaboration-request/notifications/${userId}`)
      .then((response) => {
        console.log(response.data)
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("❌ Error fetching notifications:", error);
      });
  }, []);

  // ✅ Handle Accept Request
  // ✅ Handle Accept Request
  const handleAccept = async (requestId, senderId) => {
    console.log(`🔍 Attempting to accept request ID: ${requestId}`); // ✅ Log requestId
    try {
      const response = await axios.put(
        `http://localhost:8000/api/collaboration-request/${requestId}`,
        { status: "accepted", senderId: senderId }
      );

      console.log("✅ Response from server:", response.data);  // ✅ Log server response

      setNotifications((prevNotifications) =>
        prevNotifications.map((notif) =>
          notif.id === requestId ? { ...notif, status: "accepted" } : notif
        )
      );

      alert("✅ Collaboration accepted successfully! Go to 'Ongoing Collaborations' page.");
    } catch (error) {
      console.error("❌ Error accepting request:", error.response?.data || error.message);
      alert(`❌ Failed to accept the collaboration request: ${error.response?.data?.error || "Unknown error"}`);
    }
  };


  // ✅ Handle Reject Request
  const handleReject = async (requestId) => {
    try {
      await axios.put(`http://localhost:8000/api/collaboration-request/${requestId}`, {
        status: "rejected",
      });

      setNotifications((prevNotifications) =>
        prevNotifications.filter((notif) => notif.id !== requestId)
      );

      alert("❌ Collaboration request rejected.");
    } catch (error) {
      console.error("❌ Error rejecting request:", error);
      alert("❌ Failed to reject the collaboration request.");
    }
  };

  // ✅ View Profile
  const handleViewProfile = (senderId) => {
    if (!senderId) {
      alert("Error: Sender's profile ID is missing.");
      return;
    }
    navigate(`/profile/${senderId}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Explorenav />
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Notifications</h1>

      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-5 bg-white shadow-md rounded-lg border 
              ${notif.status === "accepted" ? "bg-green-100 border-green-500" : ""}
              ${notif.status === "rejected" ? "bg-red-100 border-red-500" : ""}`}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {notif.status === "accepted"
                  ? notif.isSenderNotification
                    ? `✅ Your request for collaboration with ${notif.receiverName} has been accepted!`
                    : "✅ You have accepted this collaboration."
                  : "Collaboration Request"}
              </h2>

              <p className="text-gray-600">
                <strong>{notif.senderUsername}</strong> has requested collaboration for{" "}
                <strong>{notif.collaborationTitle}</strong>.
              </p>

              {notif.status !== "accepted" && notif.status !== "rejected" && (
                <div className="flex space-x-3 mt-3">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => handleAccept(notif.id, notif.senderId)}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleReject(notif.id)}
                  >
                    Reject
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleViewProfile(notif.senderId)}
                  >
                    View Profile
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notifications yet.</p>
        )}
      </div>
    </div>
  );
}
