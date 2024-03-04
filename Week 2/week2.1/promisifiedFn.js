// the promise takes function as an argument,
// the function takes resolve as an argument,
// the argument takes something as an argument,
// the .then() then takes a function as an argument,
// that function takes something as an argument (say VALUE),
// and whatever was passed to resolve is passed as VALUE

function promisifiedFunction(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("inside resolve call")
        } , 1000)
    });
}

promisifiedFunction().then(function(value){
    console.log(value);
})