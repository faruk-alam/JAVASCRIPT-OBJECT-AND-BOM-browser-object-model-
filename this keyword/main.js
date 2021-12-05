var person = {
    name: 'Johnny',
    age: 25,
    profession: "developer",
    call : function() {
        console.log('you are '+this.name);
    }
}
person.call();
// Note: In JavaScript, this keyword when used with the object's method refers to the object. this is 
// bound to an object
//However, the function inside of an object can access it's variable in a similar way as a normal function 
//would. For example
var person = {
    name: 'Johnny',
    age: 25,
    profession: "developer",
    call : function() {
        let nickNname = "candy"
        console.log('you are '+this.name +" "+ nickNname);
    }
}
person.call();