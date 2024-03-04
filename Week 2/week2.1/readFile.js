const fs = require("fs");

//err => this is just the syntax of the fs library it is whats called an error first callback
//which is some callback 
//if there was an error it will the first argument if it successfully reads the file data will be the second argument
fs.readFile("readFile.txt" , "utf-8" , function(err , data){
    console.log(err);
    console.log(data);
});

//we are only wrapping our async function over an inbuilt async function to write async function of our own
//to write an async function of your own but under the hood you are using other async function