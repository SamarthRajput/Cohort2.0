function findSum(n){
    let ans = 0;
    for(let i = 0; i<n ; i++){
        ans = ans + i;
    }
    return ans;
}

function findSumTill100(){
    return findSum(100);
} 

//setTimeOut is an async function
//findSumTill100 function needs to get called after 1000ms(1sec)
setTimeout(findSumTill100, 1000);
console.log("hello world");