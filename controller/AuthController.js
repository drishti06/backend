const User = require("../model/UserModel.js");
const crypto = require('crypto');
const { sanitizeUser } = require('../services/common');
const jwt = require('jsonwebtoken');

exports.userLogin = async (req, res) => {
  const user = req.user;
  res
    .cookie('jwt', user.token, {
      expires: new Date(Date.now() + 6000000),
      httpOnly: true,
    })
    .status(200)
    .json({ id: user.id, role: user.role , email: user.email});
};

exports.userRegister = async (req, res) => {
  try {
    const { confirmPassword, ...userData } = req.body;
    const userr = await User.findOne({ email: req.body.email })
    if (userr) {
      res.status(200).json({ message: 'user already exist' })
    }
    else {
      const salt = crypto.randomBytes(16);
      crypto.pbkdf2(
        req.body.password,
        salt,
        310000,
        32,
        'sha256',
        async function (err, hashedPassword) {
          const user = new User({ ...userData, password: hashedPassword, salt });
          const doc = await user.save();
          req.login(sanitizeUser(doc), (err) => {
            // this also calls serializer and adds to session
            if (err) {
              res.status(400).json(err);
            } else {
              const token = jwt.sign(
                sanitizeUser(doc),
                process.env.JWT_SECRET_KEY
              );
              res
                .cookie('jwt', token, {
                  expires: new Date(Date.now() + 3600000),
                  httpOnly: true,
                })
                .status(201)
                .json({ id: doc.id, role: doc.role, email: doc.email });
            }
          });
        }
      );
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.logout = async (req, res) => {
  res
    .cookie('jwt', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .sendStatus(200)
};

exports.downloadMuc = async(req,res) =>{
  
}