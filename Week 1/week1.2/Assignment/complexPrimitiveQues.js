//Ques1 => Write a program prints all the even numbers in an array
let array = [2,3,4,5,6,7,8];
for(let i = 0; i<=array.length ;i++){
    if(array[i] % 2 == 0){
        console.log(array[i]);
    }
}

//Ques2 => Write a program to print the biggest number in an array
let arr = [2,3,4,5,6,7,8,9];
let max = 0;
for(let i = 0; i <= arr.length ; i++){
    if(arr[i] < arr[i+1]){
       max = arr[i+1];
    }
}
console.log(max);

//Ques3 => Write a program that prints all the male people’s first name given a complex object
const source = [{
    firstName: "harkirat",
    lastName: "Singh",
    gender: "male"
}, {
    firstName: "Love",
    lastName: "Babbar",
    gender: "male"
}];
for(let i = 0; i<source.length;i++){
    if(source[i]["gender"] == "male")
    console.log(source[i]["firstName"]);
}

//Ques4 => Write a program that reverses all the elements of an array
const arr1 = [2,4,6,7,8,9];
for(let i = arr1.length ; i >= 0 ; i--){
    console.log(arr1[i]);
}