const express = require('express')
const router = express.Router()

// For Login
const { checkUser, createUser } = require('../controllers/login.controller');
router.post('/login', checkUser);

// For Registeration
router.post('/registeration', createUser);


module.exports = router;