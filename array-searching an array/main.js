let grade = [34,7,9,13,51,45,60,5];
/*grade[25] = 50;
grade.length = 99;
for (i = 0; i <grade.length; i++) {
    console.log(grade[i]);
}*/
// output: a lot of undefined.............

//Now Searching an array e.g number 51
let search = 51;
let found = false;
for (let i = 0;i < grade.length;i++){
    if(search === grade[i]){
        found = true;
        console.log(grade[i]+" at index "+i);
        break;
    }
}
// searching an array e.g largest number
let largest = grade[0];
for(let i = 0; i < grade.length; i++){
    if(grade[i] > largest){
        largest = grade[i];
    }
   
   
}
console.log(largest);

