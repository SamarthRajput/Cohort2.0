//identity can be called with anything thats what this <T> represents 
//we have to add this syntax for a generic ke bhai this can be called by a generic value or with any value
//the input argument is generic can be a string, can be a number, can be something else
function identity<T>(arg: T): T {
    return arg;
}

//we are calling identity either with a string or a number 
//who ever is calling the function can tell ki han identity is being called as a string or identity is being called as a number
let output1 = identity<string>("myString");
let output2 = identity<number>(100);