export {};
// auto typing by typescript
let greet = "Hello World";
console.log(greet);

// Interface
interface User {
  name: String;
  id: Number;
}

const user: User = {
  name: "Junaid",
  id: 1,
};

// Array
let list1: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];
console.log(list1);

// Tuple
let me: [number, string, boolean] = [2, "Junaid", true];

// Enum
enum Color {
  Red = 5,
  Green = 2,
  White,
}
let c: Color = Color.Red;
console.log(c);

// Any
let notSure: any;
notSure = 4;
notSure = "maybe a string instead";
notSure = false;

// console.log(notSure.toUpperCase());

// unknown
let userInput: unknown;
userInput = { name: "junaid" };
console.log((userInput as { name: string }).name);

// user gaurd
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(userInput)) console.log(userInput.name);
userInput = 5;

// Type Inference
let a;
a = 10;

// Multityping using union
let multitype: number | boolean;
multitype = 10;
multitype = true;

// Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(5, 3));

// Optional parameter
function add2(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}
console.log(add2(5));

// Default parameter
function add3(num1: number, num2: number = 0): number {
  return num1 + num2;
}
console.log(add3(5));

// Interface
interface Employee {
  fullName: string;
  empId: number;
  department: string;
  designation: String;
}

function employeeInfo(employee: Employee) {
  console.log(
    `Name: ${employee.fullName}, EmpId: ${employee.empId}, Department: ${employee.department}, Designation: ${employee.designation}`
  );
}

let emp = {
  fullName: "Junaid",
  empId: 1,
  department: "IT",
  designation: "Software Engineer",
};

employeeInfo(emp);
