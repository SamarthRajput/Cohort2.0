//Interface lets you combine multiple fields into a single type 
interface Users {
    firstName : string,
    lastName: string,
    age: number, 
    //optional arguments -> if you feel email is something that the user can provide or not provide 
    //then we can say that email is a string but optionally, user can pass it if they want, user cannot pass it if they want depends on the user  
    email? :string

};

//we can write isLegal function in this way but it will use the same code in mutiple places(code repitition) it will voilate the dry rule
// function isLegal(user : {
//     firstName: string,
//     lastName: string,
//     age : number
// }) {
//     if(user.age > 18){
//         return true;
//     }
//     else{
//         return false ;
//     }
// }

function isLegal(user : Users){
    if(user.age > 18){
        return true;
    }
    else{
        return false ;
    }
}

isLegal({
    firstName: "Harkirat",
    lastName: "Singh",
    age: 18,
    email: "harkirat@gmail.com"
});
