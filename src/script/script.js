const mainLeftBox = document.getElementById('main-left-side');
const profileLeftBox = document.getElementById('profile-left-side');
const rightBox = document.getElementById('box-right-side');
const trainingBox = document.getElementById('training');
const jobBox = document.getElementById("jobs");

const goBack = document.getElementById('go-back');
const trainGoBack = document.getElementById('train-go-back');


const leftBackBtns = document.getElementsByClassName('left-go-back');
const rightBackBtns = document.getElementsByClassName('right-go-back');

const morning = document.getElementById('morning');
const evening = document.getElementById('evening');
const night = document.getElementById('night');

const dayTxt = document.getElementById('day');

const mainBtns = document.getElementsByClassName('main-btns');

const profileBtn = document.getElementById('profile');
const familyBtn = document.getElementById('family');
const friendBtn = document.getElementById('friend');

function btnfunciona() {
    alert('funciona');
}

function btnfunciona2() {
    alert('funciona2');
}

const time = {
    day: 1,
    month: 'janeiro',
    year: 1406,
}

function updateTime() {
    dayTxt.innerText = time.day;
}

morning.addEventListener('click', () => {
    morning.style.filter = "grayscale(0)";
    evening.style.filter = "grayscale(1)";
    night.style.filter = "grayscale(1)";
    time.day++;
    updateTime();
});

evening.addEventListener('click', () => {
    morning.style.filter = "grayscale(1)";
    evening.style.filter = "grayscale(0)";
    night.style.filter = "grayscale(1)";
});

night.addEventListener('click', () => {
    morning.style.filter = "grayscale(1)";
    evening.style.filter = "grayscale(1)";
    night.style.filter = "grayscale(0)";
});

profileBtn.addEventListener('click', () => {
    profileLeftBox.style.display = 'flex';
    mainLeftBox.style.display = 'none';
});


mainBtns[0].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainingBox.style.display = 'flex';
});

mainBtns[3].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainingBox.style.display = 'none';
    jobBox.style.display = 'grid';
});

function leftMainMenu() {
    profileLeftBox.style.display = 'none';
    mainLeftBox.style.display = 'flex';
}

function rightMainMenu() {
    rightBox.style.display = 'grid';
    trainingBox.style.display = 'none';
    jobBox.style.display = 'none';
}

for (let i = 0; i < leftBackBtns.length; i++) {
    leftBackBtns[i].onclick = leftMainMenu;
}

for (let i = 0; i < rightBackBtns.length; i++) {
    rightBackBtns[i].onclick = rightMainMenu; 
}

const jobsBtns = document.getElementsByClassName('jobs-btns');

for (let i = 0; i < jobsBtns.length; i++) {
    jobsBtns[i].onclick = btnfunciona;
}

const infoBtns = document.getElementsByClassName('jobs-info-btns');

for (let i = 0; i < jobsBtns.length; i++) {
    infoBtns[i].onclick = btnfunciona2;
}