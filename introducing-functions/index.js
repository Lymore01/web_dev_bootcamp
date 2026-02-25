// Simple declaration and execution
function greet() {
    console.log("Initializing System...");
    console.log("Welcome back, Engineer.");
}

greet();

// Arguments allow you to pass data into a function
function greetUser(firstName) {
    console.log(`Hello, ${firstName}!`);
}

greetUser('Kelly'); // "Hello, Kelly!"

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('$', 5); // "$$$$$"

// Return outputs a value from the function so it can be stored or used elsewhere
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

const sum = add(10, 20); 
console.log(`Total: ${sum}`);


function lastElement(arr) {
    if (arr.length === 0) return null;
    return arr[arr.length - 1];
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}