// var - original way to define a variable
//const - it is a constant which means we can define it only once if we try to change its value it will throw an error
//let - we can change its value after we define it.
//console.log() its a function which prints the output like cout in C++
//in real world we will be using let and const


var a = 1;
a = 2;
console.log(a);

let b = 1;
b = 2;
console.log(a);

//this will throw an error
const c = 1;
c = 2;
console.log(a);


//Datatypes => Strings,number,boolean
let firstName = "Samarth";
let age = 18;
let haveFriends = false; 

console.log("this person name is " + firstName + " has age " + age);

//if-else statement
if(haveFriends){
    console.log(firstName + " have friends");
}
else{
    console.log(firstName + " dont have friends");
}

//loops
let answer = 0;
for(let i =0; i<=100; i++){
    answer = answer + i;
}
console.log(answer);