//In typescript
//in typescript we are giving an explicit type ki bhai this x is a number
let x: number = 1;
//this line will give an error Type 'string' is not assignable to type 'number'
// x = "harkirat";
console.log(x); 

//In Javascript
// const x = 1;
// console.log(x);


//Parameter 'firstName' implicitly has an 'any' type ->  we should the compiler impilicity ki type is any or expilicity tell the compiler ki this is number or string
//number, string, any these all are type which means this can be anything 
//so we can do 
// const x: any = 101;

//firstName: string, lastName: string, age: number
function Greet(firstName: string){
    console.log("Hello " + firstName);
}    

Greet("Harkirat");