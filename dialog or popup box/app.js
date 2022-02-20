// dialog/pop up boxes - alert,confirm,prompt

// Using alert 
//alert("Would you like to continue")

// using confirm

// function giveConsent() {
//     let value = confirm("Are you sure you want to continue");
//     if (value){
//         console.log("your request is processing");
//     }
//     else{
//         console.log("we are not processing your request")
//     }
// }
// giveConsent();

// Using prompt

function greetTouser() {
    let userInput = prompt("what is your name ?")
    if(userInput==null || userInput==""){
        text = "no name"
        }
    else{
        text = userInput;
    }
    let showOutput = document.createElement("h1");
    let userText = document.createTextNode(text);
    showOutput.appendChild(userText);
    document.body.appendChild(showOutput);
}
greetTouser();

