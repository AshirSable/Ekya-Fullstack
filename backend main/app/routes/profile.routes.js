const express = require("express");
const router = express.Router();
const db = require("../models");
const { verifyToken } = require("../middleware/authJwt");
const { BearerToken } = require("../utils/common");
const jwt = require('jsonwebtoken')

// Update profile API
router.put("/:userId", [verifyToken], async (req, res) => {
  try {
    const { businessTitle, businessDescription, businessCoreValues, collaborationInterests, milestones } = req.body;
    const token = BearerToken(req.headers['authorization']); // Extract user ID from token
    const userId = jwt.decode(token)?.id
    const profile = await db.profile.findOne({ where: { userId } });

    if (!profile) {
      return res.status(404).json({ success: false, message: "Profile not found" });
    }

    // Update profile
    await profile.update({
      businessTitle,
      businessDescription,
      businessCoreValues,
      collaborationInterests,
      milestones
    });

    res.json({ success: true, message: "Profile updated successfully!" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/:userId", [verifyToken], async (req, res) => {
  try {
    const profile = await db.profile.findOne({ where: { userId: req.params.userId } });
    if (!profile) {
      return res.status(404).json({ success: false, message: "Profile not found" });
    }
    res.json({ success: true, profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
