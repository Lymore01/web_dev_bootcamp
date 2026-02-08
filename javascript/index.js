console.log("S Basics");

// Numbers and Basic Math
let age = 24;          
let pi = 3.14;      
let scientific = 2e5;  

// NaN (Not a Number)
let errorVal = 0 / 0; 
console.log(errorVal); // NaN
console.log(typeof NaN); // "number"

// Variables and Reassignment
let project = "Shiplio";
project = "Ottr"; 
console.log(project);

let counter = 10;
console.log(counter++); // Logs 10, then adds 1
console.log(++counter); // Adds 1, then logs 12

// Const and Var
const API_KEY = "8a2f-11ed"; // Cannot be changed
var oldWay = "legacy";       // Older JS syntax

// Booleans
let isOnline = true;
let hasError = false;

// Naming Conventions
let myVariableName = "camelCase"; // standard
const MAX_STRENGTH = 100;         // Standard for constants