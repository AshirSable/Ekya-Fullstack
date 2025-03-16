const express = require("express");
const router = express.Router();
const { CollaborationRequest } = require("../models");

// Route to handle sending collaboration request
router.post("/", async (req, res) => {
  const { username, projectTitle, ownerId } = req.body;

  if (!username || !projectTitle || !ownerId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newRequest = await CollaborationRequest.create({
      username,
      projectTitle,
      ownerId,
    });

    res.status(201).json({
      message: "Collaboration request sent successfully",
      request: newRequest,
    });
  } catch (error) {
    console.error("Error creating collaboration request:", error);
    res.status(500).json({
      error: "Failed to send collaboration request",
      details: error.message,
    });
  }
});

module.exports = router;
