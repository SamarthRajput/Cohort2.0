function calculateArithmetic(a ,b , arithemticfunction){
    const value = arithemticfunction(a,b);
    return value;
}
function sum(a, b){
    return a + b;
}
function subtract(a , b){
    return a - b;
}

const ans = calculateArithmetic(2,3,subtract);
console.log(ans);