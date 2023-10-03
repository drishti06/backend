const multer = require("multer");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { getAllMusic, createMusic, deleteMusic, findAllAudiosById, yourAllMusic, editMusic } = require("../controller/MediaController.js");

const server = express();
const router = express.Router();

const audioStorage = multer.diskStorage({
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

const imageStorage = multer.diskStorage({
  destination: function (req, res, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/image")) {
      fs.mkdirSync("public/image");
    }
    cb(null, "public/image");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: audioStorage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".mp3" && ext !== ".wav") {
      return cb(new Error("only audio files of type .mp3 allowed"));
    }
    cb(null, true);
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".png") {
      return cb(new Error("only image of tpye .jpeg or .png allowed "));
    }
    cb(null, true);
  },
});

server.use(multer);
router.get("/allMusic", getAllMusic)
  .post("/music/:id", yourAllMusic)
  .post("/create", upload.fields([{ name: "music" }]), createMusic)
  .patch('/editMusic/:id', editMusic)
  .delete("/deleteMusic/:id", deleteMusic)

module.exports = router;