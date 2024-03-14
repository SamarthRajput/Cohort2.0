//we have to create a logic for a backend server that is somehow connect to the database the end user can send 1 of 3 requests
//1. /signup -> where they give us a username,password and firstName and when they give us these we have to put it on the database provided someone with this username oesnt exists
//2. /signin -> our backend needs to check ki han bhai does this user actually exists in this database and is there password correct and if that is the case we return them back a jwt else we stop them dont log them
//3. /users -> where we expect a header thats the user sends us , the jwt that they got we hit the database get back all the users return all users back to the user that is asking for it  
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "your_mongo_url",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);