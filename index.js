require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const AuthRoutes = require("./routes/AuthRoutes.js");
const MediaRoutes = require("./routes/MediaRoute.js");
const UserRoutes = require("./routes/UserRoutes.js");
const jwt = require('jsonwebtoken')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const session = require("express-session")
const cookieParser = require('cookie-parser');
const User = require("./model/UserModel.js");
const passport = require("passport");
const path = require("path");
const crypto = require('crypto')
const { isAuth, sanitizeUser, cookieExtractor } = require('./services/common');
const { env } = require('process');



// const jwt = require('jsonwebtoken');
// const jwtsecret = "drishtijetsecretkey"

//server initialization
const server = express();

const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = "jwtsecret";

// middleware

server.use(express.json());
server.use(bodyParser.json());
server.use(cors());
dotenv.config();
server.use(cookieParser());
server.use("/public", express.static(path.join(__dirname, "public")));
server.use(cookieParser());
server.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false, // don't save session if unmodified
    saveUninitialized: false,
  })
);
server.use(passport.authenticate('session'));

// Passport Strategies

passport.use(
  'local',
  new LocalStrategy({ usernameField: 'email' }, async function (
    email,
    password,
    done
  ) {
    // by default passport uses username
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: 'invalid credentials' }); // for safety
      }
      crypto.pbkdf2(
        password,
        user.salt,
        310000,
        32,
        'sha256',
        async function (err, hashedPassword) {
          if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
            return done(null, false, { message: 'invalid credentials' });
          }
          const token = jwt.sign(
            sanitizeUser(user),
            process.env.JWT_SECRET_KEY
          );
          done(null, { id: user.id, role: user.role, email: user.email, token }); // this lines sends to serializer
        }
      );
    } catch (err) {
      done(err);
    }
  })
);


// this creates session variable req.user on being called from callbacks
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, { id: user.id, role: user.role , email:user.email });
  });
});

// this changes session variable req.user when called from authorized request

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL).then(() => console.log("database connected"));
}

server.use("/auth", AuthRoutes);
server.use("/audio", MediaRoutes);
server.use("/user", UserRoutes)

server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});