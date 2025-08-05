const Agent = require("../models/Agent");
const Task = require("../models/Task");
const XLSX = require("xlsx");
const path = require("path");

// @desc    Upload CSV file and distribute tasks among agents
// @route   POST /api/upload
// @access  Private
exports.uploadCSV = async (req, res) => {
  try {
    // Read the uploaded file from disk
    const filePath = path.join(__dirname, "..", "uploads", req.file.filename);
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet); // Convert sheet to JSON

    // Get all agents
    const agents = await Agent.find();
    if (agents.length < 1)
      return res.status(400).json({ message: "No agents found" });

    // Calculate how many tasks per agent
    const tasksPerAgent = Math.floor(data.length / agents.length);
    let extra = data.length % agents.length;

    let start = 0;
    for (let i = 0; i < agents.length; i++) {
      const end = start + tasksPerAgent + (extra > 0 ? 1 : 0);
      extra--;

      // Prepare tasks for the current agent
      const tasksForThisAgent = data.slice(start, end).map((item) => ({
        agentId: agents[i]._id,       // Link task to agent
        firstName: item.FirstName,
        phone: item.Phone,
        notes: item.Notes,
      }));

      // Save tasks to DB
      await Task.insertMany(tasksForThisAgent);
      start = end;
    }

    res.json({ message: "Tasks distributed successfully", count: data.length });
  } catch (err) {
    console.error("UPLOAD FAILED:", err);
    res.status(500).json({ message: "Upload failed" });
  }
};
