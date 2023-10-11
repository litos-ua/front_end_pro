'use strict'
{
    let myTdNumber = Number(prompt("Enter the  two-digit number."));
    let reminder, dig1, dig2;
    let n =10;
    let rp = [];

    do {
        reminder = myTdNumber % n;
        myTdNumber -= reminder;
        rp.push(reminder*10/n);
        n *= 10;
    } while (!(myTdNumber === 0));

    dig1 = rp.pop();
    dig2 = rp.pop();
    if (dig1 === dig2){
        console.log(`The numbers ${dig1} and ${dig2} are match`);
        document.getElementById('display5').innerText = `The numbers ${dig1} and ${dig2} are match`;
    }else { if (dig1 > dig2){
                console.log(`the first digit ${dig1} is greater than the second ${dig2} `);
                document.getElementById('display5').innerText = `the first digit ${dig1} is greater than the second ${dig2} `;
            }else {
                    console.log(`the second digit ${dig2} is greater than the first ${dig1} `);
                    document.getElementById('display5').innerText = `the second digit ${dig2} is greater than the first ${dig1} `;
                }
    }
}