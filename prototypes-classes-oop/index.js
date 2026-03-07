// Prototypes are the mechanism by which JS objects inherit features from one another.
// Array.prototype contains methods like push, pop, and map.
const arr = [1, 2, 3];
console.log(arr.__proto__);

// A function that creates and returns an object. 
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.rgb = function() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    };
    return color;
}

// Uses the 'new' keyword to create objects and set the prototype.
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
// Adding a method to the prototype so all instances share ONE copy.
Color.prototype.rgb = function() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
};

const red = new Color(255, 0, 0);

// Syntactic sugar over prototypes. Cleaner and more readable.
class Project {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }
    getInfo() {
        return `${this.name} is currently ${this.status}.`;
    }
}

const shiplio = new Project('Shiplio', 'Active');

// Inheritance: Creating a child class that shares logic from a parent.
class Deployment extends Project {
    constructor(name, status, version) {
        // 'super' calls the constructor of the parent class
        super(name, status); 
        this.version = version;
    }
    deploy() {
        return `Deploying ${this.name} v${this.version}...`;
    }
}

const v1 = new Deployment('Ottr', 'Staging', '1.0.4');
console.log(v1.getInfo()); // Inherited method
console.log(v1.deploy());  // Specific method