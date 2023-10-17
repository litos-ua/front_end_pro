'use strict'

alert('Welcome to calculator!');

let firstNumber, secondNumber, condNum1 = true, condNum2 = true, incorrectAct = true, goodBy = true;

let kindOfAction = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin; Cos');

switch (kindOfAction) {
    case 'Add':
    case 'Diff':
    case 'Mult':
    case 'Div':
        firstNumber = parseFloat(prompt('Enter the first number.'));
        condNum1 = !isNaN(firstNumber);
        condNum1 ? ((secondNumber = parseFloat(prompt('Enter the second number.'))), (condNum2 = !isNaN(secondNumber))) : null;
        break;
    case 'Sqrt':
    case 'Exp':
    case 'Sin':
    case 'Cos':
        firstNumber = parseFloat(prompt('Enter the number.'));
        condNum1 = !isNaN(firstNumber);
        break;
    default:
        kindOfAction = kindOfAction === null ? 'CancelAction' : 'WrongAction';
        incorrectAct = false;
}

(!condNum1 && incorrectAct) ? kindOfAction = 'WrongNum1': null;
(!condNum2 && incorrectAct) ? kindOfAction = 'WrongNum2': null;
(!condNum1 && !condNum2 && incorrectAct) ? kindOfAction = 'WrongTwoNum': null

switch (kindOfAction) {
    case 'Add':
        alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
        goodBy
        break
    case 'Diff':
        alert(`Difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
        break
    case 'Mult':
        alert(`Product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
        break
    case  'Div':
        secondNumber === 0 ? alert('Division by 0 is not possible!') :
            alert(`Division of ${firstNumber} by ${secondNumber} is ${(firstNumber / secondNumber).toFixed(2)}`);
        break
    case "Sqrt":
        firstNumber <= 0 ? alert('Extracting the square root of a number is not possible!') :
            alert(`Square root of a number ${firstNumber} is ${Math.sqrt(firstNumber).toFixed(2)}`);
        break
    case 'Exp':
        firstNumber <= 0 ? alert('Raising to a negative power is impossible!') :
            alert(`Exponent of a number ${firstNumber} is ${Math.exp(firstNumber).toFixed(2)}`);
        break
    case 'Sin':
        alert(`Sine of angle ${firstNumber} is ${Math.sin(firstNumber).toFixed(2)}`);
        break
    case  'Cos':
        alert(`Cosine of angle ${firstNumber} is ${Math.cos(firstNumber).toFixed(2)}`);
        break
    case 'WrongNum1':
        alert('You have entered an INCORRECT The FIRST NUMBER, the program will stop working! Good by, see you later.');
        goodBy = false
        break
    case 'WrongNum2':
        alert('You have entered an INCORRECT The SECOND NUMBER, the program will stop working! Good by, see you later.');
        goodBy = false
        break
    case 'CancelAction' :
        alert('You have CANCELLED ACTION, the program will stop working! Good by, see you later.');
        goodBy = false;
        break
    default: alert('You have entered an INCORRECT ACTION, the program will stop working! Good by, see you later.');
        goodBy = false;
}

goodBy ? alert('Good by, see you later.') : null;






