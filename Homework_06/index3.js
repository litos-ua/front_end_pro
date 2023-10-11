'use strict'
{
    const firstNumb = Number(prompt("Enter the A (first) number.",'7'));
    const secondNumb = Number(prompt("Enter the B (second) number.",'77'));
    const reminderDirDiv = secondNumb % firstNumb;
    const reminderInvDiv = firstNumb % secondNumb;
    let msg = '';

    if(reminderDirDiv === 0){
        msg += `number A = ${firstNumb} is the divisor of number B = ${secondNumb}`;
    }else {
        msg += `number A = ${firstNumb} is not the divisor of number B = ${secondNumb}`;
    }

    if(reminderInvDiv === 0){
        msg += `   number B = ${secondNumb} is the divisor of number A = ${firstNumb}`;
    }else {
        msg += `   number B = ${secondNumb} is not the divisor of number A = ${firstNumb}`;
    }

    console.log(msg);
    document.getElementById('display3').innerText = msg;
}