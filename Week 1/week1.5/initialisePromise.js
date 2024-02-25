//syntax to initialise promise
//there is one specific thing  about promises that when ever you are initialising the promise
//you have to give it the first argument as a function and the function also needs to have the first agument which is resolve
// we can name resolve to something else like r , onDone but at high lvl this is the method to initialise a promise

var p = new Promise(function(resolve){

});

console.log(p);

//we can use promise outside the function as well usually we promise inside the function but it is just like another class just like date class
// => pending,resolved
var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    },1000)
});

function callback(){
    //here promise state is resolved
    console.log(d);
}

//here promise state is pending
console.log(d);
d.then(callback);