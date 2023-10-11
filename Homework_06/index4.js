'use strict'
const myNumber = Number(prompt("Enter the  number.", "95"));
const lastDig = myNumber % 10;
if ((lastDig) % 2 === 0) {
    console.log(`The end digit of number ${lastDig}  is the even`);
    document.getElementById('display4').innerText = `The end digit of number ${lastDig} is the even`;
}else {
    console.log(`The end digit of number ${lastDig} is the odd`);
    document.getElementById('display4').innerText = `The end digit of number ${lastDig} is the odd`;
}

