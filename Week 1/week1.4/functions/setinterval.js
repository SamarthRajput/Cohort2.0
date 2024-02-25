// setInterval() function is same setTimeout() function but 
// setInterval() function calls it(function) in an interval

function greet(){
    console.log("hello world");
}
//here in second argument we have passed the duration ki kitne time/interval baad vo function dubara call hoga
setInterval(greet , 5*100); 