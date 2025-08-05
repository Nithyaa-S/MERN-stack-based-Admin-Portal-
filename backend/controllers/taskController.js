const Task = require("../models/Task");

// @desc    Get all tasks with agent info
// @route   GET /api/tasks
// @access  Private
exports.getAllTasks = async (req, res) => {
  try {
    // Populate agentId with name and email
    const tasks = await Task.find().populate("agentId", "name email");
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};
