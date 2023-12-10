'use strict';

const counters = {
    btnVeryBad: 0,
    btnPoor: 0,
    btnSatisfactory: 0,
    btnGood: 0,
    btnExcellent: 0,
};

const btnDiv = document.createElement('div');
btnDiv.classList.add('d-flex', 'gap-2', 'justify-content-center', 'py-5');
btnDiv.id = 'btnDiv';

const buttonData = [
    { id: 'btnVeryBad', text: 'Very bad', style: 'btn-primary' },
    { id: 'btnPoor', text: 'Poor', style: 'btn-success' },
    { id: 'btnSatisfactory', text: 'Satisfactory', style: 'btn-info' },
    { id: 'btnGood', text: 'Good', style: 'btn-warning' },
    { id: 'btnExcellent', text: 'Excellent', style: 'btn-danger' },
    { id: 'btnReset', text: 'Reset', style: 'btn-light' },
];

buttonData.forEach(buttonInfo => {
    const button = document.createElement('button');
    button.classList.add('btn', `rounded-pill`, 'px-3', buttonInfo.style);
    button.type = 'button';
    button.id = buttonInfo.id;
    button.textContent = buttonInfo.text;
    btnDiv.append(button);
});

document.body.append(btnDiv);


const table = document.createElement('table');
table.classList.add('table');

const tableHead = document.createElement('thead');
const headerRow = document.createElement('tr');

const headerCell = document.createElement('th');
headerCell.textContent = 'Button';
headerCell.style.cssText = 'text-align: center; font-size: 20px;';
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

document.body.style.backgroundColor = 'lightblue';

btnDiv.addEventListener('click', handleVoteButtonClick);

const btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', handleResetButtonClick);

function updateCounterDisplay(buttonId) {
    const countElement = document.getElementById(`count${buttonId}`);
    if (countElement) {
        countElement.textContent = counters[buttonId].toString();
    }
}

function handleVoteButtonClick(event) {
    const buttonId = event.target.id;
    if (buttonId in counters) {
        counters[buttonId]++;
        console.log(`${buttonId}: ${counters[buttonId]}`);
        updateCounterDisplay(buttonId);
    }
}

function handleResetButtonClick() {
    for (const buttonId in counters) {
        counters[buttonId] = 0;
        updateCounterDisplay(buttonId);
    }
    console.log('Counters reset');
}



