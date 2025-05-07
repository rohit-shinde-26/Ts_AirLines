// Bracket vs dot notation 
var key = "Owner";
var cars = {
    name: "verna",
    color: "black",
    price: 1200000,
    "Car Accessories": ["Alloy Wheel", "Music System", "Parking Camera"]
};
cars[key] = "Rohit Shinde";
console.log(cars.name);
console.log(cars["Car Accessories"]);
console.log(cars);
