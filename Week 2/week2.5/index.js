//creating an http server
//express is not node default library
//so we have to bring express locally on our machine using command npm install express
const express = require("express");
const app = express();

//express says give me 2 arguments
//1st what route should I listen on what does route me
//localhost:3000/ the things after the slash '/' is the route
//2nd give me a callback function this callback gets call anytime a person comes here in the browser

//qurey parameters put ? after the route and then give the parameters eg :- localhost:3000/?n=30
//and if there is a second or more parameters it looks like this => localhost:3000/?n=3&a=2&b=3
//route is only until question mark ? comes and after that there are qurey parameters 

function sum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

//req , res => request and response
app.get("/" , function(req , res){ 
    //to catch a query
    //syntax => re.query.n;  n => whatever the input they are sending if they are sending a as an query paramete the syntax will be req.query.a
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi your ans is " + ans);
})

//this ki anytime a request comes to /files/:fileName which means anything
//if there is anything after files then control should reach here this is also known as wild card
//remote file getter
app.get("/files/:fileName" , function(req, res){
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name , "utf-8" , function(err ,data){
        res.json({
            data
        });
    });
});
app.listen(3000);
