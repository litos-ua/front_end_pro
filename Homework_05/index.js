'use strict'

alert('Welcome to calculator!');

let firstNumber, secondNumber, condNum1 = true, condNum2 = true, goodBy = false;

let kindOfAction = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin; Cos');

if (kindOfAction === 'Add' || kindOfAction === 'Diff' || kindOfAction === 'Mult' || kindOfAction === 'Div') {
    firstNumber = parseFloat(prompt('Enter the first number.'));
    condNum1 = !isNaN(firstNumber);

    if (condNum1) {
        secondNumber = parseFloat(prompt('Enter the second number.'));
        condNum2 = !isNaN(secondNumber);
    }
} else if (kindOfAction === 'Sqrt' || kindOfAction === 'Exp' || kindOfAction === 'Sin' || kindOfAction === 'Cos') {
            firstNumber = parseFloat(prompt('Enter the number.'));
            condNum1 = !isNaN(firstNumber);
}


if (!condNum1) {
     kindOfAction = 'WrongNum1';
} else if (!condNum2) {
     kindOfAction = 'WrongNum2';
} else if (!condNum1 && !condNum2) {
     kindOfAction = 'WrongTwoNum';
}


if (kindOfAction === 'Add') {
    alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
}  else if (kindOfAction === 'Diff') {
     alert(`Difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
}  else if (kindOfAction === 'Mult') {
     alert(`Product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
}  else if ((kindOfAction === 'Div') && secondNumber !== 0) {
    alert(`Division of ${firstNumber} and ${secondNumber} is ${(firstNumber / secondNumber).toFixed(2)}`);
}  else if ((kindOfAction === 'Div') && secondNumber === 0) {
    alert('Division by 0 is not possible!');
}  else if ((kindOfAction === 'Sqrt') && firstNumber >= 0) {
    alert(`Square root of a number ${firstNumber} is ${Math.sqrt(firstNumber).toFixed(2)}`);
}  else if ((kindOfAction === 'Sqrt') && firstNumber < 0) {
    alert('Extracting the square root of a number is not possible!');
}  else if ((kindOfAction === 'Exp') && firstNumber >= 0) {
    alert(`Exponent of a number ${firstNumber} is ${Math.exp(firstNumber).toFixed(2)}`);
}  else if ((kindOfAction === 'Exp') && firstNumber < 0) {
    alert('Raising to a negative power is impossible!');
}  else if (kindOfAction === 'Sin') {
     alert(`Sine of angle ${firstNumber} is ${Math.sin(firstNumber).toFixed(2)}`);
}  else if (kindOfAction === 'Cos') {
     alert(`Cosine of angle ${firstNumber} is ${Math.cos(firstNumber).toFixed(2)}`);
}  else if (kindOfAction === 'WrongNum1') {
     alert('You have entered the INCORRECT The FIRST NUMBER.');
     goodBy = true;
}  else if (kindOfAction === 'WrongNum2') {
     alert('You have entered the INCORRECT The SECOND NUMBER.');
     goodBy = true;
}  else {
     alert('You have entered the INCORRECT ACTION or CANCEL.');
     goodBy = true;
}


if (!goodBy) {
    alert('Good by, see you later.');
}  else {
    alert('The program will stop working! See you later.')
}
