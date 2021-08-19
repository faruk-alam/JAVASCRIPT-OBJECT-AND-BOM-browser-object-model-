const person = {
    name: 'Mickel',
    profession: 'Singer',
    Age: 30
};

// Using dot Notation
// objectName.key
console.log(person.name);

const student = {
    name: "Roony",
    level: "B-2",
    id: 423
};

// Using bracket Notation
// objectName["propertyName"]

console.log(student["level"]);

// nested object

var mario = {
    occupation:"student",
    class: 9,
    marks:{
        science:57,
        math: 82, 
        economics:65  
    }
}
console.log(mario.marks);
console.log(mario.marks.math);
