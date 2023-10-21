'use strict'

alert('Welcome to calculator!');

let firstNumber, secondNumber, condNum1 = true, condNum2 = true, incorrectAct = true, goodBy = true;

let kindOfAction = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin; Cos');
kindOfAction !== null ? kindOfAction = kindOfAction.toLowerCase() : null;

switch (kindOfAction) {
    case 'add':
    case 'diff':
    case 'mult':
    case 'div':
        firstNumber = parseFloat(prompt('Enter the first number.'));
        condNum1 = !isNaN(firstNumber);
        condNum1 ? ((secondNumber = parseFloat(prompt('Enter the second number.'))), (condNum2 = !isNaN(secondNumber))) : null;
        break;
    case 'sqrt':
    case 'exp':
    case 'sin':
    case 'cos':
        firstNumber = parseFloat(prompt('Enter the number.'));
        condNum1 = !isNaN(firstNumber);
        break;
    default:
        kindOfAction = kindOfAction === null ? 'cancelAction' : 'wrongAction';
        incorrectAct = false;
}

if (!condNum1 || !condNum2) {
    kindOfAction = 'wrongNum' + (condNum1 ? '2' : '1');
}

switch (kindOfAction) {
    case 'add':
        alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
        break
    case 'diff':
        alert(`Difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
        break
    case 'mult':
        alert(`Product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
        break
    case  'div':
        secondNumber === 0 ? alert('Division by 0 is not possible!') :
            alert(`Division of ${firstNumber} by ${secondNumber} is ${(firstNumber / secondNumber).toFixed(2)}`);
        break
    case "sqrt":
        firstNumber <= 0 ? alert('Extracting the square root of a number is not possible!') :
            alert(`Square root of a number ${firstNumber} is ${Math.sqrt(firstNumber).toFixed(2)}`);
        break
    case 'exp':
        firstNumber <= 0 ? alert('Raising to a negative power is impossible!') :
            alert(`Exponent of a number ${firstNumber} is ${Math.exp(firstNumber).toFixed(2)}`);
        break
    case 'sin':
        alert(`Sine of angle ${firstNumber} is ${Math.sin(firstNumber).toFixed(2)}`);
        break
    case  'cos':
        alert(`Cosine of angle ${firstNumber} is ${Math.cos(firstNumber).toFixed(2)}`);
        break
    case 'wrongNum1':
        alert('You have entered an INCORRECT The FIRST NUMBER, the program will stop working! Good by, see you later.');
        goodBy = false
        break
    case 'wrongNum2':
        alert('You have entered an INCORRECT The SECOND NUMBER, the program will stop working! Good by, see you later.');
        goodBy = false
        break
    case 'cancelAction' :
        alert('You have CANCELLED ACTION, the program will stop working! Good by, see you later.');
        goodBy = false;
        break
    default: alert('You have entered an INCORRECT ACTION, the program will stop working! Good by, see you later.');
        goodBy = false;
}

goodBy ? alert('Good by, see you later.') : null;






