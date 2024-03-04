//async function in js are setTimeOut and readFile
//readFile is a node js API
//Web APIs are provided by web browsers
function printSomething(){
    console.log("hello world");
}

setTimeout(printSomething, 1000);
console.log("after settimeout");

//4 cases where we need to do async call other than that we just write sync code through out javascript
//1.do a network call
//2.sleep/wait for some time
//3.read a file
//4.database call 