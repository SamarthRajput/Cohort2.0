//Calculate the time a function takes to complete its execution

function calculateSum(){
    let a = 0;
    for(let i =0; i<10000000 ; i++){
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMS = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeInMS = afterDate.getTime();

console.log(afterTimeInMS - beforeTimeInMS);