//type inference -> typescript knows a is number, b is number if you add 2 numbers that is also a number
//and so it was automatically able to understand ki bhai this will return a number you dont have to explicitly give it a number
//explicity giving what this function needs to return
function sum(a: number, b: number): number{
    return a + b;
}

const value = sum(2, 3);
console.log(value);