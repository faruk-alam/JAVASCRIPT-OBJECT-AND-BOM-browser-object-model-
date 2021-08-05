// using string and indexof
/*var alpha = "abcdefghijklmnopqrstuvwxyz";
alpha = alpha.toUpperCase();
var find = prompt("Enter an Alphabet");
var result = alpha.indexOf(find);
document.write(find+" is at serial no-"+result);*/

//using array and indexof
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"];
alpha = alpha.toUpperCase();
var find = prompt("Enter an Alphabet");
var result = alpha.indexOf(find.toUpperCase());
document.write(find+" is at serial no-"+result);
