const express = require("express");
const app = express();

//function that returns a boolean if the age of the person is more than 14
// function isOldEnough(age){
//     if(age>=14){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

//advantage of using Middleware is ki your final route only needs to do what it is originally suppose to do
function isOldEnoughMiddleware(req , res, next){
    const age = req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg:"Sorry you are not of age yet "
        })
    }
}

//if you know a certain Middleware needs go on every route then we just remove the Middleware from every individual call
//and we call it on top
app.use(isOldEnoughMiddleware);
//to keep in mind is ki app.use() only triggers for all the endpoints below the app.use()

app.get("/ride2", function(req, res){
    //we are expecting the user to send there age as an query parameter
    res.json({
        msg: "You have successfully riden the ride 2"
    })
});

app.get("/ride1", function(req, res){
       //we are expecting the user to send there age as an query parameter
    res.json({
        msg: "You have successfully riden the ride 1"
    })
});

app.listen(3000);