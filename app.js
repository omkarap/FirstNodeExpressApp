const express = require('express');
const dotenv = require('dotenv');
const app = express();
// added for getting body data in request
app.use(express.json())
// Set up Global configuration access
dotenv.config();

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});

// Solved CORS Error
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Root Message
app.get("/", (req, res) => {
    res.send("Novel Vista API Server...");
  });
//   Login and Registeration API
 const LoginRoutes = require('./src/routes/login.route')
 app.use('/api/v1/', LoginRoutes)
// Get User details API 
 const userRoutes = require('./src/routes/user.route')
 app.use('/api/v1/', userRoutes)

// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "novel_vista"
// });

// const db = mysql.createPool({
//     connectionLimit: 100,
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "novel_vista",
//  })

//  db.getConnection( (err, connection)=> {
//     if (err) throw (err)
//     console.log ("DB connected successfully: " + connection.threadId)
//  })
 
//  con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
    // con.query("CREATE DATABASE mydb", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });

    // INSERT Query
    // var sql = "INSERT INTO users (id, username, password, status) VALUES ('1', 'omkar.pandit@kshantechsoft.com', '12345678', '2')";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    //   });

//     con.query("SELECT * FROM users", function (err, result, fields) {
//         if (err) throw err;
//         // console.log(result);
//       });
//   });

  //LOGIN (AUTHENTICATE USER)
// Route for Generating JWT
// app.post("/user/login", (req, res) => {
//     // Validate User Here
//     // Then generate JWT Token
//     // const stdata = res.json({requestBody: req.body}) 
//     const email = req.body.email;
//     const password = req.body.password;
    
//     // console.log("username", username);
//     // console.log("password", password);

//     db.getConnection ( async (err, connection)=> {
//         if (err) throw (err)
//         const sqlSearch = "SELECT * FROM users WHERE email = ?"
//         const search_query = mysql.format(sqlSearch,[email])
//         await connection.query (search_query, async (err, result) => {
//          connection.release()
//          let id = Object.values(result.map((data) => data.id));
//          let fname = Object.values(result.map((data) => data.first_name));
//          let lname = Object.values(result.map((data) => data.last_name));

//          if (err) throw (err)
//          if (result.length == 0) {
//              console.log("--------> User does not exist")
//             //  res.sendStatus(404, {resultCode:0})
//              res.status(401).send({resultCode:0, Error: "User does not exist !!!"});
//             } 
//             else {
//                 // console.log("Result==>", result[0].password);
//                 const hashedPassword = result[0].password
//             //get the hashedPassword from result
//             if (await password === hashedPassword) {
//                 let jwtSecretKey = process.env.JWT_SECRET_KEY;
//                 let data = {
//                     time: Date(),
//                     username: id,
//                 }
//             const token = jwt.sign(data, jwtSecretKey);
//             // console.log("DATTTTTa", token);
//             res.send({resultCode:1, message: "Login Sucessfully", token: token, data: {"id":id.toString() ,"first_name":fname.toString(), "last_name": lname.toString()}});
//                 } 
//                 else {
//                 console.log("---------> Password Incorrect")
//                 res.status(205).send({resultCode:0, Error: "Incorrect Password !!!"});
//                 } 
//          }//end of User exists i.e. results.length==0
//         }) //end of connection.query()
//        }) //end of db.connection()   
// });

// Route for Validating JWT
// app.get("/user/validateLogin", (req, res) => {
//     // Tokens are generally passed in the header of the request
//     // Due to security reasons.
  
//     let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
//     let jwtSecretKey = process.env.JWT_SECRET_KEY;

//     // console.log("JWT",tokenHeaderKey)
//     // console.log("JWT2",jwtSecretKey)
    
  
//     try {
//         const token = req.headers.authorization;
//         // console.log("req",req);
//         // console.log("token",token);
//         // const token = tokenHeaderKey
  
//         const verified = jwt.verify(token, jwtSecretKey);
//         if(verified){
//             return res.send({resultCode: "1", message: "Successfully Verified"});
//         }else{
//             // Access Denied
//             return res.status(401).send({error});
//         }
//     } catch (error) {
//         // Access Denied
//         console.log("Error", error)
//         return res.status(401).send({error});
//     }
// });

//CREATE USER
// app.post("/user/createUser", async (req,res) => {
//     const user_data = req.body;
//     console.log("user_data",user_data)
//     const email = user_data.email;
//     // const hashedPassword = await bcrypt.hash(req.body.password,10);
//     db.getConnection( async (err, connection) => {
//      if (err) throw (err)
//      const sqlSearch = "SELECT * FROM users WHERE email = ?"
//      const search_query = mysql.format(sqlSearch,[email])
//      const dval = Object.values(user_data)
//      console.log("dval",dval);
//      const sqlInsert = "INSERT INTO users (id, first_name, last_name, email, password, mobile, status) VALUES (" + `'0', '${user_data.first_name}', '${user_data.last_name}', '${user_data.email}', '${user_data.password}', '${user_data.mobile}', '1'` + ")";
//      console.log("INSERT", sqlInsert)
//      const insert_query = mysql.format(sqlInsert, [email, user_data.password])
//      // ? will be replaced by values
//      // ?? will be replaced by string
//      await connection.query (search_query, async (err, result) => {
//       if (err) throw (err)
//       console.log("------> Search Results")
//       console.log(result.length)
//       if (result.length != 0) {
//        connection.release()
//        console.log("------> User already exists")
//        res.status(409).send({resultCode:0, Error: "User already exists !!!"});
//       } 
//       else {
//        await connection.query (insert_query, (err, result)=> {
//        connection.release()
//        if (err) throw (err)
//        console.log ("--------> Created new User")
//         //console.log(result.insertId)
//        res.status(201).send({resultCode:1, success: "User registered successfully"});
//       })
//      }
//     }) //end of connection.query()
//     }) //end of db.getConnection()
//     }) //end of app.post()

// app.get("/user/getUserDetails", async (req,res) => {
//     const token = req.headers.authorization;
//     let jwtSecretKey = process.env.JWT_SECRET_KEY;
//     // 
//     try {
//     const verified = jwt.verify(token, jwtSecretKey);
//         if(verified){
//             db.getConnection( async (err, connection) => {
//                 if (err) throw err;
//                 connection.query("SELECT * FROM users WHERE id = 3", function (err, result, fields) {
//                 if (err) throw err;
//                 // console.log(result);
//                 res.status(200).send({resultCode:1, success: "Response from API...", result});
//               });
//             })
//         }else{
//             // Access Denied
//             return res.status(401).send({error});
//         }
//     } catch (error) {
//         // Access Denied
//         console.log("Error", error)
//         return res.status(401).send({error});
//     }
// })

// const express = require('express');
// const http = require('http');
// const app = express();
// const hostname = '127.0.0.1';
// const port = 3000;


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   });

// app.listen(port, function() {
//     console.log(`"Listining on Port: ${port}"`)
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });
