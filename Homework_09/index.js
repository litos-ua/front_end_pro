'use strict'

alert('Welcome to calculator!');

let firstNumber, secondNumber, kindOfAction, nextAction, cancelAction, mathSymbol, cond, result='', errorMes='';
const arActions = ['add', 'diff', 'mult', 'div',];
const algActions = ['sqrt', 'exp', 'sin', 'cos',];
const serviceAction = ['history',]
const logArray = [];

do {
    cancelAction = false;
    do {
        kindOfAction = prompt(`What action do you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin, Cos${logArray.length?', History':''}`);
        if (kindOfAction !== null) kindOfAction = kindOfAction.toLowerCase();
        else {
            cancelAction = true;
            break;
        }
        cond = !arActions.includes(kindOfAction) && !algActions.includes(kindOfAction) &&
            !serviceAction.includes(kindOfAction) && kindOfAction !== null;
        if (cond) {
            alert("I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, Exp, Sin, Cos or History");
        }
    } while (cond);


    const Number = getUserNumber(kindOfAction)
    firstNumber = Number[0];
    secondNumber = Number[1];
    if (firstNumber === null || secondNumber === null) cancelAction = true

    if (cancelAction === false) {
        let calcRes;
        if (arActions.includes(kindOfAction)){
            calcRes = arithmCalc(kindOfAction, firstNumber, secondNumber);
            calcRes[1] ? (result = calcRes[1], alert(calcRes[1])) :
                (result = calcRes[0], alert(`${kindOfAction} of ${firstNumber} and ${secondNumber} is ${calcRes[0]}`))
        } else if (algActions.includes(kindOfAction)){
            calcRes = mathCalc(kindOfAction, firstNumber);
            calcRes[1] ? (result = calcRes[1], alert(calcRes[1])) :
                (result = calcRes[0], alert(`${kindOfAction} of ${firstNumber} is ${calcRes[0]}`));
        } else {
            if (!logArray.length) {
                alert('You haven\'t done any operations yet!');
            } else {
                const historyArr = logArray.map((value, index) => `${index+1}. ${value}`);
                alert(`Your operation history:\n${historyArr.join('\n')}`);
            }
        }
        nextAction = confirm('Do you want to continue working with me?');
    }

    if (errorMes) {
        logArray.push(`${kindOfAction} : ${errorMes}`);
    } else if (firstNumber || firstNumber === 0) {
        if (secondNumber || secondNumber === 0) {
            logArray.push(`${kindOfAction} :  ${firstNumber} and ${secondNumber} = ${result }`);
        } else {
            logArray.push(`${kindOfAction} (${firstNumber}) = ${result }`);
        }
    }

    firstNumber = secondNumber = errorMes = result = '';

}   while (cancelAction === false && nextAction )

alert('Goodbye, see you later.');

function getUserNumber(kindOfAction){
    let fNumber, sNumber
    if (arActions.includes(kindOfAction) || algActions.includes(kindOfAction)) {
        const first = getUserSingleNumber('first');
        first === null ? fNumber = null : fNumber = first;
    }
    if (arActions.includes(kindOfAction) && !isNaN(fNumber) && fNumber !== null) {
        const second = getUserSingleNumber('second');
        second === null ? sNumber = null : sNumber = second;
    }
    return (sNumber || sNumber === null || sNumber === 0) ? [fNumber,sNumber] : [fNumber,''];
    function getUserSingleNumber(str){
        let numberStr, number;
        do {
            numberStr = prompt(`Enter the ${str} number.`);
            number = parseFloat(numberStr);
            if (isNaN(number) && numberStr !== null) {
                alert('This is a bad digit. Please enter a correct digit');
            }
            if (numberStr === null) {
                number = null;
                break;
            }
        } while (isNaN(number) && (numberStr !== null));
        return number;
    }
}


function arithmCalc (kindOfAction, number1, number2) {
    switch (kindOfAction) {
        case 'add':
            return [(number1 + number2).toFixed(2),''];
        case 'diff':
            return [(number1 - number2).toFixed(2),''];
        case 'mult':
            return [(number1 * number2).toFixed(2),''];
        case 'div':
            return number2 === 0 ? [null, 'Division by 0 is not possible!'] :
                [(number1 / number2).toFixed(2),''];
    }
}


function mathCalc(kindOfAction, number){
    const mathFunctions = [
        Math.sqrt,
        Math.exp,
        Math.sin,
        Math.cos,
    ]
    const actionIndex = ['sqrt','exp', 'sin', 'cos'].indexOf(kindOfAction);
    let tmp = mathFunctions[actionIndex](number).toFixed(2)
    return (kindOfAction === 'sqrt' && number < 0) ? [null, 'Extracting the square root of a number is not possible!'] :
        [mathFunctions[actionIndex](number).toFixed(2), ''];
}




