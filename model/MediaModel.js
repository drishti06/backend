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
    music: [{ type: String }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    image: [{ type: String, required: true }]
  },
  {
    timestamps: true,
  }
);

const Media = mongoose.model("Media", MediaSchema);

module.exports = Media;