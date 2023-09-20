const mongoose = require("mongoose");
const { Schema } = require("mongoose");

//user schema
const UserSchema = Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
  }
);

//user model
const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;