const express = require("express");
const router = express.Router();
const { Profile } = require("../models");
const authMiddleware = require("../middlewares/authMiddleware"); // Authentication middleware

// Update profile API
router.put("/profile/:userId", authMiddleware, async (req, res) => {
  try {
    const { businessTitle, businessDescription, businessCoreValues, collaborationInterests, milestones } = req.body;
    const userId = req.userId; // Extract user ID from token

    const profile = await Profile.findOne({ where: { userId } });

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

router.get("/profile/:userId", authMiddleware, async (req, res) => {
    try {
      const profile = await Profile.findOne({ where: { userId: req.params.userId } });
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
