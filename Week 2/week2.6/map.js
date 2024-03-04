//Problem statement => given an array, give me back a new array in 
//which every value is multiplied by 2
//i/p => [1,2,3,4,5]
//o/p => [2,4,6,8,10]

const input = [1,2,3,4,5];

//Approach 1 -> normal approach
// const newArray = [];

// for(let i = 0; i<input.length ;i++){
//     newArray.push(input[i] * 2);
// }
// console.log(newArray);

//Approach - using map
function transform(i){
    return i*2;
}
//whenever you told to transform an array we use maps
//syntax => arrayname.map(functionname);
const ans = input.map(transform);
console.log(ans);