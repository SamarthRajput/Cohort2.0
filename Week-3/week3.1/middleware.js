const express = require('express');
const app = express();
//write app.use(express.json()); and only then you can catch any body that postman sends you in your post request handler
//it means express.json() middleware is going to use everywhere
app.use(express.json());
//any route after this will have this middleware added

//Ques => why req.body needs app.use(express.json()) but req.query , req.headers doesn't need app.use(express.json())
//Ans => we dont know what the body is it could be json , it could be text , it could be html it could be anything 
//the reason we have to specify ki app.use(express.json()) middleware pls handle it is bcz you tell ki han i am expecting json as an input pls parse out json as an input from this specific request

//next is a function in itself which we can call if we think things are fine
//there are 3 inputs to a callback function 
//1.req
//2.res
//3.next

app.get("/" , function(req,res ,next){
    console.log("hi there from req1");
    next();         //i will call next which would route the request to the next callbackfunction
} , function(req,res){          //last function doesnot need next() function or as a parameter
    console.log("hi there from req2");
});

app.listen(3000);