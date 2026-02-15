let colors = ['red', 'orange', 'yellow'];
let lottoNumbers = [19, 22, 56, 12, 51];

console.log(colors[0]); // 'red'
colors[2] = 'mango';   // Updates 'yellow' to 'mango'
console.log(colors.length); // 3

colors.push('green'); // Adds to end
let lastColor = colors.pop(); // Removes and returns the last item

colors.unshift('purple'); // Adds to start
let firstColor = colors.shift(); // Removes and returns the first item

let moreColors = ['blue', 'indigo'];
let allColors = colors.concat(moreColors); // Merges two arrays

console.log(allColors.indexOf('red')); // Returns index or -1
console.log(allColors.includes('blue')); // true
allColors.reverse(); 

// Slice: Copies a portion (does not change original)
let favorites = allColors.slice(0, 2); 

// Splice: Changes contents by removing/replacing (modifies original)
// Syntax: splice(start, deleteCount, itemsToInsert)
allColors.splice(1, 0, 'gold'); // Inserts 'gold' at index 1

// Arrays are stored as references in memory.
let nums = [1, 2, 3];
let numsCopy = nums;
console.log(nums === numsCopy); // true (same reference)
// console.log([1, 2] === [1, 2]); // false (different references in memory)

const tools = ['Shiplio', 'Ottr'];
tools.push('Keylio');

// Arrays can contain other arrays (Nested Arrays).
const board = [
    ['O', null, 'X'],
    [null, 'X', 'O'],
    ['X', 'O', null]
];
console.log(board[1][1]); // 'X' (Row 1, Column 1)