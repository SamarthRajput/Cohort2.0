const express = require("express");
const app = express();
app.use(express.json());
const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}];

//write logic => how many kidneys he have and how many of them are healthy and how many of them are unhealthy
app.get("/" , function(req , res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<johnKidneys.length ;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
})

//write logic => user can add a new kidney
//for post request usually we send data in the body 
//we will use push() to add a new kidney
app.post("/" , function(req, res){
    //sconsole.log(req.body);  //undefined
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done! "
    })
})

//user can replace a kidney, make it healthy
app.put("/" , function(req,res){
    for(let i = 0 ; i<users[0].kidneys.length ; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//user can remove a kidney
app.delete("/" , function(req, res){
    //created a newKidneys arrays anytime I find a healthy kidney i will push it into the healthy kidneys array
    //whenever there is a request that comes to delete when there are no unhealthy kidneys you should return a 411 status code
    //only if atleast one unhealthy kidney is there do this , else return 411
    if(atleastOneUnhealthyKidneyIsThere()){
        const newKidneys = [];
        for(let i = 0; i< users[0].kidneys.length ; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done!"
        })
    }
    else{
        res.status(411).json({
            message: "you have no bad kidneys"
        });
    }
})

function atleastOneUnhealthyKidneyIsThere(){
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i< users[0].kidneys.length ; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);