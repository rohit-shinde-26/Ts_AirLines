// Array Destructuring
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cars = ["Innova", "City", "Civic", "Xuv700"];
var bikes = ["Zx10R", "Z900", "Harley"];
var showRoom = __spreadArray(__spreadArray([], cars, true), bikes, true);
console.log(showRoom);
