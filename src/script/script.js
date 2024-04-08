const mainLeftBox = document.getElementById('main-left-side');
const profileLeftBox = document.getElementById('profile-left-side');
const rightBox = document.getElementById('box-right-side');
const trainingBox = document.getElementById('training');
const jobBox = document.getElementById("jobs");
const cityBox = document.getElementById("city");
const socialBox = document.getElementById("social");

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
    cityBox.style.display = 'none';
    jobBox.style.display = 'none';
    socialBox.style.display = 'none';
});

mainBtns[2].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainingBox.style.display = 'none';
    jobBox.style.display = 'grid';
    cityBox.style.display = 'none';
    socialBox.style.display = 'none';
});

mainBtns[4].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainingBox.style.display = 'none';
    jobBox.style.display = 'none';
    cityBox.style.display = 'grid';
    socialBox.style.display = 'none';
});

mainBtns[5].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainingBox.style.display = 'none';
    jobBox.style.display = 'none';
    cityBox.style.display = 'none';
    socialBox.style.display = 'grid';
});

function leftMainMenu() {
    profileLeftBox.style.display = 'none';
    mainLeftBox.style.display = 'flex';
}

function rightMainMenu() {
    rightBox.style.display = 'grid';
    trainingBox.style.display = 'none';
    jobBox.style.display = 'none';
    cityBox.style.display = 'none';
    socialBox.style.display = 'none';
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

const infoJobsBtns = document.getElementsByClassName('jobs-info-btns');
for (let i = 0; i < infoJobsBtns.length; i++) {
    infoJobsBtns[i].onclick = btnfunciona2;
}

const trainBtns = document.getElementsByClassName('train-btns');
for (let i = 0; i < trainBtns.length; i++) {
    trainBtns[i].onclick = btnfunciona;
}

const infoTrainBtns = document.getElementsByClassName('train-info-btns');
for (let i = 0; i < infoTrainBtns.length; i++) {
    infoTrainBtns[i].onclick = btnfunciona2;
}

const cityBtns = document.getElementsByClassName('city-btns');
for (let i = 0; i < cityBtns.length; i++) {
    cityBtns[i].onclick = btnfunciona;
}

const socialInfoBtns = document.getElementsByClassName('social-info-btns');
for (let i = 0; i < socialInfoBtns.length; i++) {
    socialInfoBtns[i].onclick = btnfunciona2;
}

const socialBtns = document.getElementsByClassName('social-btns');
for (let i = 0; i < socialBtns.length; i++) {
    socialBtns[i].onclick = btnfunciona;
}