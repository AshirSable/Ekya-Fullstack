const db = require("../models");
const CollaborationRequest = db.CollaborationRequest;
const OngoingCollab = db.OngoingCollab;

// ✅ Create a new collaboration request
exports.createRequest = async (req, res) => {
  const { ownerId, senderUsername, collaborationTitle, senderId } = req.body;

  if (!ownerId || !senderUsername || !collaborationTitle || !senderId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const request = await CollaborationRequest.create({
      ownerId,
      senderId,
      senderUsername,
      collaborationTitle,
      status: "pending",
    });

    res.status(201).json({
      message: "Collaboration request sent successfully!",
      request,
    });
  } catch (error) {
    console.error("Error creating request:", error);
    res.status(500).json({ error: "Failed to send collaboration request", details: error.message });
  }
};

// ✅ Get collaboration requests for a specific user
exports.getUserRequests = async (req, res) => {
  const { ownerId } = req.params;

  try {
    const requests = await CollaborationRequest.findAll({
      where: { ownerId },
      order: [["createdAt", "DESC"]],
    });

    if (!requests.length) {
      return res.status(404).json({ message: "No collaboration requests found." });
    }

    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({ error: "Failed to retrieve collaboration requests" });
  }
};

// ✅ Update collaboration request status and create OngoingCollab if accepted
exports.updateRequestStatus = async (req, res) => {
  const { requestId } = req.params;
  const { status } = req.body;

  try {
    const request = await CollaborationRequest.findByPk(requestId);

    if (!request) {
      return res.status(404).json({ error: "Request not found." });
    }

    request.status = status;
    await request.save();

    if (status === "accepted") {
      await OngoingCollab.create({
        ownerId: request.ownerId,
        senderId: request.senderId,
        senderUsername: request.senderUsername,
        collaborationTitle: request.collaborationTitle,
        status: "in-progress",
      });
    }

    res.status(200).json({ message: `Request ${status} successfully.` });
  } catch (error) {
    console.error("Error updating request:", error);
    res.status(500).json({ error: "Failed to update request status" });
  }
};

// ✅ Delete a collaboration request
exports.deleteRequest = async (req, res) => {
  const { requestId } = req.params;

  try {
    const request = await CollaborationRequest.findByPk(requestId);

    if (!request) {
      return res.status(404).json({ error: "Request not found." });
    }

    await request.destroy();
    res.status(200).json({ message: "Request deleted successfully." });
  } catch (error) {
    console.error("Error deleting request:", error);
    res.status(500).json({ error: "Failed to delete request." });
  }
};
