// zod is a library , given a blueprint lets you valaidate whether or not an input follows that blueprint
//Its very hard to keep track of the amount of validation you have to do for that reason come into exisistence 
//a bunch of input validation libraries => zod is one such library most popular one in node.js
//You are parsing input from the end user ki are you sending me the right thing thats what called parsing 
const express = require('express');
const zod = require('zod');
const app = express();
app.use(express.json());

// arrays of number is what my schema will be 
//this much is enough to describe the structure of your input

//in our case it is arrays of numbers
// const schema = zod.array(zod.number());

//Write zod schema for
//{
//  email : string => email     (abcd@gmail.com)
//  password : atleast 8 letters
//  country : "IN" , "US"
//} 
//
//zod gives an email check inbuilt function also 
//min() is used to check if there are minimum 8 characters or not
const schema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8),
    //literal() means its literally this specific string  
    country : zod.literal("IN").or(zod.literal("US"))
})

app.post("/health-checkup" , function(req,res){
    //kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    // const kidneysLength = kidneys.length;
    // res.send("You have " + kidneysLength + " kidneys");

    //validating the schema 
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg : "input is invalid"
        })
    }
    else{
        res.send({
            response
        })
    }
});



app.listen(3000);