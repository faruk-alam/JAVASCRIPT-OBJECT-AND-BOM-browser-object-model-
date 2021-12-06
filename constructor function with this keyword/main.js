var person = {
    name: 'Johnny',
    age: 25,
    sex: "male",
    profession: "developer",
}
// Creating constructor function with this keyword
// function Person(){
//     this.name = "Johnny",
//     this.age = "25",
//     this.sex = "male",
//     this.profession = "developer"
// }
// console.log(person.sex);

// Inserting parameter into constructor function
function Person(name,age,sex,profession){
    this.name = name,
    this.age = age,
    this.sex = sex,
    this.profession = profession
}
// Creating objects by passing argument...

const person1 = new Person("john",32,"male","developer");
const person2 = new Person("candy",27,"female","nurse");
const person3 = new Person("pitter",43,"male","teacher");
const person4 = new Person("serena",25,"female","dancer");
// Accessing a properties of an objects
console.log(person2.age);
console.log(person4.sex);
