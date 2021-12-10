// The new Date()
let d = new Date();
console.log(d);

//The new Date(year, month, ...) Syntax
let dsyn = new Date(2021,12,9,9,32,54,99);
console.log(dsyn);

// The new Date(dateString)
//  let dstring = new Date("04 december 2021");
//  document.write(dstring);

// the Date and Time Strings
let dtsr = new Date();
console.log(dtsr.toDateString()); // Display an abbreviated date string
console.log(dtsr.toLocaleDateString()); // Display a localized date string
console.log(dtsr.toISOString()); // Display the ISO standardized date string
console.log(dtsr.toUTCString()); // Display a date string converted to UTC time

let t = new Date();
console.log(t.toTimeString());
console.log(t.toLocaleTimeString());

// Getting Specific Date and Time Components
let dt = new Date();
console.log(dt.getDate());
console.log(dt.getDay());
console.log(dt.getMonth());
console.log(dt.getFullYear());

console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());

// Setting the Year, Month and Date
let ymd = new Date();
ymd.setFullYear(ymd.getFullYear()+2);
console.log(ymd);
let ym = new Date();
ym.setMonth(2);
console.log(ym);
let da = new Date();
da.getDate(10);
console.log(da)
let de = new Date();
de.setHours(20);
de.setMinutes(23);
de.setSeconds(50);
de.setMilliseconds(888);
console.log(de);




