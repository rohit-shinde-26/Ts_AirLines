// Array Destructuring

let cars: string[] = ["Innova", "City", "Civic", "Xuv700"];
let bikes: string[] = ["Zx10R", "Z900", "Harley"];

let showRoom:string[] = [...cars, ...bikes];

console.log(showRoom);
