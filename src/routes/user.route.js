const express = require('express')
const app = express();
const router = express.Router()
const verifyToken = require('../validate/verifyToken');

/** Middleware to verify the jwt */
router.use(verifyToken);

//appUser routes
const userController = require('../controllers/user.controller');
router.get('/getUserDetails', userController.getUserDetails);

module.exports = router;