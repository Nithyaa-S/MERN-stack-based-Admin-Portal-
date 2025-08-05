const mongoose = require("mongoose");

// Schema for task assigned to agents
const taskSchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent", // Reference to the agent this task is assigned to
  },
  firstName: String,
  phone: String,
  notes: String,
});

module.exports = mongoose.model("Task", taskSchema);
