const db = require("../models");
const Profile = db.profile;
const User = db.user;

// Fetch user profile by userId
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ where: { userId: req.params.id } });
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profileData = req.body;

    let profile = await Profile.findOne({ where: { userId } });

    if (!profile) {
      profile = await Profile.create({ ...profileData, userId });
    } else {
      await profile.update(profileData);
    }

    res.json({ message: "Profile updated successfully!", profile });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
};
