console.log(10 > 5);  // true
console.log(10 == "10"); // true (Double equals: ignores type)
console.log(10 === "10"); // false (Triple equals: strict type check)
console.log(5 <= 5); // true
console.log(3 != 4); // true
console.log(3 !== 4); // true

alert("System Check!"); 
let response = prompt("Enter deployment code:");

console.log(response); // Logs user input

let performance = 85;

if (performance >= 90) {
    console.log("Status: Optimal");
} else if (performance >= 70) {
    console.log("Status: Warning");
} else {
    console.log("Status: Critical Failure");
}

// Falsy values: false, 0, "", null, undefined, NaN
let userInput = ""; 
if (userInput) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // empty string is falsy
}

const password = "admin_password";

// AND (&&): Both must be true
if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log("Valid Password");
}

// OR (||): One must be true
let isRainy = true;
let isSnowing = false;
if (isRainy || isSnowing) {
    console.log("Stay inside");
}

// NOT (!): Flips the boolean 
// This is the same as if (isSnowing === false)
if (!isSnowing) {
    console.log("It is not snowing");
}

const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid Day");
}