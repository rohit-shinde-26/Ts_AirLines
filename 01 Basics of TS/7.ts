// Truthy And Falsy values

// 1. Truthy values
// => true, "Any string",45,2.6365,etc
// It runs then true value has been printed

let str: string = "hello";
if (str) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let myNum: number = 23.65;
if (myNum) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let bool: boolean = true;
if (bool) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

// 2. Falsy values
// => false, "",0
// It runs then true value has been printed

let a: string = "";
if (a) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let b: number = 0;
if (b) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let c: boolean = false;
if (c) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}
