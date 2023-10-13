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
    if (dig1 === dig2){
        msg = `The numbers ${dig1} and ${dig2} are match`;
    }else { if (dig1 > dig2){
                msg = `the first digit ${dig1} is greater than the second ${dig2} `;
            }else {
        msg = `the second digit ${dig2} is greater than the first ${dig1} `;
                }
    }
    console.log(msg);
    document.getElementById('display6').innerText = msg;
}