for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

const techStack = ['Elixir', 'Next.js', 'Tailwind', 'PostgreSQL'];
for (let i = 0; i < techStack.length; i++) {
    console.log(`Index ${i}: ${techStack[i]}`);
}

// Useful for multi-dimensional data like grid coordinates
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Row ${i}, Col ${j}`);
    }
}

let target = Math.floor(Math.random() * 10);
let guess = -1;

while (true) { // Using Break to exit infinite loop
    guess = Math.floor(Math.random() * 10);
    if (guess === target) {
        console.log(`Found ${target}! Breaking loop...`);
        break; 
    }
}

for (let tool of techStack) {
    console.log("Working with:", tool);
}

const projectStats = {
    name: "Ottr",
    status: "Active",
    commits: 154
};

// Objects are not iterable by default, use Object.keys/values/entries
for (let key in projectStats) {
    console.log(`${key}: ${projectStats[key]}`);
}