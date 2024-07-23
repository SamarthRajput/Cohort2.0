//print id of a user, which can be a number or string
//GreetArg can either be a number or a string interfaces dont let us do that 
type GreetArg = number | string;

function greet(id : GreetArg){

}

//either we can do this or we can declare a type 
function greet1 (id: (number | string)){

}

greet(1);
greet("1");