const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uploadCSV } = require("../controllers/uploadController");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if ([".csv", ".xlsx", ".xls"].includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only csv, xlsx, xls allowed"));
  }
};

const upload = multer({ storage, fileFilter });

router.post("/", auth, upload.single("file"), uploadCSV);

module.exports = router;
