//Big difference between type and interface is we dont need to put an equal to( = ) in the interface but we need to put an equal to( = ) in type 
// we cant use type to implement classes only interfaces are used to implement classes  
type User = {
    firstName: string;
    lastName : string;
    age: number
}

interface User2 {
    firstName: string;
    lastName : string;
    age: number
}