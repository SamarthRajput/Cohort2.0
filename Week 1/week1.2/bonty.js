//If we run this program one of the core of our cpu is supposed to go to 100% as javascript is single threaded language
//but when we run it non of the core of our cpu doesnt go to 100% why?
//Ans => The htop command on my machine(harkirat's) is not working correctly 
//but it actually went to 100% in cohort 1 as javascript is single threaded language

let sum = 0;

for(let i =0; i< 1000000000000; i++){
    sum = sum + i;
}

console.log(sum);