//1st Way to get rid of the problem ki han this KeyInput needs to have a more constrained set of inputs 
// type KeyInput = "up" | "down" | "left" | "right";

// 2nd way to use enums
// we can write enum enum_name and the values that is enum can take 
//enum stands for enumeration which means you can iterate over some constant values 
//enum is something we use when we know ki there are limited set of inputs a specific function 
// enum Direction {
//     up,     //0
//     down,   //1
//     left,   //2
//     right   //3
// }

//Changing the values of enums making them strings 
//either you give no one value or if you have given one of them a type you should give all of them a type 
enum Direction{
    up = "up",
    down= "down",
    left = "left",
    right = "right"
}

function doSomething(keyPressed: Direction){
    if(keyPressed == Direction.up){

    }
}

//and when we are calling it
doSomething(Direction.up);
doSomething(Direction.down);
console.log(Direction.up);
console.log(Direction.down);