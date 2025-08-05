const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
const User = require("./models/User");

const createAdmin = async () => {
  try {
    await connectDB();

    const email = "admin@example.com";
    const plainPassword = "admin123";

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const admin = new User({
      email,
      password: hashedPassword,
    });

    await admin.save();
    console.log("✅ Admin user created with hashed password");
    process.exit();
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
