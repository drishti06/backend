const express = require('express');
// const jwt = require('jsonwebtoken');
const router = express.Router();
const { userLogin, userRegister, logout } = require('../controller/AuthController.js');
const passport = require('passport');

router.post('/signup', userRegister)
    .post('/login', passport.authenticate('local'), userLogin)
    .get('/logout', logout)


module.exports = router;