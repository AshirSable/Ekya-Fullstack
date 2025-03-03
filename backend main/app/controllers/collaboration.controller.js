const db = require("../models");
const Collaboration = db.collaboration;

// Fetch all collaborations for a specific user
exports.getUserCollaborations = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const collaborations = await Collaboration.findAll({
      where: { userId },
    });

    res.status(200).json({ collaborations });
  } catch (error) {
    console.error("Error fetching collaborations:", error);
    res.status(500).json({ message: "Server error while fetching collaborations" });
  }
};

// Create a new collaboration
exports.createCollaboration = async (req, res) => {
  try {
    const { title, revenueShared, timePeriod } = req.body;
    const userId = req.userId; // Extract userId from JWT token

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const newCollaboration = await Collaboration.create({
      title,
      revenueShared,
      timePeriod,
      userId,
    });

    res.status(201).json({ message: "Collaboration created successfully", collaboration: newCollaboration });
  } catch (error) {
    console.error("Error creating collaboration:", error);
    res.status(500).json({ message: "Server error while creating collaboration" });
  }
};

exports.deleteCollaboration = async (req, res) => {
  try {
    const collabId = req.params.collabId;
    const userId = req.userId; // Extract user ID from token

    const collaboration = await Collaboration.findOne({ where: { id: collabId, userId } });

    if (!collaboration) {
      return res.status(404).json({ message: "Collaboration not found or unauthorized" });
    }

    await collaboration.destroy();
    res.status(200).json({ message: "Collaboration deleted successfully" });
  } catch (error) {
    console.error("Error deleting collaboration:", error);
    res.status(500).json({ message: "Server error while deleting collaboration" });
  }
};

exports.getAllCollaborations = async (req, res) => {
  try {
    const collaborations = await Collaboration.findAll(); // Fetch all data
    res.status(200).json({ collaborations }); // Ensure correct response format
  } catch (error) {
    console.error("Error fetching collaborations:", error);
    res.status(500).json({ message: "Server error while fetching collaborations" });
  }
};
