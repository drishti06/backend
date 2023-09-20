const UserModel = require("../model/UserModel.js");
const bcrypt = require("bcrypt");

//login api
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (email && password) {
      if (user) {
        const validity = await bcrypt.compare(password, user.password);
        validity
          ? res.status(200).json(user)
          : res.status(404).json("wrong credentials");
      } else {
        res.status(404).send("User not found");
      }
    } else {
      res
        .status(400)
        .json({ errorMessage: "all fields are required" });
      console.log({ errorMessage: "all fields are required" });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
    console.log({ errorMessage: error.message });
  }
};

//register api
exports.userRegister = async (req, res) => {
  const { username, password, email, confirmPassword } = req.body;
  console.log({ username, password, email, confirmPassword });
  const user = await UserModel.findOne({ email: email });
  try {
    if (username && password && email && confirmPassword) {
      if (user) {
        res.status(400).json({ errorMessage: "user already exists" });
      } else {
        if (password !== confirmPassword) {
          res.status(400).json({
            errorMessage: "password and confirmpassword does not match",
          });
        } else {
          const salt = await bcrypt.genSalt(10);
          const hashedPass = await bcrypt.hash(password, salt);
          const newUser = new UserModel({
            username,
            password: hashedPass,
            confirmPassword: password,
            email,
          });
          try {
            await newUser.save();
            res.status(200).json({ message: "Successfully Registered" });
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        }
      }
    } else {
      res.status(404).json({ errorMessage: "fill all fields" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};