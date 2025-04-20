const express = require("express");
const router = express.Router();
const controller = require("../controllers/ongoingcollab.controller");

router.post("/", controller.createOngoingFromRequest);
router.get("/:userId", controller.getOngoingForUser);
router.put("/status/:collabId", controller.updateWorkStatus);

module.exports = router;
