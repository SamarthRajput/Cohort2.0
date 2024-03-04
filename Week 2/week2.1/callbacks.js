function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

//generic function
function sumOfSomething(a , b , fn){
    let value1 = fn(a);
    let value2 = fn(b);
    return value1 + value2;
}

//functional argument
//function it gets as an argument
let a = sumOfSomething(1,2,cube);
console.log(a);
