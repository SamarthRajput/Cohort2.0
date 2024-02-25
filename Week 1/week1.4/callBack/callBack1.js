//we have given a third parameter fnToCall which calls our function which we have passed as a argument
function sum(num1, num2 , fnToCall) {
    let result = num1 + num2;
    // return result;
    fnToCall(result);
}
function displayResult(data) {
    console.log("Result of the sum is : " + data);
}
function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

//here a function goes to a function as an argument
const ans = sum(1, 2, displayResultPassive);