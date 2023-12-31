'use strict'

const counters = {
    btnVeryBad: 0,
    btnPoor: 0,
    //btnPoor_2: 0,   // Для додавання відповідного варіанту треба додати властивісь та смайлік з таким самим ім'ям
    btnSatisfactory: 0,
    btnGood: 0,
    btnExcellent: 0,
};

const table = document.createElement('table');
table.classList.add('table');

const tableHead = document.createElement('thead');
const headerRow = document.createElement('tr');

const headerCell = document.createElement('th');
headerCell.textContent = 'Vote type';
headerCell.style.cssText = 'text-align: center; vertical-align: middle; font-size: 20px;';
headerRow.append(headerCell);

for (const buttonId in counters) {
    const headerCell = document.createElement('th');
    headerCell.style.textAlign = 'center';
    const img = document.createElement('img');
    img.src = `./images/${buttonId}.jpg`;
    img.alt = buttonId;
    headerCell.append(img);
    headerRow.append(headerCell);
}

tableHead.append(headerRow);

const tableBody = document.createElement('tbody');
const countRow = document.createElement('tr');
const countHeaderCell = document.createElement('th');
countHeaderCell.textContent = 'Count';
countHeaderCell.style.cssText = 'text-align: center; font-size: 20px;';
countRow.append(countHeaderCell);

for (const buttonId in counters) {
    const countCell = document.createElement('td');
    countCell.id = `count${buttonId}`;
    countCell.textContent = counters[buttonId];
    countCell.style.cssText = 'text-align: center; font-size: 18px;';
    countRow.append(countCell);
}

tableBody.append(countRow);
table.append(tableHead, tableBody);
document.body.append(table);

const resetButton = document.createElement('button');
resetButton.classList.add('btn', 'btn-primary', 'rounded-pill', 'px-3', 'btn-lg', 'd-block', 'mx-auto');
resetButton.type = 'button';
resetButton.textContent = 'Reset';
resetButton.id = 'btnReset';
table.append(resetButton);

document.body.style.backgroundColor = 'lightblue';

table.addEventListener('click', handleButtonClick);

function updateCounterDisplay(buttonId) {
    const countElement = document.getElementById(`count${buttonId}`);
    if (countElement) {
        countElement.textContent = counters[buttonId].toString();
    }
}

function handleButtonClick(event) {
    const buttonId = event.target.alt;
    if (buttonId in counters) {
        counters[buttonId]++;
        console.log(`${buttonId}: ${counters[buttonId]}`);
        updateCounterDisplay(buttonId);
    } else if (event.target.id === 'btnReset') {
        handleResetButtonClick();
    }
}

function handleResetButtonClick() {
    for (const buttonId in counters) {
        counters[buttonId] = 0;
        updateCounterDisplay(buttonId);
    }
    console.log('Counters reset');
}
