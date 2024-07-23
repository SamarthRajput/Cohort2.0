//giving a type to a function
//fn : () => void
//ki bhai this the function that expects nothing as an arguments and it returns nothing/void
//if it returns an integer then it will be fn : () => integer 
function runAfter1S(fn : () => void){
    setTimeout(fn , 1000);
}   

runAfter1S(function(){
    console.log("hi there");
});