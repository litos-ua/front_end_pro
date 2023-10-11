'use strict'
{
    let myTdNumber = Number(prompt("Enter the  three-digit number."));
    let reminder, dig1, dig2, dig3;
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
    if(((dig1+dig2+dig3)%2) === 0){
        msg += `The sum of the digits of a number is even.  `;
    } else {
        msg += `The sum of the digits of a number is odd.  `;
    }

    if(((dig1+dig2+dig3)%5) === 0){
        msg += `The sum of the digits of a number is multiple of five.  `;
    } else {
        msg += `The sum of the digits of a number isn't multiple of five.  `;
    }
    if(dig1*dig2*dig3 > 100) {
        msg += `The multiplication of the digits of a number is greater than 100.`;
    } else { if (dig1*dig2*dig3 < 100){
                msg += `The multiplication of the digits of a number is less than 100.`;
            } else {
                msg += `The multiplication of the digits of a number is equals 100.`
                }
    }
        console.log(msg);
        document.getElementById('display6').innerText = msg;
}