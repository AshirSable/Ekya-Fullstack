const CollaborationRequest = require("../models/collabrequest.model"); // Ensure the model is imported

exports.sendCollabRequest = async (req, res) => {
    const { receiverId, senderName, projectTitle } = req.body;
  
    // Ensure required fields are present
    if (!receiverId || !senderName || !projectTitle) {
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    try {
      const request = await CollaborationRequest.create({
        receiverId,
        senderName,
        projectTitle,
        timestamp: new Date().toISOString()
      });
  
      res.status(201).json({ message: "Request sent successfully", request });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to send collaboration request", details: error.message });
    }
  };
  
