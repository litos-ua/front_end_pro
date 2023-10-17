
'use strict'

alert('Welcome to calculator!');

let action, action1, action2, a, goodBy = true;
let kindOfAction = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin; Cos');
(kindOfAction === 'Add' || kindOfAction === 'Diff' || kindOfAction === 'Mult' || kindOfAction === 'Div') ? action1 =1 : action1 = 0;
(kindOfAction === 'Sqrt' || kindOfAction === 'Exp' || kindOfAction === 'Sin' || kindOfAction === 'Cos') ? action2 =2 : action2 = 0;
let firstNumberStr,  firstNumber, secondNumberStr, secondNumber, condNum1 = true, incorrectAct = true;
kindOfAction === null ? kindOfAction = 'CancelAction': a = 'Nothing to do';
action = action1 + action2;
switch (action){
    case 1:
        firstNumberStr = prompt('Enter the first number.');
        firstNumber = parseFloat(firstNumberStr);
        ((firstNumberStr !== null) && (!isNaN(firstNumber)) && (firstNumberStr !== '')) ? condNum1 = true: condNum1 = false;
        secondNumberStr = prompt('Enter the second number.');
        secondNumber = parseFloat(secondNumberStr);
        ((secondNumberStr !== null) && (!isNaN(secondNumber)) && (secondNumberStr !== '' && condNum1)) ? condNum1 = true: condNum1 = false;
        break
    case 2:
        firstNumberStr = prompt('Enter the number.');
        firstNumber = parseFloat(firstNumberStr);
        ((firstNumberStr !== null) && (!isNaN(firstNumber)) && (firstNumberStr !== '')) ? condNum1 = true: condNum1 = false;
        break
    default:
        incorrectAct = false;
}

(!condNum1 && incorrectAct) ? kindOfAction = 'WrongNum': a = 'Nothing to do';


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
    case 'WrongNum':
        alert('You have entered an INCORRECT NUMBER, the program will stop working! Good by, see you later.');
        goodBy = false
        break
    case 'CancelAction' :
        alert('You have CANCELLED ACTION, the program will stop working! Good by, see you later.');
        goodBy = false;
        break
    default: alert('You have entered an INCORRECT ACTION, the program will stop working! Good by, see you later.');
        goodBy = false;
}

goodBy ? alert('Good by, see you later.') : a = 'Nothing to do';


// const actionMath = kindOfAction === 'Add' || kindOfAction === 'Diff' || kindOfAction === 'Mult' || kindOfAction === 'Div' ? 1 : 0;
// const actionAlg = kindOfAction === 'Sqrt' || kindOfAction === 'Exp' || kindOfAction === 'Sin' || kindOfAction === 'Cos' ? 2 : 0;
//
// switch (actionMath+actionAlg){
//     case 1:
//         firstNumber = parseFloat(prompt('Enter the first number.'));
//         (!isNaN(firstNumber))  ? condNum1 = true: condNum1 = false;
//         secondNumber = parseFloat(prompt('Enter the second number.'));
//         (!isNaN(secondNumber)) ? condNum2 = true: condNum2 = false;
//         break
//     case 2:
//         firstNumber = parseFloat(prompt('Enter the number.'));
//         (!isNaN(firstNumber)) ? condNum1 = true: condNum1 = false;
//         break
//     default:
//         kindOfAction === null ? kindOfAction = 'CancelAction': kindOfAction = 'WrongAction';
//         incorrectAct = false;
// }