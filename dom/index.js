const heading = document.getElementById('main-heading'); //
const statusSpan = document.querySelector('#status'); //
const btn = document.querySelector('#update-btn');

statusSpan.innerText = "Active"; 
statusSpan.style.color = "green"; //

const logo = document.querySelector('.logo');
logo.setAttribute('src', 'https://via.placeholder.com/150/FF8C00'); //
logo.setAttribute('alt', 'Mango OS Logo');

function addLog(text) {
    const newLog = document.createElement('li'); //
    newLog.innerText = text;
    const list = document.querySelector('#log-list');
    list.appendChild(newLog); //
}

btn.addEventListener('click', () => {
    heading.classList.toggle('highlight'); //
    addLog(`System Sync at ${new Date().toLocaleTimeString()}`);
});