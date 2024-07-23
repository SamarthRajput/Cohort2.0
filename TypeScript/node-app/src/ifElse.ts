//common types are number, string, boolean

function isLegal1(age: number) : boolean{
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLegal1(12));
