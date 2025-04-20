const express = require("express");
const router = express.Router();
const db = require("../models");
const { verifyToken } = require("../middleware/authJwt");
const upload = require("../middleware/upload");
const { BearerToken } = require("../utils/common");
const jwt = require('jsonwebtoken');
const { updateProfile, getProfile, getProfileById } = require("../controllers/profile.controller");

// Update profile API
router.put("/:userId", [verifyToken, upload.fields([{ name: "businessLogo" }])], updateProfile)

router.get("/:userId", [verifyToken], getProfile)

router.get("/profile/:id", getProfileById);


//     async (req, res) => {
//   try {
//     const profile = await db.profile.findOne({ where: { userId: req.params.userId } });
//     if (!profile) {
//       return res.status(404).json({ success: false, message: "Profile not found" });
//     }
//     res.json({ success: true, profile });
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

module.exports = router;
