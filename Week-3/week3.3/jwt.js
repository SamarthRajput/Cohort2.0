const jwt = require("jsonwebtoken");

//3 functions => sign , decode , verify

const value = {
    name :"harkirat",
    accountNumber: 123123
}

//to generate token we use sign() function
//I can create a token or jwt from value object
//syntax => const token = jwt.sign(the value that I want to encode, and a password I want to encode with) 
// const token = jwt.sign(value,password);
const token = jwt.sign(value, "secret");
console.log(token);
//this token has been generated using this secret, and hence this token can only be verified using this secret

//this is our cheque book
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMsImlhdCI6MTcxMDA2MDYxMn0.CeQ3GW_q3dg768w2oLacu4ggWXCI1w8VWrVDAFO2D9M
//this string can be decoded by anyone without this secret if we give it someone they can actually decode and look at what were the original content is.


//if an intruder even though the is putting the same contents creating there own jwt since there "secret" or jwtPassword is different 
//whatever the contents inside the jwt might be this bank server will (jwt.js) reject this
//verifying the token that is generated by another server (jwt2.js) with our secret password
const verifying = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJwYXNzd29yZCI6MTIzMTIzLCJpYXQiOjE3MTAwNjEyMjJ9.mdsGerp2acCZdraOwhEUvUKSwWbhzO5Uhgj05Ep0Ymc" , "secret");
console.log(verifying);

//error comes =>   if (err) throw err;
//                          ^
//JsonWebTokenError: invalid signature

//using original jwt string that is generated using "secret"
const verifiedValue = jwt.verify(token , "secret");
console.log(verifiedValue);