const mongoose = require("mongoose");

// Schema for agent user (task receiver)
const agentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  password: String, // Stored in hashed format
});

module.exports = mongoose.model("Agent", agentSchema);
