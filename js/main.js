// DOM
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    // Set AM or PM
    // const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12H Format
    // hour = hour % 12 || 12;
    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = `url('../img/morning.jpg')`;
        greeting.textContent = 'Bom Dia';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = `url('../img/afternoon.jpg')`;
        greeting.textContent = 'Boa Tarde';
    } else {
        // Evening
        document.body.style.backgroundImage = `url('../img/night.jpg')`;
        greeting.textContent = 'Boa Noite';
        document.body.style.color = '#fff';
    }
    document.body.style.backgroundSize = 'cover';
}

// Get and Set Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Coloque o seu nome]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get and Set Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Diga qual seu foco]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// Exec
setBgGreet();
showTime();
getName();
getFocus();