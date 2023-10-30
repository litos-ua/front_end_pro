'use strict'

alert('Welcome to calculator!');

let firstNumber, secondNumber, kindOfAction, nextAction, cancelAction, calcRes='';
const arActions = ['add', 'diff', 'mult', 'div',];
const algActions = ['sqrt', 'exp', 'sin', 'cos',];
const serviceAction = ['history',], logArray = [];

do {
    kindOfAction = getActionType();
    kindOfAction === null ? cancelAction =true : cancelAction = false;

    const number = getUserNumber(kindOfAction)
    firstNumber = number[0];
    secondNumber = number[1];
    if (firstNumber === null || secondNumber === null) cancelAction = true

    if (cancelAction === false) {
        if (arActions.includes(kindOfAction)){
            showActionRes(calcRes = arithmCalc(kindOfAction, firstNumber, secondNumber), firstNumber, secondNumber);
        } else if (algActions.includes(kindOfAction)){
            showActionRes(calcRes = mathCalc(kindOfAction, firstNumber), firstNumber);
        } else {
            showHistory()
        }
        nextAction = confirm('Do you want to continue working with me?');
    }

    if (firstNumber || firstNumber === 0) {
        if (secondNumber || secondNumber === 0) {
            logArray.push(`${kindOfAction} :  ${firstNumber} and ${secondNumber} = ${calcRes }`);
        } else {
            logArray.push(`${kindOfAction} (${firstNumber}) = ${calcRes }`);
        }
    }

    firstNumber = secondNumber = calcRes = '';

}   while (cancelAction === false && nextAction )

alert('Goodbye, see you later.');


function getActionType(){
    let typeOfAction, cond;
    do {
        typeOfAction = prompt(`What action do you want to do? ${[...arActions, ...algActions, logArray.length?'History':''].join(', ')}`);
        if (typeOfAction !== null) typeOfAction = typeOfAction.toLowerCase();

        cond = !arActions.includes(typeOfAction) && !algActions.includes(typeOfAction) &&
            !serviceAction.includes(typeOfAction) && typeOfAction !== null;
        if (cond) {
            alert(`I don't recognize your operation. Please choose a correct operation like: ${[...arActions, ...algActions, logArray.length?'History':''].join(', ')}`);
        }
    } while (cond);
    return typeOfAction
}

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
        Math.sqrt, Math.exp, Math.sin, Math.cos,
    ]
    const actionIndex = ['sqrt','exp', 'sin', 'cos'].indexOf(kindOfAction);
    let tmp = mathFunctions[actionIndex](number).toFixed(2)
    return (kindOfAction === 'sqrt' && number < 0) ? [null, 'Extracting the square root of a number is not possible!'] :
        [mathFunctions[actionIndex](number).toFixed(2), ''];
}

function showActionRes(calcRes, firstNumber, secondNumber =''){
    const a = 1;
    if(secondNumber !== ''){
        calcRes[1] ? (alert(calcRes[1])) : (alert(`${kindOfAction} of ${firstNumber} and ${secondNumber} is ${calcRes[0]}`))
    } else calcRes[1] ? (alert(calcRes[1])) : (alert(`${kindOfAction} of ${firstNumber} is ${calcRes[0]}`))
}

function showHistory() {
    if (!logArray.length) {
        alert('You haven\'t done any operations yet!');
    } else {
        const historyArr = logArray.map((value, index) => `${index+1}. ${value}`);
        alert(`Your operation history:\n${historyArr.join('\n')}`);
    }
}


