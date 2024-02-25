// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }

class Animal{
  constructor(name , legCount , speaks){
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  //static functions -> these are not associated to an object these are associated to the class itself
  //or these are associated to the blueprint
  static myType(){
    console.log("Animal");
  }
  speak(){
    console.log("hi there " + this.speaks);
  }
}

Animal.myType();
let dog = new Animal("dog" , 4, "bark");  //create object
let cat = new Animal("cat" , 4 ,"meow");
dog.speak();   //call function on object