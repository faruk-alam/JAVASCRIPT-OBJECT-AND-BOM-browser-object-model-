let numbers = [9,13,7,43,54,15,4,75,10];
console.log(numbers.sort());
 // Sorting an array using compare function
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);