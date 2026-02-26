const btnV2 = document.querySelector('#v2');
btnV2.onclick = function() {
    console.log("You clicked version 2!");
};

const btnV3 = document.querySelector('#v3');
btnV3.addEventListener('click', () => {
    alert("This is the professional way to handle events!");
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

const colorBtn = document.querySelector('#color-btn');
colorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = makeRandColor();
});

const input = document.querySelector('#username');
input.addEventListener('keydown', (e) => {
    console.log(`Key: ${e.key}, Code: ${e.code}`); //
});

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const tweetInput = tweetForm.elements.tweet;
    const newTweet = document.createElement('li');
    newTweet.innerText = tweetInput.value;
    
    tweetsContainer.append(newTweet);
    tweetInput.value = ''; 
});

tweetsContainer.addEventListener('click', function(e) {
    e.target.nodeName === 'LI' && e.target.remove();
});