const express = require("express");
//Json web tokens => json web token is a spec by ietf organisation that creates the jsonwebtokens, javascript, ecmascript standard 
const jwt = require("jsonwebtoken");
//this is the thing we use to both sign and verify jswPassword
const jwtPassword = "123456";
//the functions that we need from jwt library are encoding it and verifying it 
//encoding => convert json into a string 
//verify => ki han is this string is for user or is this a random string 
const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  //hard todo - try to use find function in js
  let userExists = false;
  for(let i = 0; i<ALL_USERS.length ;i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
      userExists = true;
    }
  }
  return userExists; 
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  //1. jwt.sign() function 
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  //try-catch block
  //try running this code if there is an exception that doent forward it to error middleware just reach the catch
  // try {
    //2. jwt.verify() function => function takes token as an input take the jwtPassword as an input and return you back something if this token is a valid token 
    //and can be passed using this jwtPassword if not this will throw an exception thats why we are using try catch block 
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    
    // return a list of users other than this username
    res.json({
      users: ALL_USERS.filter(function(value){
        if(value.username == username){
          return false;
        }
        else{
          return true;
        }
      })
    })
  // } catch (err) {
  //   return res.status(403).json({
  //     msg: "Invalid token",
  //   });
  // }
});

app.listen(3000)