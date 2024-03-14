const jwt = require("jsonwebtoken");

const content = {
    name: "harkirat",
    password : 123123
}

const token = jwt.sign(content , "asdasd");
console.log(token);

//token generated here =>
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJwYXNzd29yZCI6MTIzMTIzLCJpYXQiOjE3MTAwNjEyMjJ9.mdsGerp2acCZdraOwhEUvUKSwWbhzO5Uhgj05Ep0Ymc