'use strict';

    const counters = {
        btnVeryBad: 0,
        btnPoor: 0,
        btnSatisfactory: 0,
        btnGood: 0,
        btnExcellent: 0,
    };

    function updateCounterDisplay(buttonId) {
        const countElement = document.getElementById(`count${buttonId}`);
        if (countElement) {
            countElement.textContent = counters[buttonId].toString();
        }
    }

    function handleButClickCount(buttonId) {
        counters[buttonId]++;
        console.log(`${buttonId}: ${counters[buttonId]}`);
        updateCounterDisplay(buttonId);
    }

    // const tableBody = document.getElementById('counterTableBody');
    // for (const buttonId in counters) {
    //     const row = document.createElement('tr');
    //
    //     const buttonCell = document.createElement('th');
    //     buttonCell.textContent = buttonId;
    //     row.append(buttonCell);
    //
    //     const countCell = document.createElement('td');
    //     countCell.id = `count${buttonId}`;
    //     countCell.textContent = counters[buttonId];
    //     row.append(countCell);
    //
    //     tableBody.append(row);
    // }

    const tableBody = document.getElementById('counterTableBody');
    const tableHead = document.getElementById('counterTableHead');

    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.textContent = 'Button';
    headerRow.append(headerCell);

    for (const buttonId in counters) {
        const headerCell = document.createElement('th');
        headerCell.textContent = buttonId;
        headerRow.append(headerCell);
    }
    tableHead.append(headerRow);

    const countRow = document.createElement('tr');
    const countHeaderCell = document.createElement('th');
    countHeaderCell.textContent = 'Count';
    countRow.append(countHeaderCell);

    for (const buttonId in counters) {
        const countCell = document.createElement('td');
        countCell.id = `count${buttonId}`;
        countCell.textContent = counters[buttonId];
        countRow.append(countCell);
    }
    tableBody.append(countRow);




document.body.style.backgroundColor = 'lightblue';
    document.getElementById('btnVeryBad').addEventListener('click',
        () => handleButClickCount('btnVeryBad'));
    document.getElementById('btnPoor').addEventListener('click',
        () => handleButClickCount('btnPoor'));
    document.getElementById('btnSatisfactory').addEventListener('click',
        () => handleButClickCount('btnSatisfactory'));
    document.getElementById('btnGood').addEventListener('click',
        () => handleButClickCount('btnGood'));
    document.getElementById('btnExcellent').addEventListener('click',
        () => handleButClickCount('btnExcellent'));
    document.getElementById('btnReset').addEventListener('click', () => {
        for (const buttonId in counters) {
            counters[buttonId] = 0;
            updateCounterDisplay(buttonId);
        }
        console.log('Counters reset');
    });


