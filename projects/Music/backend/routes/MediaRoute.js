const multer = require("multer");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { getAllMusic, createMusic, deleteMusic, getMusic } = require("../controller/MediaController.js");

const server = express();
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/audio")) {
      fs.mkdirSync("public/audio");
    }
    cb(null, "public/audio");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".mp3" && ext !== ".wav") {
      return cb(new Error("only audio files of type .mp3 allowed"));
    }
    cb(null, true);
  },
});

server.use(multer);
router.get("/allMusic", getAllMusic);
router.get("/music", getMusic);
router.delete("/deleteMusic", deleteMusic); 
router.post("/newMusic", upload.fields([{ name: "music" }]), createMusic);

module.exports = router;