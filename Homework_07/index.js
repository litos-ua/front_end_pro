'use strict'

alert('Welcome to calculator!');

let firstNumber, secondNumber, firstNumberStr, secondNumberStr, kindOfAction, goodBy, nextAction;
const actionsAr = 'add,diff,mult,div';
const actionsAlg = 'sqrt,exp,sin,cos';

do {
    goodBy = false;
    nextAction = true;
    do {
        kindOfAction = prompt('What action do you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin, Cos');
        kindOfAction !== null ? kindOfAction = kindOfAction.toLowerCase() : null;
        if ((!actionsAr.includes(kindOfAction) && !actionsAlg.includes(kindOfAction) && kindOfAction !== null) || (kindOfAction === "")) {
            alert("I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, Exp, Sin, or Cos");
        } else if (kindOfAction === null) {
            kindOfAction = 'cancelAction';
            break;
        }
    } while ((!actionsAr.includes(kindOfAction) && !actionsAlg.includes(kindOfAction) && kindOfAction !== null) || kindOfAction === "");

    if (actionsAr.includes(kindOfAction)) {
        do {
            firstNumberStr = prompt('Enter the first number.');
            firstNumber = parseFloat(firstNumberStr);
            if (isNaN(firstNumber) && firstNumberStr !== null) {
                alert('This is a bad digit. Please enter a correct digit');
            } else if (firstNumberStr === null) {
                kindOfAction = 'cancelAction';
                break;
            }
        } while (isNaN(firstNumber) && (firstNumberStr !== null));

        if (firstNumberStr) {
            do {
                secondNumberStr = prompt('Enter the second number.');
                secondNumber = parseFloat(secondNumberStr);
                if (isNaN(secondNumber) && secondNumberStr !== null) {
                    alert('This is a bad digit. Please enter a correct digit');
                } else if (secondNumberStr === null) {
                    kindOfAction = 'cancelAction';
                    break;
                }
            } while (isNaN(secondNumber) && secondNumberStr !== null);
        }
    } else if (actionsAlg.includes(kindOfAction)) {
        do {
            firstNumberStr = prompt('Enter the number.');
            firstNumber = parseFloat(firstNumberStr);
            if (isNaN(firstNumber) && firstNumberStr !== null) {
                alert('This is a bad digit. Please enter a correct digit');
            } else if (firstNumberStr === null) {
                kindOfAction = 'cancelAction';
                break;
            }
        } while (isNaN(firstNumber) && firstNumberStr !== null);
    }

    switch (kindOfAction) {
        case 'add':
            alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
            break;
        case 'diff':
            alert(`Difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
            break;
        case 'mult':
            alert(`Product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
            break;
        case 'div':
            if (secondNumber === 0) {
                alert('Division by 0 is not possible!');
            } else {
                alert(`Division of ${firstNumber} by ${secondNumber} is ${(firstNumber / secondNumber).toFixed(2)}`);
            }
            break;
        case 'sqrt':
            if (firstNumber < 0) {
                alert('Extracting the square root of the negative number is not possible!');
            } else {
                alert(`Square root of a number ${firstNumber} is ${Math.sqrt(firstNumber).toFixed(2)}`);
            }
            break;
        case 'exp':
            if (firstNumber < 0) {
                alert('Raising to a negative power is impossible!');
            } else {
                alert(`Exponent of a number ${firstNumber} is ${Math.exp(firstNumber).toFixed(2)}`);
            }
            break;
        case 'sin':
            alert(`Sine of angle ${firstNumber} is ${Math.sin(firstNumber).toFixed(2)}`);
            break;
        case 'cos':
            alert(`Cosine of angle ${firstNumber} is ${Math.cos(firstNumber).toFixed(2)}`);
            break;
        default:
            goodBy = true;
    }

    if (!goodBy) nextAction = confirm('Do you want to continue working with me?');
}   while (!goodBy && nextAction )

alert('Goodbye, see you later.');





