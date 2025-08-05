const jwt = require("jsonwebtoken");

// Middleware to verify JWT and protect routes
const auth = (req, res, next) => {
  // Extract token from Authorization header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // If token is missing, deny access
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    // Verify token and attach user info to request
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    // Token is invalid or expired
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = auth;
