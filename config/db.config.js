'use strict';
const mysql = require('mysql');
const {createPool} = require("mysql");

// const dbConn = createPool({
//   connectionLimit: 100,
//   host     : process.env.HOST,
//   user     : process.env.USER_NAME,
//   password : process.env.PASS,
//   database : process.env.DB_NAME 
// });

const dbConn = mysql.createPool({
    connectionLimit: 100,
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "novel_vista",
 })

//server
/*const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'wwwktspl_kamkaj',
  password : 'bfi;itnJ=AT~',
  database : 'wwwktspl_dream_job_search'
});
*/

dbConn.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database Connected: " + connection.threadId);
});

module.exports = dbConn;