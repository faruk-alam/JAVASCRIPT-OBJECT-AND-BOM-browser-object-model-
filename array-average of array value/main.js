let grade = [34,7,9,13,51,45,60,5];

let total = 0;
let count = 0;
for (let i =0; i < grade.length; i++){
    count++;
    total +=grade[i];
}
let average = total/count;
console.log(average);
