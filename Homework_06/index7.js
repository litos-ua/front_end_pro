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

    if ((dig1 === dig2) && (dig2 === dig3)){
        msg += `Аll digits in the number  ${dig1}${dig2}${dig3} are the same. `;
    } else {
        msg += `Not all digits in the number  ${dig1}${dig2}${dig3} are the same. `;
    }

    if ((dig1 === dig2) || (dig2 === dig3) || (dig1 === dig3)){
        msg += `There are identical digits among the number  ${dig1}${dig2}${dig3}. `;
    } else {
        msg += `There aren't identical digits among the number  ${dig1}${dig2}${dig3}. `;
    }
    console.log(msg);
    document.getElementById('display7').innerText = msg;
}