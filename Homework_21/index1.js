"use strict"

class TableGenerator {
    constructor(columns, rows, cssData) {
        this.columns = columns;
        this.rows = rows;
        this.cssData = cssData;
        this.table = this.createTable();
        this.fillTable();
        this.renderTable();
    }

    createTable() {
        const table = document.createElement('table');
        const styleCss = document.createElement('style');
        styleCss.innerText = this.cssData;
        document.head.append(styleCss);

        return table;
    }

    fillTable() {
        const thHeaderRow = document.createElement('tr');
        const thEmpty = document.createElement('th');
        thHeaderRow.append(thEmpty);

        for (let i = 1; i <= this.columns; i++) {
            const th = document.createElement('th');
            th.textContent = String(i);
            thHeaderRow.append(th);
        }

        this.table.append(thHeaderRow);

        for (let i = 1; i <= this.rows; i++) {
            const trCol = document.createElement('tr');
            const thRowHeader = document.createElement('th');
            thRowHeader.textContent = String(i);
            trCol.append(thRowHeader);

            for (let j = 1; j <= this.columns; j++) {
                const tdRow = document.createElement('td');
                tdRow.textContent = String(j * i);
                trCol.append(tdRow);
            }

            this.table.appendChild(trCol);
        }
    }

    renderTable() {
        document.body.insertAdjacentElement('beforeend', this.table);
    }
}

const columnCount = 10;
const rowCount = 10;
const cssStyles =
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
   }`;

const tableGenerator = new TableGenerator(columnCount, rowCount, cssStyles);
