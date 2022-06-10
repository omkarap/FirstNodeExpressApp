'use strict';
const jwt = require('jsonwebtoken');

const { getUserDetailModel } = require('../models/user.model')

const getUserDetails = async (req, res, next) => {
// Getting user id from JWT token
  const user_token = req.header('Authorization');
  let userId;
  jwt.verify(user_token, process.env.JWT_SECRET_KEY, function(err, decodedToken){
    if(err) { /* handle token err */ }
    else {
     let ttoken = decodedToken.username; 
     userId = ttoken.toString()
    }
  })
  //
  try {
    let res1 = await getUserDetailModel(userId);
    res.status(200).send(res1);
    next();
  } catch(e) {
    console.log(e.message);
    res.sendStatus(500);
  }
}

module.exports = {
  getUserDetails
}