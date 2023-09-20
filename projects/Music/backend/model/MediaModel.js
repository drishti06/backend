const mongoose = require("mongoose");
const { Schema } = mongoose;

const MediaSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    music: [{type:String}],
  },
  {
    timestamps: true,
  }
);

const Media = mongoose.model("Media", MediaSchema);

module.exports = Media;