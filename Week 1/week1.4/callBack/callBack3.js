function square(a){
    return a * a;
}
function cube(a){
    return a * a * a;
}

function calculateSomething(a , b ,callback){
    console.log(callback);
    let var1 = callback(a);
    let var2 = callback(b);
    return var1 + var2;
}

//here we will give the name of function we want to call calculateSomething(2,3, square); as here we have given sqaure function name to call.
let ans = calculateSomething(2,3, square);
console.log(ans);