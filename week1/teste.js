
var today = new Date();
var name = "John";
var born = 1982;
var year = today.getFullYear();
var age = year - born;

console.log("My name is " + name);
console.log("My age " + age);

if (age > 40){
console.log("old");}
else if (age == 40){
console.log( "maybe");}
else{ console.log("young")}
