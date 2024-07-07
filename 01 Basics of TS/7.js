// Truthy And Falsy values
// 1. Truthy values
// => true, "Any string",45,2.6365,etc
// It runs then true value has been printed
var str = "hello";
if (str) {
    console.log("Truthy value");
}
else {
    console.log("Falsy value");
}
var myNum = 23.65;
if (myNum) {
    console.log("Truthy value");
}
else {
    console.log("Falsy value");
}
var bool = true;
if (bool) {
    console.log("Truthy value");
}
else {
    console.log("Falsy value");
}
// 2. Falsy values
// => false, "",0
// It runs then true value has been printed
var a = "";
if (a) {
    console.log("Truthy value");
}
else {
    console.log("Falsy value");
}
var b = 0;
if (b) {
    console.log("Truthy value");
}
else {
    console.log("Falsy value");
}
var c = false;
if (c) {
    console.log("Truthy value");
}
else {
    console.log("Falsy value");
}
