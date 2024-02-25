//create a stopWatch or counter 
// we will use setInterval function
function currentTimePrint(){
    console.log(new Date().getTime());
}
setInterval(currentTimePrint , 1000);