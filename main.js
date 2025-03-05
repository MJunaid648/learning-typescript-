"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// auto typing by typescript
var greet = "Hello World";
console.log(greet);
var user = {
    name: "Junaid",
    id: 1,
};
// Array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1);
// Tuple
var me = [2, "Junaid", true];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["White"] = 3] = "White";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
// Any
var notSure;
notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// console.log(notSure.toUpperCase());
// unknown
var userInput;
userInput = { name: "junaid" };
console.log(userInput.name);
// user gaurd
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(userInput))
    console.log(userInput.name);
userInput = 5;
// Type Inference
var a;
a = 10;
// Multityping using union
var multitype;
multitype = 10;
multitype = true;
// Function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 3));
// Optional parameter
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add2(5));
// Default parameter
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
console.log(add3(5));
function employeeInfo(employee) {
    console.log("Name: ".concat(employee.fullName, ", EmpId: ").concat(employee.empId, ", Department: ").concat(employee.department, ", Designation: ").concat(employee.designation));
}
var emp = {
    fullName: "Junaid",
    empId: 1,
    department: "IT",
    designation: "Software Engineer",
};
employeeInfo(emp);
