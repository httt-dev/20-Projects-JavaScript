const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();

//fetch random user and add money

async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
    };
    addData(newUser);
}

function doubleMoney() {
    data = data.map((user) => {
        return {
            ...user,
            money: user.money * 2,
        };
    });
    updateDom();
}

function sortByRichest() {
    data.sort((a, b) => b.money - a.money);
    updateDom();
}

function showMillionaires() {
    data = data.filter((user) => user.money > 1000000);
    updateDom();
}
function addData(obj) {
    data.push(obj);

    updateDom();
}

function calculateWealth() {
    const wealth = data.reduce((acc, user) => acc + user.money, 0);

    const waelthEl = document.createElement('div');
    waelthEl.innerHTML = `<h3>Total Wealth : <strong>${formatMoney(
        wealth
    )}</strong></h3>`;

    main.appendChild(waelthEl);
}

function updateDom(prividedData = data) {
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
    prividedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name} </strong> ${formatMoney(
            item.money
        )}`;
        main.appendChild(element);
    });
}

//format number

function formatMoney(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//event
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
