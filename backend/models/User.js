const mongoose = require("mongoose");

// Schema for admin user (login)
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Prevent duplicate accounts
  },
  password: {
    type: String,
    required: true, // Stored in hashed format
  },
});

module.exports = mongoose.model("User", userSchema);
