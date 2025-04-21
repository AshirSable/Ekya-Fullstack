const { Task } = require("../models");

exports.getTasks = async (req, res) => {
  const { collabId } = req.params;
  const tasks = await Task.findAll({ where: { collabId } });
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const { collabId } = req.params;
  const { text } = req.body;
  const task = await Task.create({ collabId, text, done: false });
  res.json(task);
};

exports.toggleTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findByPk(taskId);
  task.done = !task.done;
  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;
  await Task.destroy({ where: { id: taskId } });
  res.json({ message: "Deleted" });
};