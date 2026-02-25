function outer() {
    let hero = "Black Panther"; // Function Scope: Only available inside outer()

    function inner() {
        let cry = "Wakanda Forever!"; // Lexical Scope: inner() can see hero
        console.log(`${hero} says: ${cry}`);
    }
    inner();
}

// Block Scope (let/const vs var)
if (true) {
    let blockScoped = "I am trapped in this IF";
    var functionScoped = "I can escape this IF";
}

// console.log(blockScoped); // ReferenceError
console.log(functionScoped); // "I can escape this IF"

// Defining a function and storing it in a variable
const square = function (x) {
    return x * x;
};

// Functions that accept or return other functions
function callTwice(func) {
    func();
    func();
}

const rollDie = () => console.log(Math.floor(Math.random() * 6) + 1);
callTwice(rollDie);

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    };
}
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(10)); // true

// Methods are functions placed inside objects
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() { 
        this.eggCount++;
        return "EGG";
    }
};

// Preventing your app from crashing on errors
try {
    console.log(undefinedVariable.toUpperCase());
} catch (e) {
    console.log("Something went wrong, but the system is still running!");
}