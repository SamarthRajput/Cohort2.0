//Authentication and input validation using middlewares
const express = require('express');
const app = express();

//we cant call res.json({}); twice if we call res.json({}); second time there will be an error you cannot respond back to an HTTP request twice 
//res.send() is used to send text and res.json({}) is used to send json we will majorilt use res.json
function userMiddleware(req , res , next){
    const username = req.headers.username;
    const password = req.headers.username;
    if(username != "harkirat"  && password != "pass"){
        res.status(403).json({
            msg : "Something went wrong"
        });
    }
    else{
        next();
    }
}

app.get("/health-checkup" , userMiddleware , kidneyMiddleware , function(req,res){

});