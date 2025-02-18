const db = require("../models");
const Collaboration = db.collaboration;

// Create a new collaboration
exports.createCollaboration = async (req, res) => {
  try {
    const { title, revenueShared, timePeriod } = req.body;
    const userId = req.userId; // Get user ID from JWT token

    const collaboration = await Collaboration.create({
      title,
      revenueShared,
      timePeriod,
      userId,
    });

    res.status(201).json({ message: "Collaboration created successfully", collaboration });
  } catch (error) {
    res.status(500).json({ message: "Error creating collaboration", error: error.message });
  }
};

// Fetch all collaborations of a specific user
exports.getUserCollaborations = async (req, res) => {
  try {
    const userId = req.params.userId;
    const collaborations = await Collaboration.findAll({ where: { userId } });

    res.status(200).json({ collaborations });
  } catch (error) {
    res.status(500).json({ message: "Error fetching collaborations", error: error.message });
  }
};
