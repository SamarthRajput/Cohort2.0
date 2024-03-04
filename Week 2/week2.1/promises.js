//promisify this async function
//this function returned undefined as there is no return statement  
function myOwnSetTimeOut(callback , duration){
    //here you are calling callback which is something that the end user gave you
    //setTimeout(callback , duration);
    setTimeout(function(){
        callback();
    } , duration);
}
//calling simple async function
myOwnSetTimeOut(function(){
    console.log("after settimeout");
}, 1000);

//the syntax of both of them are different bcz the way we call them is also different 

//Promisified function
//promise is just another class in javascript
//this function is returing a promise
//Promise() expect you to give a function as an input parameter and that input which promise expect is also a callback function
//and the function expect to give resolve as an input 
function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        //here we are calling resolve() which is something that this Promise object gaves you
        //setimeout(resolve ,1000);
        setTimeout(function(){
            resolve();
        } , duration);
    });
    return p;
}


//async await syntax , promise chaining helps us to avoid callback hell 

//calling a promisified function
//Ques => where is the callback? where do I tell this guy bro call this logic once you done
//Ans => you call .then() on the promise that is returned to you

//1st way to call promisified function
const ans = promisifiedMyOwnSetTimeout(1000);
//console.log(ans);  // promise pending will come as an output
ans.then(function(){
    console.log("timeout is done");
}); 

//2nd way to call promisified function
promisifiedMyOwnSetTimeout(1000).then(function(){
    console.log("timeout is done");
});