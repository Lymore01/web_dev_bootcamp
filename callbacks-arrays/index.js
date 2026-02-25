const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (n) {
    console.log(n * n);
});

// Creates a NEW array by transforming every element
const doubles = numbers.map(function (num) {
    return num * 2;
});

const square = (x) => x * x; 
const add = (a, b) => a + b;

setTimeout(() => {
    console.log("Hello after 3 seconds!");
}, 3000);

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);
// clearInterval(id); // Use this to stop the interval

// Returns new array with items that pass a test
const smallNums = numbers.filter(n => n < 5);

const allEven = numbers.every(n => n % 2 === 0); // false

const someEven = numbers.some(n => n % 2 === 0); // true

const total = numbers.reduce((acc, curr) => acc + curr);