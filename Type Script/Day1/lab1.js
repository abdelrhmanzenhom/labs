"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let first = "1";
let num = 1;
let bol = true;
let arr = [1, 2, 3, 4];
console.log(first, num, bol, arr);
//lab1
let mixedArr = [1, "asdf", true, { a: "akjdsf" }, ["a", "af"]];
function printArrayElemeents(arr) {
    for (const element of arr) {
        console.log(typeof element, element);
    }
}
printArrayElemeents(mixedArr);
//lab2
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Stop";
    TrafficLight["Yellow"] = "Get Ready";
    TrafficLight["Green"] = "Go";
})(TrafficLight || (TrafficLight = {}));
function getAction(x) {
    return x;
}
console.log(getAction(TrafficLight.Red));
console.log(getAction(TrafficLight.Yellow));
console.log(getAction(TrafficLight.Green));
//lab3
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userInfo = [1, "abdo", Role.Admin];
function describeUser(tuble) {
    console.log(tuble);
}
describeUser(userInfo);
//lab4
function caps(x) {
    if (typeof x == "string")
        return x.toUpperCase();
    return "$" + x;
}
console.log(caps(5));
//lab5
let unkon = "abcdef";
function processInput(x) {
    if (typeof x == "string")
        return x.toUpperCase();
    else if (typeof x == "number")
        return x * x;
}
console.log(processInput(unkon));
//lab6
//# sourceMappingURL=lab1.js.map