'use strict'

alert('Welcome to calculator!');

let action, action1, action2, goodBy = true;
let kindOfAction = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin; Cos');
(kindOfAction === 'Add' || kindOfAction === 'Diff' || kindOfAction === 'Mult' || kindOfAction === 'Div') ? action1 =1 : action1 = 0;
(kindOfAction === 'Sqrt' || kindOfAction === 'Exp' || kindOfAction === 'Sin' || kindOfAction === 'Cos') ? action2 =2 : action2 = 0;
let firstNumberStr,  firstNumber, secondNumberStr, secondNumber, condNum1 = true, incorrectAct = true;
if (kindOfAction === null) {
    kindOfAction = 'CancelAction';
}
action = action1 + action2;

if (action === 1) {
    firstNumberStr = prompt('Enter the first number.');
    firstNumber = parseFloat(firstNumberStr);
    ((firstNumberStr !== null) && (!isNaN(firstNumber)) && (firstNumberStr !== '')) ? condNum1 = true: condNum1 = false;
    secondNumberStr = prompt('Enter the second number.');
    secondNumber = parseFloat(secondNumberStr);
    ((secondNumberStr !== null) && (!isNaN(secondNumber)) && (secondNumberStr !== '' && condNum1)) ? condNum1 = true: condNum1 = false;
} else if (action === 2) {
    firstNumberStr = prompt('Enter the number.');
    firstNumber = parseFloat(firstNumberStr);
    ((firstNumberStr !== null) && (!isNaN(firstNumber)) && (firstNumberStr !== '')) ? condNum1 = true: condNum1 = false;
    }  else {
        incorrectAct = false;
       }

if(!condNum1 && incorrectAct)
{
    kindOfAction = 'WrongNum';
}

if (kindOfAction === 'Add') {
    alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
} else if (kindOfAction === 'Diff') {
    alert(`Difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
} else if (kindOfAction === 'Mult') {
    alert(`Product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
} else if (kindOfAction === 'Div') {
    if (secondNumber === 0) {
        alert('Division by 0 is not possible!');
    } else {
        alert(`Division of ${firstNumber} by ${secondNumber} is ${(firstNumber / secondNumber).toFixed(2)}`);
    }
} else if (kindOfAction === 'Sqrt') {
    if (firstNumber <= 0) {
        alert('Extracting the square root of a number is not possible!');
    } else {
        alert(`Square root of a number ${firstNumber} is ${Math.sqrt(firstNumber).toFixed(2)}`);
    }
} else if (kindOfAction === 'Exp') {
    if (firstNumber <= 0) {
        alert('Raising to a negative power is impossible!');
    } else {
        alert(`Exponent of a number ${firstNumber} is ${Math.exp(firstNumber).toFixed(2)}`);
    }
} else if (kindOfAction === 'Sin') {
    alert(`Sine of angle ${firstNumber} is ${Math.sin(firstNumber).toFixed(2)}`);
} else if (kindOfAction === 'Cos') {
    alert(`Cosine of angle ${firstNumber} is ${Math.cos(firstNumber).toFixed(2)}`);
} else if (kindOfAction === 'WrongNum' || kindOfAction === 'CancelAction') {
    if (kindOfAction === 'WrongNum') {
        alert('You have entered an INCORRECT NUMBER, the program will stop working! Goodbye, see you later.');
    } else if (kindOfAction === 'CancelAction') {
        alert('You have CANCELLED ACTION, the program will stop working! Goodbye, see you later.');
    }
    goodBy = false;
} else {
    alert('You have entered an INCORRECT ACTION, the program will stop working! Goodbye, see you later.');
    goodBy = false;
}

if(goodBy){
    alert('Good by, see you later.');
}
