var fruits = ["mango","apple","banana","orange","peach"]
// removing items:
var removed = fruits.splice(1,2);
console.log(removed);
console.log(fruits);
// adding items:
var added = fruits.splice(2,0,"guava","pineapple");
console.log(added);
console.log(fruits);
// adding and removing items:
var addremove = fruits.splice(3,2,"grape","ribes");
console.log(addremove);
console.log(fruits);

