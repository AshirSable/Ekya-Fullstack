const express = require("express");
const router = express.Router();
const collaborationRequestController = require("../controllers/collaborationrequest.controller");

// ✅ Route to send a collaboration request
router.post("/", collaborationRequestController.createRequest);

// ✅ Route to get collaboration requests for a specific user
router.get("/notifications/:ownerId", collaborationRequestController.getUserRequests);

// ✅ Route to update collaboration request status
router.put("/:requestId", collaborationRequestController.updateRequestStatus);

// ✅ Route to delete a collaboration request
router.delete("/:requestId", collaborationRequestController.deleteRequest);

module.exports = router;
