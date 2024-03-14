// //Throwing and Catching errors in Javascript
// let a;
// console.log(a.length);     //undefined
// //"hi there" will never gets logged because the program doesnt know what to do after this 
// //if we might want the program to still continue executing. That is where you can use try catches
// console.log("hi there");

//If you know there is a certain code base that is unsafe which means that may throw an error you wrap it inside a try catch block 
//if you write good code you dont need try catch but if you know there will be an error we will use try catch
//try catch syntax

try{                //if this code is correct control will never reaches catch block
    let a;
    console.log(a.length);
    console.log("Hi there from try ");
} catch(err){       //if an error is caught control reaches catch block
    console.log("hi there from catch statement");
}

console.log("Hi there after try catch block ")