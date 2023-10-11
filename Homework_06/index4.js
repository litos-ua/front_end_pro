'use strict'
const myNumber = Number(prompt("Enter the  number."));
if ((myNumber % 10) % 2 === 0) {
    console.log(`The end digit of number ${myNumber}  is the even`);
    document.getElementById('display4').innerText = `The end digit of number ${myNumber} is the even`;
}else {
    console.log(`The end digit of number ${myNumber} is the odd`);
    document.getElementById('display4').innerText = `The end digit of number ${myNumber} is the odd`;
}

