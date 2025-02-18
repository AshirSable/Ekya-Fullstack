const express = require("express");
const router = express.Router();
const { authJwt } = require("../middleware"); // Ensure the user is authenticated
const collaborationController = require("../controllers/collaboration.controller");

// Protect the route with authentication middleware
router.post("/create", [authJwt.verifyToken], collaborationController.createCollaboration);
router.get("/user/:userId", collaborationController.getUserCollaborations);

module.exports = router;
