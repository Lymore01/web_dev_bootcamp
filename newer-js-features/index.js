function greet(person, msg = 'Welcome to the system', punc = '!') {
    console.log(`${person}, ${msg}${punc}`);
}
greet('Kelly'); // "Kelly, Welcome to the system!"

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 1];
console.log(Math.max(...nums)); 

const techStack = ['Elixir', 'Next.js'];
const fullStack = [...techStack, 'Tailwind', 'PostgreSQL']; // Combining arrays

const baseConfig = { theme: 'dark', notifications: true };
const userConfig = { ...baseConfig, notifications: false, admin: true }; 

function sumAll(...numbers) {
    return numbers.reduce((total, n) => total + n);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

const runners = ['Eliud', 'Feyisa', 'Galen'];
const [gold, silver, bronze] = runners; // gold = 'Eliud'

const project = {
    title: 'Ottr',
    stars: 150,
    language: 'JavaScript'
};
const { title, language: lang } = project; // Renaming 'language' to 'lang'

function printProject({ title, stars }) {
    console.log(`${title} has ${stars} stars.`);
}
printProject(project);