//      ARRAYS

// const personName = ["harkirat" ,"sam" ,"raman"];
// console.log(personName[0]);
// console.log(personName[1]);
// console.log(personName[2]);

const ages = [21 , 22, 23, 24, 25];
//arrayname.length gives the length of an array
for(let i = 0; i<ages.length ;i++){
    if(ages[i] % 2 == 0){
        console.log("even number " + ages[i]);
    }
    else{
        console.log("odd number " + ages[i]);
    }
    
}

const personName = ["harkirat" ,"sam" ,"raman"];
const genderArray = ["male" , "male" , "female"];
for(let i = 0; i<personName.length ;i++){
    if(genderArray[i] == "male"){
        console.log(personName[i]);
    }
}


//          OBJECTS
//array of object every field of the array is an object in itself
//we can combine values in javascript using objects
//aaray is not necessary must be strings or numbers

const user1 = {
    firstName: "harkirat",
    gender: "male"
}

// //1st way to access the key of an object
console.log(user1["firstName"]);
// //2nd way to access the key of an object
console.log(user1.firstName);


const allUsers = [{
    firstName: "harkirat",
    gender: "male"
}, {
    firstName: "raman",
    gender: "male"
}, {
    firstName: "priya",
    gender: "female" 
}
]

// // [{}] => arr[i]["gender"] way to access in nested objects
for(let i = 0; i<allUsers.length ; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    }
}

//metadata in object
const user = {
    name: "harkirat",
    age:21,
    address: {
        houseNumber: "22",
        street: 1
    }
}

//we have to access houseNumber
//method 1
console.log(user["address"]["houseNumber"]);

//method 2
const address = user["address"];
const houseNumber = address["houseNumber"];
console.log(houseNumber);


//          FUNCTIONS
//thread will go to line 67 then it will go to line 73 then will go to line 69 then 70 then it will go to line 74
function findSum(a , b){
    //do things with the input and return an output
    const sumValue = a + b;
    return sumValue;
}

const value = findSum(2,3);
console.log(value);