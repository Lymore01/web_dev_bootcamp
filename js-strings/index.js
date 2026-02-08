let firstName = "Kelly";
let lastName = 'Limo';

// Strings are indexed starting at 0.
console.log(firstName[0]); // "K"
console.log(firstName.length); // 5

// Methods 
let message = "   DX is Awesome   ";
console.log(message.trim().toUpperCase()); // "DX IS AWESOME"

// Some methods take inputs (arguments) to change their behavior.
let project = "Shiplio-Tool";
console.log(project.indexOf("Tool")); // 8
console.log(project.slice(0, 7));    // "Shiplio"
console.log(project.replace("Tool", "OS")); // "Shiplio-OS"

// Use backticks (`) to embed variables directly into a string.
let product = "Ottr";
let price = 0; 
let announcement = `The tool ${product} costs $${price}.`; 
console.log(announcement);


// Undefined: Variable has been declared but not assigned a value.
let loggedInUser = null; // Nobody is here yet
let systemStatus;        // Currently undefined

// Math.random() gives a decimal between 0 and 1.
let randomDecimal = Math.random();

// Generating a whole number between 1 and 10:
let dieRoll = Math.floor(Math.random() * 10) + 1;
console.log(`System generated roll: ${dieRoll}`);

// Math properties
console.log(Math.PI); // 3.141592653589793