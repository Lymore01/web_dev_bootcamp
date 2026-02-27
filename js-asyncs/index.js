const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

// Callback Hell 
// Nesting callbacks makes code hard to read and maintain
/*
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        // ...and it keeps going deeper
    }, 1000);
}, 1000);
*/

// A Promise represents the eventual completion (or failure) of an async operation
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve(`SUCCESS DATA FROM ${url}`); //
            }
            reject('CONNECTION TIMEOUT :('); //
        }, 1000);
    });
};


async function makeTwoRequests() {
    try {
        console.log("Requesting first page...");
        let data1 = await fakeRequest('/page1');
        console.log(data1);

        console.log("Requesting second page...");
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (err) {
        console.log("CAUGHT AN ERROR:", err);
    }
}

makeTwoRequests();