//filtering
//Problem Statement => what if i tell you , given an input array, give me back all the even values from it

const arr = [1,2,3,4,5];
const array = ["harkirat" , "raman" , "prashant"];
//o/p => [2,4]

//Approach 1 -> normal solution
// const newArray = [];
// for(let i = 0; i<arr.length ; i++){
//     if(arr[i] % 2 == 0){
//         newArray.push(arr[i]);
//     }
// }
// console.log(newArray);

//Approach 2 -> using filter function
function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

//syntax => arrayname.filter(functionname);
//we give function as an anonymous function
const ans = arr.filter(filterLogic);
console.log(ans);

const answer = array.filter((n) => {
    if(n.startsWith('h')){
        return true;
    }
    else{
        return false;
    }
})
console.log(answer);