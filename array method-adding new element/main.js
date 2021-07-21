//using push() method:
var colors = ["Red", "Green", "Blue"]; 
document.write(colors+"<br/>");
document.write(colors.length+"<br>");
colors.push("pink");
document.write(colors+"<br/>");
document.write(colors.length+"<br>");

//using unshift() method:
var dailyActivities = ["eat","sleep"];
document.write(dailyActivities+"<br/>");
document.write(dailyActivities.length+"<br>");
dailyActivities.unshift("exercise");
document.write(dailyActivities+"<br/>");
document.write(dailyActivities.length+"<br>");

//using concat() method:
var colors = ["Red", "Green", "Blue"]; 
var dailyActivities = ["eat","sleep"];
var allthing = colors.concat(dailyActivities);
document.write(allthing);





