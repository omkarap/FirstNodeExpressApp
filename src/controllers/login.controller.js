'use strict';
const {login, registeration} = require('../models/login.model');
const jwt = require('jsonwebtoken');

// Register user
const createUser = async (req, res, next) => {
  registeration(req.body.first_name, req.body.last_name, req.body.email, req.body.password, req.body.mobile, function(err, objResultSet) {
    if (err) {
     return res.status(209).send(err);
    }
    if (objResultSet != undefined && objResultSet != 0 ) {
      // successful login
     return res.status(200).send(objResultSet);
    }else{
      res.status(500).send({
          success:false,
          error_code:"",
          message:"Internal Server Error",
        });
    }
  });
  }

const checkUser = function(req, res) {
      login(req.body.email,req.body.password, function(err, objResultSet) {
      if (err) {
       return res.status(209).send(err);
      }
      if (objResultSet != undefined && objResultSet != 0 ) {
        // successful login
       return res.status(200).send(objResultSet);
      }else{
        res.status(209).send({
            success:false,
            error_code:"",
            message:"Invalid username or password",
          });
      }
    });
  };

  module.exports = {
    checkUser, createUser
  }