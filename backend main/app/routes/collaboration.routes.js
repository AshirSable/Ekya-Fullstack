const express = require("express");
const router = express.Router();
const { authJwt } = require("../middleware");
const collaborationController = require("../controllers/collaboration.controller");

// Ensure user authentication for creating a collaboration
router.post("/create", [authJwt.verifyToken], collaborationController.createCollaboration);

// FIXED: API endpoint to match frontend request
router.get("/user/:userId", [authJwt.verifyToken], collaborationController.getUserCollaborations);

router.delete("/delete/:collabId", [authJwt.verifyToken], collaborationController.deleteCollaboration);

module.exports = router;
