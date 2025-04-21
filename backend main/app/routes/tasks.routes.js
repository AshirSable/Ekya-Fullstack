const express = require("express");
const router = express.Router();
const {
  getTasks,
  addTask,
  toggleTask,
  deleteTask
} = require("../controllers/task.controller");

router.get("/:collabId", getTasks);
router.post("/:collabId", addTask);
router.patch("/:collabId/:taskId", toggleTask);
router.delete("/:collabId/:taskId", deleteTask);

module.exports = router;