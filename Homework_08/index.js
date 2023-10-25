'use strict'

alert('Welcome to calculator!');

let firstNumber, secondNumber, firstNumberStr, secondNumberStr, kindOfAction,
    nextAction, cancelAction, cond, mathSymbol, result='', errorMes='';
const arActions = ['add', 'diff', 'mult', 'div',];
const algActions = ['sqrt', 'exp', 'sin', 'cos',];
const serviceAction = ['h',]
const logArray = [];

do {
    cancelAction = false;
    do {
        kindOfAction = prompt('What action do you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin, Cos, History');
        if (kindOfAction !== null) kindOfAction = kindOfAction.toLowerCase();
            else {cancelAction = true;
                break;}
        cond = !arActions.includes(kindOfAction) && !algActions.includes(kindOfAction) &&
               !serviceAction.includes(kindOfAction) && kindOfAction !== null;
        if (cond) {
            alert("I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, Exp, Sin, or Cos");
        }
    } while (cond);

    if (arActions.includes(kindOfAction)) {
        do {
            firstNumberStr = prompt('Enter the first number.');
            firstNumber = parseFloat(firstNumberStr);
            if (isNaN(firstNumber) && firstNumberStr !== null) {
                alert('This is a bad digit. Please enter a correct digit');
            }
            if (firstNumberStr === null) {
                cancelAction = true;
                break;
            }
        } while (isNaN(firstNumber) && (firstNumberStr !== null));

        if (firstNumberStr) {
            do {
                secondNumberStr = prompt('Enter the second number.');
                secondNumber = parseFloat(secondNumberStr);
                if (isNaN(secondNumber) && secondNumberStr !== null) {
                    alert('This is a bad digit. Please enter a correct digit');
                }
                if (secondNumberStr === null) {
                    cancelAction = true;
                    break;
                }
            } while (isNaN(secondNumber) && secondNumberStr !== null);
        }
    } else if (algActions.includes(kindOfAction)) {
        do {
            firstNumberStr = prompt('Enter the number.');
            firstNumber = parseFloat(firstNumberStr);
            if (isNaN(firstNumber) && firstNumberStr !== null) {
                alert('This is a bad digit. Please enter a correct digit');
            }
            if (firstNumberStr === null) {
                cancelAction = true;
                break;
            }
        } while (isNaN(firstNumber) && firstNumberStr !== null);
    }

    if (cancelAction === false) {
        switch (kindOfAction) {
            case 'add':
                alert(`Sum of ${firstNumber} and ${secondNumber} is ${result = (firstNumber + secondNumber).toFixed(2)}`);
                mathSymbol = ' + ';
                break;
            case 'diff':
                alert(`Difference of ${firstNumber} and ${secondNumber} is ${result = (firstNumber - secondNumber).toFixed(2)}`);
                mathSymbol = ' - ';
                break;
            case 'mult':
                alert(`Product of ${firstNumber} and ${secondNumber} is ${result = (firstNumber * secondNumber).toFixed(2)}`);
                mathSymbol = ' * ';
                break;
            case 'div':
                secondNumber === 0 ? (errorMes = 'Division by 0 is not possible!\n', alert(errorMes)):
                alert(`Division of ${firstNumber} by ${secondNumber} is ${result = (firstNumber / secondNumber).toFixed(2)}`);
                mathSymbol = ' / ';
                break;
            case 'sqrt':
                firstNumber < 0 ? (errorMes = 'Extracting the square root of a number is not possible!\n', alert(errorMes)) :
                    alert(`Square root of a number ${firstNumber} is ${result = Math.sqrt(firstNumber).toFixed(2)}`);
                break;
            case 'exp':
                firstNumber < 0 ? (errorMes = 'Raising to a negative power is impossible!\n', alert(errorMes)) :
                    alert(`Exponent of a number ${firstNumber} is ${result = Math.exp(firstNumber).toFixed(2)}`);
                break;
            case 'sin':
                alert(`Sine of angle ${firstNumber} is ${result = Math.sin(firstNumber).toFixed(2)}`);
                break;
            case 'cos':
                alert(`Cosine of angle ${firstNumber} is ${result = Math.cos(firstNumber).toFixed(2)}`);
                break;
            case 'h':
                if (!logArray.length) {
                    alert('You haven\'t done any operations yet!');
                } else alert(logArray);
        }
        nextAction = confirm('Do you want to continue working with me?');
    }


    if ((firstNumber || firstNumber === 0) && (secondNumber || secondNumber === 0) && result)
        logArray.push(`${kindOfAction} :  ${firstNumber}  ${mathSymbol} ${secondNumber} = ${result }\n`);
    if ((firstNumber || firstNumber === 0) && !secondNumber && secondNumber !== 0  && result)
        logArray.push(`${kindOfAction} (${firstNumber}) = ${result } \n`);
    if (errorMes) logArray.push(errorMes);
    firstNumber = secondNumber = errorMes = result = '';

}   while (cancelAction === false && nextAction )

alert('Goodbye, see you later.');





