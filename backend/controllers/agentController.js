const Agent = require("../models/Agent");
const bcrypt = require("bcryptjs");

// @desc    Create a new agent
// @route   POST /api/agents
// @access  Private
exports.createAgent = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Check if agent already exists
    const existing = await Agent.findOne({ email });
    if (existing) return res.status(400).json({ message: "Agent already exists" });

    // Hash the agent's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the agent
    const newAgent = new Agent({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    await newAgent.save();
    res.status(201).json({ message: "Agent created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc    Get all agents (excluding passwords)
// @route   GET /api/agents
// @access  Private
exports.getAgents = async (req, res) => {
  try {
    const agents = await Agent.find().select("-password");
    res.json(agents);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
