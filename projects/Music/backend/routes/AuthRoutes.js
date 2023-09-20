const express = require('express');
const router = express.Router();
const { userLogin, userRegister } = require('../controller/AuthController.js');

router.use('/login', userLogin);
router.use('/register', userRegister);

module.exports = router;