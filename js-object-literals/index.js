const project = {
    name: "Shiplio",
    isPublic: true,
    version: 1.0,
    tags: ["DX", "CLI", "Automation"]
};

console.log(project.name); // "Shiplio"

// Use Bracket Notation (Useful for dynamic keys)
const keyToLookup = "version";
console.log(project[keyToLookup]); // 1.0
console.log(project["isPublic"]);  // true

project.version = 1.1;     
project.language = "Elixir"; // Add new property
console.log(project.language);

const devTeam = [
    {
        id: 1,
        username: "Lymore01",
        role: "Lead Engineer",
        skills: ["JS", "Elixir"]
    },
    {
        id: 2,
        username: "DevGuest",
        role: "Contributor",
        skills: ["CSS"]
    }
];

console.log(devTeam[0].skills[1]);