const express = require('express');
const app = express();
//express.json() comes before all the routes
app.use(express.json());

app.post("/health-checkup" , function(req , res){
    //do something with kidney here
    //kidneys = [1 , 2]
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send("you have " + kidneysLength + " kidneys");
});

//global catches => it is another middleware that we put at the end
//global catches => sometimes called error handling middlewares
//this middleware will do if any of the routes if ever there is an exception raised it will either reach the end user or if you add a global catch or if you add another middleware at the end that takes 4 inputs not 3 inputs
//then the conttrol will reach here
// if we add a middleware at the end which takes 4 parameters/inputs then anytime there is an expection here this middleware will get called 
//and here we can do some clean things 
app.use(function(err , req , res , next){
    //usually here we do as errorCount will keeps the track of the number we are getting exception on the backend and if it goes above 100 we can give alert to the another system
    errorCount++;
    res.json({
        msg : "Sorry something went wrong with our server"
    });
})  

app.listen(3000);