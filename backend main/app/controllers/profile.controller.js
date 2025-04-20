const db = require("../models");
const Profile = db.profile;

// ✅ Fetch user profile (Creates if doesn't exist)
exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    let profile = await Profile.findOne({ where: { userId } });

    if (!profile) {
      profile = await Profile.create({
        userId,
        businessName: "",
        businessLogo: "",
        businessTitle: "",
        businessDescription: "",
        businessCoreValues: "",
        businessImage: "",
        aboutTitle: "",
        servicesDescription: "",
        servicesHeroImage: "",
        businessDomain: "",
        preferredCollaborationSectors: [],
        collaborationInterests: [],
        milestones: [],
      });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Error fetching profile", error });
  }
};

// ✅ Create a new profile (Only if not already created)
exports.createProfile = async (req, res) => {
  try {
    const { userId } = req.body;

    // Check if a profile already exists
    console.log(req)
    const existingProfile = await Profile.findOne({ where: { userId } });
    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    const profile = await Profile.create({
      userId,
      ...req.body, // Spread body content to store additional fields
    });

    res.status(201).json({ message: "Profile created successfully!", profile });
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ message: "Error creating profile", error });
  }
};

// ✅ Update profile (If not found, creates one)
exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profileData = req.body;
    console.log(req.body)


    let profile = await Profile.findOne({ where: { userId } });

    if (!profile) {
      profile = await Profile.create({ ...profileData, userId });
    } else {
      const businesslogoname = req.files.businessLogo[0]?.filename
      await profile.update({ ...profileData, "businessLogo": businesslogoname });
    }

    res.status(200).json({ message: "Profile updated successfully!", profile });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile", error });
  }
};


// ✅ Delete Profile
exports.deleteProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const profile = await Profile.findOne({ where: { userId } });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    await profile.destroy();
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "Error deleting profile", error });
  }
};

exports.getProfileById = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await db.profile.findOne({ where: { userId: id } });

    if (!profile) {
      return res.status(404).json({ error: "Profile not found." });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Failed to fetch profile." });
  }
};
