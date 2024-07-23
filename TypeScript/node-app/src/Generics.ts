//we can also use type 
type Input = number | string;

//this is the function we have write
//this approach will produce some errors/problems
// function firstEl(arr : Input[]){
//     return arr[0];
// }

//getting rid of the original problem
//Now function firstEl will not take string or number as input it will take ki bhai generic value can be called with a string or can be called with a number
//and who ever is calling it the array of that template is the input and the return value is arr[0]
function firstEl<T>(arr : T[]) { 
    return arr[0];
}


const valueOfFirstEl = firstEl(["harkirat", "singh"]);
console.log(valueOfFirstEl);

