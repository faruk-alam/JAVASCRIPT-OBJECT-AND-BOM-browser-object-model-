// timing event method
// setTimeOut() & setInterval()

// setTimeOut
// setTimeout(() => {
//     console.log("hello there")
// }, 5000);


 const Button = document.querySelector('.save-button');
 const message = document.querySelector('.sms')

// Button.addEventListener('click',userMessage);
// function userMessage(){
//     message.textContent = "Your message has been saved successfully";
//     setTimeout(() => {
//         message.textContent = " ";
//     },3000)
// }

Button.addEventListener("click",displayCount);
function displayCount() {
    let count = 1;
    message.textContent = count;
    setInterval(() => {
        count++;
        message.textContent = count;        
    }, 1000);
}