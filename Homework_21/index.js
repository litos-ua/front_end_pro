'use strict'

//let table = document.createElement('table');
const column = 10;
const row = 10;
const cssConst =
        `table {
            font-size: 18px; 
         }
         th, td {
            padding: 8px;
            text-align: center;
            border: 1px solid #ccc;
         }
         td {
         background-color: #c0c0c0;
         }
         th {
            background-color: #808080;
         }`

let table = createAndFillTable(column, row, cssConst);
document.body.insertAdjacentElement('beforeend',table)

function createAndFillTable(columns, rows, cssData) {

    let table = document.createElement('table')
    let styleCss = document.createElement('style');
    styleCss.innerText = cssData;
    document.head.append(styleCss);

    let thHeaderRow = document.createElement('tr');
    let thEmpty = document.createElement('th');
    thHeaderRow.append(thEmpty);
    for (let i = 1; i <= columns; i++) {
        let th = document.createElement('th');
        th.textContent = String(i);
        thHeaderRow.append(th);
    }
    table.appendChild(thHeaderRow);

    for (let i = 1; i <= rows; i++) {
        let trCol = document.createElement('tr');

        let thRowHeader = document.createElement('th');
        thRowHeader.textContent = String(i);
        trCol.append(thRowHeader);

        for (let j = 1; j <= columns; j++) {
            let tdRow = document.createElement('td');
            tdRow.textContent = String(j * i);
            trCol.append(tdRow);
        }
        table.appendChild(trCol);
    }
    return table;
}





