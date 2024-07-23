//whenever you define an interface which has lets say not have just primitive types it also have functions in there
//you can use this to implement classes

//created a Person interface 
interface Person {
    name: string,
    age: number,
    //this greet function will take phrase as an input and return void 
    greet(phrase: string): void;
};

//Employee class
//In typescript if you know there are things that you are associating to this 
//there are things that are associated to the final object of an employee
//we have define the properties above the constructor, these properties can also be public or private
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase}  ${this.name}`);
    }
} 