//calculate the number of requests or count the number of load that is coming on my server using middlewares

const express = require('express');
const app = express();

let countNoOfRequests = 0;
function requestsCount(req , res){
    countNoOfRequests++;
    console.log(countNoOfRequests);
    next();
}

app.get("/health-checkup" , requestsCount , function(req ,res){

});

app.get("/health-checkup2" , requestsCount , function(req,res){

});

app.listen(3000);