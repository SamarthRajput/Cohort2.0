//Anonymous funtion is a function that doesnt have a name 
function calculateSomething(a , b ,callback){
    console.log(callback);
    let var1 = callback(a);
    let var2 = callback(b);
    return var1 + var2;
}

//we can whole function body as an argument the function which we passed doesnt need a name 
//here we have passed cube function body
let ans = calculateSomething(2,2, function (a){
    return a * a * a;
});
console.log(ans);