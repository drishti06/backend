const Media = require("../model/MediaModel.js");
const path = require("path");

exports.getAllMusic = async (req, res) => {
  try {
    const musics = await Media.find();
    res.json(musics);
    // console.log(musics)
  } catch (error) {
    console.log({ errorMessageInAllMusic: error.message });
    res.status(400).json({ errorMessageInAllMusic: error.message });
  }
};

exports.getMusic = async (req, res) => {
  const { name } = req.body;
  try {
    const musics = await Media.find({ name: name });
    res.json(musics);
  } catch (error) {
    console.log({ errorMessageInGetmusic: error.message });
    res.status(400).json({ errorMessageInGetmusic: error.message });
  }
};

exports.createMusic = async (req, res) => {
  const { name, author } = req.body;
  let musicPaths = [];
  if (Array.isArray(req.files.music) && req.files.music.length > 0) {
    for (let musc of req.files.music) {
      musicPaths.push("/"+ musc.path);
    }
  }

  try {
    const existingMusic = await Media.findOne({ name: name });
    if (!existingMusic) {
      const createMusic = await Media.create({
        name,
        author,
        music: musicPaths,
      });
      res.json({ messasge: "music added !", createMusic });
    } else {
      console.log("same name music exists , use different name ...");
    }
  } catch (error) {
    console.log({ errorMessageInCreation: error.message });
    res.status(400).json({ errorMessageInCreation: error.message });
  }
};

exports.deleteMusic = async (req, res) => {
  const { name } = req.body;
  try {
    const music = await Media.findOneAndDelete({ name: name });
    console.log("delete");
    res.status(200).json(music.name);
  } catch (error) {
    console.log({ errorMessageIndeleting: error.message });
    res.status(400).json({ errorMessageIndeleting: error.message });
  }
};