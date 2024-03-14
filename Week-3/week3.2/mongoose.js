const { appendFile } = require("fs");
const mongoose = require("mongoose");
const express = require("express");
mongoose.connect("mongodb+srv://ssamarth224:GGeJIb5AQeVTlo4G@cluster0.gvveypg.mongodb.net/userappnew");
const app = express();
app.use(express.json());

//Its says describe the model what should your table look like 
//this what my schema looks like
const User = mongoose.model('USers' , {name : String , email : String , password : String});

app.post("/signup" , async function(req ,res){
    //CRUD => create , read , update , delete
    const name = req.body.name;
    const username = req.body.email;
    const password = req.body.password;
    //we can also use User.update() , User.delete() we can also pass constraints ki only delete this thing
    //findOne() -> I will go into the database and find one user who follow these constraints {email : username} 
    //1st thing we have to do is check does my database actually contain someone with this email it is similar to go on mongoDB and clicking on find button
    //this is like WHERE statement in SQl
    const existingUser = await User.findOne({email : username});
    if(existingUser){
        return res.status(400).send("user already exists");
    }
    //both the syntax are same
    await User.create({name , email : username , password});
    // const user = new User({
    //     name : name, 
    //     email : username, 
    //     password : password
    // });
    
    //if i dont actually save it.It will not reach the database  
    user.save();        //this is actually put data into my database
    res.json({
        msg: "user created successfully"
    })
});