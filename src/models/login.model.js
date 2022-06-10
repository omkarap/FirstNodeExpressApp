'use strict';
var dbConn = require('../../config/db.config');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');


const registeration = (first_name, last_name, email, password, mobile, resultNew) => {
    dbConn.getConnection( async (err, connection) => {
        if (err) throw (err)
        const sqlSearch = "SELECT * FROM users WHERE email = ?"
        const search_query = mysql.format(sqlSearch,[email])
        const sqlInsert = "INSERT INTO users (id, first_name, last_name, email, password, mobile, status) VALUES (" + `'0', '${first_name}', '${last_name}', '${email}', '${password}', '${mobile}', '1'` + ")";
        console.log("INSERT", sqlInsert)
        const insert_query = mysql.format(sqlInsert, [email, password])
        // ? will be replaced by values
        // ?? will be replaced by string
        await connection.query (search_query, async (err, result) => {
         if (err) throw (err)
         console.log("------> Search Results")
         console.log(result.length)
         if (result.length != 0) {
          connection.release()
          console.log("------> User already exists")
          resultNew({resultCode:0, Error: "User already exists !!!"});
         } 
         else {
          await connection.query (insert_query, (err, result)=> {
          connection.release()
          if (err) throw (err)
          console.log ("--------> Created new User")
           //console.log(result.insertId)
           resultNew({resultCode:1, success: "User registered successfully"});
         })
        }
       }) //end of connection.query()
       }) //end of db.getConnection()
}

const login = (email, password, resultNew) => {
    dbConn.getConnection ( async (err, connection)=> {
        if (err) throw (err)
        const sqlSearch = "SELECT * FROM users WHERE email = ?"
        const search_query = mysql.format(sqlSearch,[email])
        await connection.query (search_query, async (err, result) => {
         connection.release()
         let id = Object.values(result.map((data) => data.id));
         let fname = Object.values(result.map((data) => data.first_name));
         let lname = Object.values(result.map((data) => data.last_name));

         if (err) throw (err)
         if (result.length == 0) {
             console.log("--------> User does not exist")
            resultNew({resultCode:0, Error: "User does not exist !!!"}, null);
            } 
            else {
                const hashedPassword = result[0].password
            if (await password === hashedPassword) {
                let jwtSecretKey = process.env.JWT_SECRET_KEY;
                let data = {
                    time: Date(),
                    username: id,
                }
            const token = jwt.sign(data, jwtSecretKey);
            resultNew(null, {resultCode:1, message: "Login Sucessfully", token: token, data: {"id":id.toString() ,"first_name":fname.toString(), "last_name": lname.toString()}});
                } 
                else {
                console.log("---------> Password Incorrect")
                resultNew({resultCode:0, error: "Incorrect Password !!!"}, null);
                } 
         }//end of User exists i.e. results.length==0
        }) //end of connection.query()
       }) //end of db.connection()   
};

module.exports = {
    login, registeration
  }