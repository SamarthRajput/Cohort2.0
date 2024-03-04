//whenever the word API is used it usually means this thing has been exposed not to accessed from the browser but to be accessed from other nodejs processes
//we are using express library to create a http server
const express = require("express");
//importing body-parser library
const bodyParser = require("body-parser");

//how to write simple backend express http server in node.js
//we will see process.env.POST on bunch of places not 3000
//process.env.POST is way to access an environment variable 
//Ques => what is an environment variable ?
//Ans => An environment variable is a user-defined value that can affect how a process behaves on a computer
const port = process.env.PORT|| 3000


const app = express();

//middlewares code will learn in middleware
app.use(bodyParser.json());


//Now on the app object whenever you want to create new route handler 
//create new route handler 
app.get("/route-handler" , function(req , res){
    
    //to send back javascript object 
    res.json({
        name: "harkirat",
        age: 21
    });
})

//Handling a post request and more specifically how do you handle the body of a post request may be the header of post request , how do you get them
app.post('/conversation' , function(req , res){
    //accessing headers
    console.log(req.headers);       //that will give you an object that logs all of the headers thar we are sending here 
   res.send({
    msg: "2 + 2 is equal to 4"
   })

   //body is where you actually send this is client side 
   //how to get the body here
   console.log(req.body); //req.body is undefined even though i send the body 
   //whoever write express he was like i will handle post requests , handle headers I will not handle body 
   //if someone actually wants to access the body they can use a different library that can handle body 
   // we will use body-parser library
})

//if we are the chatgpt developer we will write something like this
//app.post is a library created by the founder of express
//1st route is going to be this /backend-api/conversation route
//2nd route me i will have a callback, callback will have 2 objects req and res
//req will have all the request data this will have all the request information
//res will have all the response/information data this will give you some high level functions for eg .json() function , .send() function that you can use to respond back to the request 
app.post ('/backend-api/conversation' , (req, res) => {
    //what user is sending me i am able access it here by using req.body.message
    const message = req.body.message;
    //another way to information to our backend is query parameters
    const messagequery = req.query.message;
    console.log(messagequery)
    console.log(message);
    //machine learning thing
    res.json({
        output: "2 + 2 = 4"
    })
})


//this is similar to fs.readFile("path to the file" , "encoding" , callbackfn()) -> when did this callbackfn run anytime when the file was read / at the end of the file being read
//when will function(req, res) this callback function will run whenever would anyone try to hit your backend server control will reach res.send("Hello World! ") here 
///route '/' => localhost:3000 or localhost:3000/backend-api/conversation any route written here
app.get('/' , function(req, res){
    
    // req -> request contains all the details related to request -> headers , body , query parameters 
    //do machine learning model and then on res call .send() and send back whatever you want
    //res.send() => what are you responding back with right now we just responding with simple Hello World
    // .status() => to send status 
    res.status(401).send("Hello World! ")

    //here we can send html code in response
    res.send('<b> hello there from html code in response from GET request<b>')
})

//app.listen() means ki i am taking over this port 
//app.listen() starts to listen to all the requests on the port 
app.listen(port , function(){
    console.log(`Example app listening on port ${port}`)
});