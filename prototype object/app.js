// constructor function
// JavaScript Prototype
// In JavaScript, every function and object has a property named prototype by default


function person() {
    this.name = "john",
    this.age = 25
}
//const person = new person();
// console.log(person.prototype);
// Since the prototype property has no value at the moment, it shows an empty object { ... }.
// creating object
const person1 = new person();
const person2 = new person();
// adding property to constructor function
person.prototype.gender = "male";
console.log(person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

// adding a method to the constructor function
person.prototype.greet = function() {
    console.log("Hello john");
}
person1.greet();
person2.greet();
