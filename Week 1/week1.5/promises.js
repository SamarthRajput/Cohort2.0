//promises are syntactical sugar that makes the code slightly more readable
//reason to introduce a promise is to get rid of callbacks bcz callbacks are an ugly way to write asynchronous code something known as callback hell
const fs = require("fs");

//my own asynchoronous function

//Promise return ho rha hai kiratsReadFile function/a variable ko uske baad 
//vo funcion/a variable .then function ki help se onDone function ko call karta hai jo console.log karta hai file ke data ko

function kiratsReadFile(){
    return new Promise(function(resolve){
        
        fs.readFile("readFile.txt" , "utf-8" ,function(err, data){
            
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data){
    console.log(data);
}

var a = kiratsReadFile()
console.log(a);
a.then(onDone);
