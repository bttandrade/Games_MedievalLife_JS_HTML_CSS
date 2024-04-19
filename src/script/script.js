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

const inventoryItens = document.getElementsByClassName('inv-item');
const invSword = inventoryItens[0];
const invArmor = inventoryItens[1];
const invVest = inventoryItens[2];
const invCape = inventoryItens[3];
const invSpear = inventoryItens[4];
const invHorse = inventoryItens[5];

const heroStats = {
    force: 10,
    fame: 50,
    gold: 1000,
}

const heroForceTxt = document.getElementById('force-value');
const heroFameTxt = document.getElementById('fame-value');
const heroGoldTxt = document.getElementById('gold-value');

function updateHeroStats() {
    heroForceTxt.innerText = heroStats.force;
    heroFameTxt.innerText = heroStats.fame;
    heroGoldTxt.innerText = heroStats.gold;
}

updateHeroStats();

const heroInventory = [
    atualSword = {
        swordIcon: '../images/espada3.png',
        swordName: 'Espada',
        swordFame: 0
    },
    atualArmor = {
        armorIcon: '../images/roupa.png',
        armorName: 'Roupa de Plebeu',
        armorFame: 0,
    },
]

function createItemShop(where, icon, name, fame, price, place) {
    let itemShop = document.createElement('div');
    itemShop.classList.add('shop-card');
    itemShop.innerHTML = `
        <div class="item-img"><img src="./src/images/${icon}.png" alt="icon"></div>
        <div class="item-desc">
            <h4 class="item-name">${name}</h4>
            <div class="item-values">
                <div class="item-fame">
                    <h4>${fame}</h4>
                    <img src="./src/images/fame.png" alt="icon">
                </div>
                <div class="item-price">
                    <h4>${price}</h4>
                    <img src="./src/images/ouro.png" alt="icon">
                </div>
            </div>
        </div>
        <div class="place-inventory">${place}</div>
        <button class="vest-buy">C</button>
    `
    where.appendChild(itemShop);
}

createItemShop(shop, "roupa1", "Roupa de Plebeu A", 100, 100, 2);
createItemShop(shop, "roupa2", "Roupa de Plebeu B", 200, 200, 2);
createItemShop(shop, "capa1", "Capa de Plebeu A", 300, 300, 3);
createItemShop(shop, "cavalo1", "Cavalo A", 400, 400, 5);
createItemShop(shop, "roupa3", "Roupa de Plebeu C", 500, 500, 2);
createItemShop(shop, "capa2", "Capa de Plebeu B", 600, 600, 3);
createItemShop(shop, "roupa4", "Roupa de Nobre A", 700, 700, 2);
createItemShop(shop, "capa3", "Capa de Nobre A", 800, 800, 3);
createItemShop(shop, "cavalo2", "Cavalo B", 900, 900, 5);
createItemShop(shop, "roupa5", "Roupa de Nobre B", 1000, 1000, 2);
createItemShop(shop, "capa4", "Capa de Nobre B", 1100, 1100, 3);

createItemShop(smith, "espada1", "Espada A", 100, 100, 0);
createItemShop(smith, "armor1", "Armadura A", 200, 200, 1);
createItemShop(smith, "espada2", "Espada B", 300, 300, 0);
createItemShop(smith, "armor2", "Armadura B", 400, 400, 1);
createItemShop(smith, "lanca1", "Lança A", 500, 500, 4);
createItemShop(smith, "espada3", "Espada C", 600, 600, 0);
createItemShop(smith, "armor3", "Armadura C", 700, 700, 1);
createItemShop(smith, "espada4", "Espada D", 800, 800, 0);
createItemShop(smith, "armor4", "Armadura D", 900, 900, 1);
createItemShop(smith, "lanca2", "Lança B", 1000, 1000, 4);
createItemShop(smith, "espada5", "Espada E", 1100, 1100, 0);
createItemShop(smith, "armor5", "Armadura E", 1200, 1200, 1);

function moveToInventory(item, icon, name, fame) {
    inventoryItens[item].innerHTML = `
        <img src="${icon}" alt="icon">
        <div class="inv-item-desc">${name}</div>
        <div class="inv-item-fame">
            <h4 class="inv-item-fame-value">${fame}</h4>
            <img src="./src/images/fame.png" alt="icon">
        </div>
    `;
}

//addToInventory(0, 'espada1', 'Espada I', 50);
//addToInventory(1, 'roupa', 'Roupa de Plebeu', 0);

//buyShopItens[0].onclick = addToInventory(0, 'espada1', 'Espada I', 50);

const buySword = document.getElementsByClassName('sword-buy');
const buyArmor = document.getElementsByClassName('armor-buy');
const buySpear = document.getElementsByClassName('spear-buy');
const buyVest = document.getElementsByClassName('vest-buy');
const buyCape = document.getElementsByClassName('cape-buy');
const buyHorse = document.getElementsByClassName('horse-buy');
const buyBook = document.getElementsByClassName('book-buy');

function tryToBuy(value, place, icon, name, fame) {
    if (heroStats.gold >= value) {
        moveToInventory(place, icon, name, fame);
        heroStats.gold -= value;
        updateHeroStats();
    } else {
        alert('ouro insuficinete');
    }
}

function getAItem(event) {
    const item = event.target.parentNode;
    const itemName = item.querySelector('.item-desc h4').innerText;
    const itemIcon = item.querySelector('.item-img img').src;
    const itemFame = item.querySelector('.item-fame h4').innerText;
    const itemPrice = item.querySelector('.item-price h4').innerText;
    const itemPlace = item.querySelector('.place-inventory').innerText;

    tryToBuy(itemPrice, itemPlace, itemIcon, itemName, itemFame);
}

for (let i = 0; i < buySword.length; i++) {
    buySword[i].addEventListener("click", getAItem);
}
for (let i = 0; i < buyArmor.length; i++) {
    buyArmor[i].addEventListener("click", getAItem);
}
for (let i = 0; i < buyVest.length; i++) {
    buyVest[i].addEventListener("click", getAItem);
}
for (let i = 0; i < buyCape.length; i++) {
    buyCape[i].addEventListener("click", getAItem);
}
for (let i = 0; i < buySpear.length; i++) {
    buySpear[i].addEventListener("click", getAItem);
}
for (let i = 0; i < buyHorse.length; i++) {
    buyHorse[i].addEventListener("click", getAItem);
}

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