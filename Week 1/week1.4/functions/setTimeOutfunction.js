// setTimeOut function
//it is an inbuilt function that javascripts provide you
//setTimeOut is supposed to call a function after a certain duration
// Syntax => setTimeout( , );
//firstargument -> it takes some logic as an input  such as function 
//second argument -> basically the number of seconds which represents the number of seconds you need to wait before the first arguments runs
//iska matlab hume utne time tak rukna hoga jitna time humne second argument me diya hoga uske baad hi humara 1st argument run hoga

//setTimeOut is an example of call back function

function greet(){
    console.log("hello world");
}
//here we have to wait 5sec then after greet() function will call
setTimeout(greet , 5*1000);