const mongoose = require("mongoose");
const { Schema } = require("mongoose");

//user schema
const UserSchema = Schema(
  {
    password: {
      type: Buffer,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    confirmPassword: {
      type: String,
    },
    salt: Buffer,
    role: {
      type: String,
      default: 'unsubcribed'
    }
  }, { timeStamps: true }
);


const virtual = UserSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

//user model
const User = mongoose.model("Users", UserSchema);
module.exports = User;