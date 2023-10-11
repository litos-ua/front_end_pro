'use strict'
{
    let myTdNumber = Number(prompt("Enter the  six-digit number.","123321"));
    let reminder, dig1, dig2, dig3, dig4, dig5, dig6;
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
    dig3 = rp.pop();
    dig4 = rp.pop();
    dig5 = rp.pop();
    dig6 = rp.pop()

    if ((dig1 === dig6) && (dig2 === dig5) && (dig3 === dig4)){
        msg += `The number  ${dig1}${dig2}${dig3}${dig4}${dig5}${dig6} is mirrored. `;
    } else {
        msg += `The number  ${dig1}${dig2}${dig3}${dig4}${dig5}${dig6} is not mirrored. `;
    }

    console.log(msg);
    document.getElementById('display8').innerText = msg
}