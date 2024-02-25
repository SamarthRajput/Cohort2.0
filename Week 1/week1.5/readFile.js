//requiring an external library called fs it stands for filesystem module
//it is basically a node js library that lets you do a few things like reading from a file , writing to a file
const fs = require("fs");
//1st parameter -> path of the file
//2nd parameter -> encoding in which you want to read the file
//3rd parameter -> anonymous function
fs.readFile("readFile.txt" , "utf-8" , function(err , data){
    console.log(data);
})