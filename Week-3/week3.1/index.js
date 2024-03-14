const express = require('express');

const app = express();

//Dumb way to do authentication and input validation
app.get("/health-checkup" , function(req , res){
    //do health check here
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    // username != "harkirat" || password != "pass" is same as !(username === "harkirat" && password === "pass")
    if(username != "harkirat" || password != "pass"){
        res.status(400).json({msg : "something ups with the input"});
        return;
    }
    
    //kidneyId == 1 || kidneyId == 2 is same as kidneyId != 1 && kidneyId != 2
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({msg : "something ups with the input"});
        return;
    }

    res.json({
        msg: "your kidney is fine"
    })
});

app.listen(3000); 