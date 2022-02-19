console.clear();

// window object - location object
// console.log(window.document);
// console.log(window.location);

//href
// console.log(location.href);

//protocol
// console.log(location.protocol);

//hostname
// console.log(location.hostname);
//hostname
// console.log(location.hostname);

//port
// console.log(location.port);

//pathname
// console.log(location.pathname);

const locationObj = document.querySelector('.location-object');

const p1 = locationObj.children[0];
p1.textContent = location.href;

const p2 = locationObj.children[1];
p2.textContent = location.protocol;

const p3 = locationObj.children[2];
p3.textContent = location.hostname;

const p4 = locationObj.children[3];
p4.textContent = location.port;

const p5 = locationObj.children[4];
p5.textContent = location.pathname;


const Button = document.querySelector('.button');

// Button.addEventListener("click",function(){
//     location.assign("https://myportfoglio.netlify.app/")
// });

Button.addEventListener("click",function(){
    location.replace("https://myportfoglio.netlify.app/")
});


