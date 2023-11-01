'use strict'

const n = getUserNumber();

console.log(`${n}! = ${factorial(n)}`);

function factorial(n) {
    if(n<1){
        return 1
    } else {
        return  n*factorial(n-1);
    }
}

function getUserNumber(){
    let numberStr, number;
    do {
        numberStr = prompt(`Enter the integer number >= 0.`);
        number = parseFloat(numberStr);
        if ((isNaN(number) && numberStr !== null) ||  number < 0){
            alert('This is a bad digit. Please enter a correct digit');
        }
        if (numberStr === null) {
            number = null;
            break;
        }
    } while (isNaN(number) || number < 0);
    return number;
}

