const mainLeftBox = document.getElementById('main-left-side');
const profileBox = document.getElementById('profile');
const relationBox = document.getElementById('relation');
const inventoryBox = document.getElementById('inventory');
const rightBox = document.getElementById('box-right-side');
const trainBox = document.getElementById('train');
const jobBox = document.getElementById("jobs");
const cityBox = document.getElementById("city");
const socialBox = document.getElementById("social");
const adventureBox = document.getElementById("adventure");
const eventsBox = document.getElementById("events");

const tavern = document.getElementById('city-tavern');
const bookshop = document.getElementById('city-book');
const shop = document.getElementById('city-shop');
const smith = document.getElementById('city-smith');

const goBack = document.getElementById('go-back');
const trainGoBack = document.getElementById('train-go-back');

const leftBackBtns = document.getElementsByClassName('left-go-back');
const rightBackBtns = document.getElementsByClassName('right-go-back');
const cityBackBtns = document.getElementsByClassName('right-city-back');

const morning = document.getElementById('morning');
const evening = document.getElementById('evening');
const night = document.getElementById('night');

const dayTxt = document.getElementById('day');

const mainBtns = document.getElementsByClassName('main-btns');

const profileBtn = document.getElementById('profile-btn');
const relationBtn = document.getElementById('relation-btn');
const inventoryBtn = document.getElementById('inventory-btn');

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
    profileBox.style.display = 'flex';
    mainLeftBox.style.display = 'none';
    relationBox.style.display = 'none';
    inventoryBox.style.display = 'none';
});

relationBtn.addEventListener('click', () => {
    profileBox.style.display = 'none';
    mainLeftBox.style.display = 'none';
    relationBox.style.display = 'flex';
    inventoryBox.style.display = 'none';
});

inventoryBtn.addEventListener('click', () => {
    profileBox.style.display = 'none';
    mainLeftBox.style.display = 'none';
    relationBox.style.display = 'none';
    inventoryBox.style.display = 'flex';
});

mainBtns[0].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainBox.style.display = 'grid';
    cityBox.style.display = 'none';
    jobBox.style.display = 'none';
    socialBox.style.display = 'none';
    adventureBox.style.display = 'none';
    eventsBox.style.display = 'none';
});

mainBtns[2].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainBox.style.display = 'none';
    jobBox.style.display = 'grid';
    cityBox.style.display = 'none';
    socialBox.style.display = 'none';
    adventureBox.style.display = 'none';
    eventsBox.style.display = 'none';
});

mainBtns[4].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainBox.style.display = 'none';
    jobBox.style.display = 'none';
    cityBox.style.display = 'grid';
    socialBox.style.display = 'none';
    adventureBox.style.display = 'none';
    eventsBox.style.display = 'none';
});

mainBtns[5].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainBox.style.display = 'none';
    jobBox.style.display = 'none';
    cityBox.style.display = 'none';
    socialBox.style.display = 'grid';
    adventureBox.style.display = 'none';
    eventsBox.style.display = 'none';
});

mainBtns[6].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainBox.style.display = 'none';
    jobBox.style.display = 'none';
    cityBox.style.display = 'none';
    socialBox.style.display = 'none';
    adventureBox.style.display = 'grid';
    eventsBox.style.display = 'none';
});

mainBtns[7].addEventListener('click', () => {
    rightBox.style.display = 'none';
    trainBox.style.display = 'none';
    jobBox.style.display = 'none';
    cityBox.style.display = 'none';
    socialBox.style.display = 'none';
    adventureBox.style.display = 'none';
    eventsBox.style.display = 'grid';
});

function leftMainMenu() {
    profileBox.style.display = 'none';
    relationBox.style.display = 'none';
    inventoryBox.style.display = 'none';
    mainLeftBox.style.display = 'flex';
}

function rightMainMenu() {
    rightBox.style.display = 'grid';
    trainBox.style.display = 'none';
    jobBox.style.display = 'none';
    cityBox.style.display = 'none';
    socialBox.style.display = 'none';
    adventureBox.style.display = 'none';
    eventsBox.style.display = 'none';
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
cityBtns[0].addEventListener('click', () => {
    cityBox.style.display = 'none';
    tavern.style.display = 'grid';
});
cityBtns[1].addEventListener('click', () => {
    cityBox.style.display = 'none';
    bookshop.style.display = 'grid';
});
cityBtns[2].addEventListener('click', () => {
    cityBox.style.display = 'none';
    shop.style.display = 'grid';
});
cityBtns[3].addEventListener('click', () => {
    cityBox.style.display = 'none';
    smith.style.display = 'grid';
});

for (let i = 0; i < cityBackBtns.length; i++) {
    cityBackBtns[i].addEventListener('click', () => {
        cityBox.style.display = 'grid';
        tavern.style.display = 'none';
        bookshop.style.display = 'none';
        shop.style.display = 'none';
        smith.style.display = 'none';
    });
}

const socialInfoBtns = document.getElementsByClassName('social-info-btns');
for (let i = 0; i < socialInfoBtns.length; i++) {
    socialInfoBtns[i].onclick = btnfunciona2;
}

const socialBtns = document.getElementsByClassName('social-btns');
for (let i = 0; i < socialBtns.length; i++) {
    socialBtns[i].onclick = btnfunciona;
}

const adventureInfoBtns = document.getElementsByClassName('adventure-info-btns');
for (let i = 0; i < adventureInfoBtns.length; i++) {
    adventureInfoBtns[i].onclick = btnfunciona2;
}

const adventureBtns = document.getElementsByClassName('adventure-btns');
for (let i = 0; i < adventureBtns.length; i++) {
    adventureBtns[i].onclick = btnfunciona;
}

const eventsInfoBtns = document.getElementsByClassName('events-info-btns');
for (let i = 0; i < eventsInfoBtns.length; i++) {
    eventsInfoBtns[i].onclick = btnfunciona2;
}

const eventsBtns = document.getElementsByClassName('events-btns');
for (let i = 0; i < eventsBtns.length; i++) {
    eventsBtns[i].onclick = btnfunciona;
}