'use strict'

const configObj = {
    'mathAction': {
        'add': '+',
        'dif': '-',
        'mult': '*',
        'div': '/',
        'mod': '%',
    },
    'mathObj': {
        '1': { X: 12, Y: 3, znak: '+' },
        '2': { X: 18, Y: 19, znak: '-' },
        '3': { X: 7, Y: 8, znak: '*' },
        '4': { X: 30, Y: 3, znak: '/' },
        '5': { X: 17, Y: 5, znak: '%' },
        '6': { X: 25, Y: 10, znak: 'khk'},
        '7': { X: 30, Y: 0, znak: '/' },
        '8': { X: 17, Y: 0, znak: '%' },
    },
};
const ArithmeticActionMixin = {
    sum(X,Y) {
        return X + Y;
    },
    diff(X,Y) {
        return X - Y;
    },
    mult(X,Y) {
        return X * Y;
    },
    div(X,Y) {
        if (Y === 0) {
            console.log('Division by zero is not allowed');
            return 'FFFF';
        }
        return X / Y;
    },
    mod(X,Y){
        if (Y === 0) {
            console.log('Modulo by zero is not allowed');
            return 'FFFF';
        }
        return X % Y;
    },
}

class SuperMath {

    check(mathObj) {
        const cond = confirm(`Do you want to perform an arithmetic operation ${mathObj.znak} on the operands ${mathObj.X} and ${mathObj.Y}`);
        if (!cond) mathObj = this.input();

        switch (mathObj.znak) {
            case '+': return this.sum(mathObj.X,mathObj.Y);
            case '-': return this.diff(mathObj.X,mathObj.Y);
            case '*': return this.mult(mathObj.X,mathObj.Y);
            case '/': return this.div(mathObj.X,mathObj.Y);
            case '%': return this.mod(mathObj.X,mathObj.Y);
            case null: return 'The program was canceled';
            default: return (`Invalid arithmetic operation: ${mathObj.znak}`);
        }

    }

    input(){

        let firstNumber, secondNumber, mathAction;
        const mathActionArray = Object.values(configObj.mathAction);
        firstNumber = getUserSingleNumber('first');
        if(firstNumber !== null) secondNumber = getUserSingleNumber('second');
        (firstNumber !== null && secondNumber !== null) ? mathAction = getActionType() : mathAction = null;

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
            } while (isNaN(number));
            return number;
        }

        function getActionType(){
            let typeOfAction, cond;
            do {
                typeOfAction = prompt(`What action do you want to do? ${[...mathActionArray].join(', ')}`);
                if (typeOfAction !== null) typeOfAction = typeOfAction.toLowerCase();

                cond = !mathActionArray.includes(typeOfAction) && typeOfAction !== null;
                if (cond) {
                    alert(`I don't recognize your operation. Please choose a correct operation like: ${[...mathActionArray].join(', ')}`);
                }
            } while (cond);
            return typeOfAction
        }

        return {X: firstNumber, Y: secondNumber, znak: mathAction};
    }
}

Object.assign(SuperMath.prototype, ArithmeticActionMixin);

const SuperMathMix = new SuperMath();

console.log(SuperMathMix.check(configObj.mathObj['3']));


//console.log(SuperMathMix.check(configObj.mathObj['1']));
// console.log(SuperMathMix.check(configObj.mathObj['2']));
// console.log(SuperMathMix.check(configObj.mathObj['4']));
// console.log(SuperMathMix.check(configObj.mathObj['5']));
// console.log(SuperMathMix.check(configObj.mathObj['6']));
// console.log(SuperMathMix.check(configObj.mathObj['7']));
// console.log(SuperMathMix.check(configObj.mathObj['8']));


