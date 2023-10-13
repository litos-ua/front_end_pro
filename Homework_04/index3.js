'use strict'
{
    let myTdNumber = Number(prompt("Enter the  two-digit number.", "55"));
    let reminder, dig1, dig2;
    let n =10;
    let rp = [];
    let msg = ' ';

    do {
        reminder = myTdNumber % n;
        myTdNumber -= reminder;
        rp.push(reminder*10/n);
        n *= 10;
    } while (!(myTdNumber === 0));

    dig1 = rp.pop();
    dig2 = rp.pop();

    if ((dig2 % dig1) === 0){
        msg = `digit A = ${dig1} is the divisor of digit B = ${dig2};  `;
    }else {
        msg = `digit A = ${dig1} is not the divisor of digit B = ${dig2};  `;
    }


    if ((dig1 % dig2) === 0){
        msg += `   digit B = ${dig2} is the divisor of digit A = ${dig1}`;
    }else {
        msg += `   digit B = ${dig2} is not the divisor of digit A = ${dig1}`;
    }

    console.log(msg);
    document.getElementById('display3').innerText = msg;
}