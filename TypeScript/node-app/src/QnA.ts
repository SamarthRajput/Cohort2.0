
//example of a callback where the called function accepts two arguments and returns a string 

function doSomething1(cb : (str: string, num: number) => string) : string {
    const x = cb("2", 2);
    return "1"; 
}

//we can do and( & ) and or( | ) on both interfaces and types it will not give an error

interface manager {
    name: string,
}

type techLead = {
    date: Date
}

//we cannnot do interface here 
//if we want to do union or intersection it needs to be a type 
type both = manager & techLead;
