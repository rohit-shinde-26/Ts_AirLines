// Bracket vs dot notation 

const key:string = "Owner"

const cars:{name:string,color:string,price:number,"Car Accessories" :string[]}={
    name : "verna",
    color:"black",
    price : 1200000,
    "Car Accessories" : ["Alloy Wheel","Music System","Parking Camera"]
}

cars[key] = "Rohit Shinde"
console.log(cars.name)
console.log(cars["Car Accessories"])
console.log(cars)