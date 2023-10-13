'use strict'

alert('Welcome to calculator!');

const kindOfAction = prompt("What action you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin; Cos");
const condActionArithm = kindOfAction === "Add" || kindOfAction === "Diff" || kindOfAction === "Mult" || kindOfAction === "Div";
const condActionAlg = kindOfAction === "Sqrt" || kindOfAction === "Exp" || kindOfAction === "Sin" || kindOfAction === "Cos";
let firstNumberStr,  firstNumber, secondNumberStr, secondNumber, condArifm;

if(condActionArithm){
    firstNumberStr = prompt("Enter the first number.");
    firstNumber = Number(firstNumberStr);
    secondNumberStr = prompt("Enter the second number.");
    secondNumber = Number(secondNumberStr);

    condArifm = (firstNumberStr !== null) && (secondNumberStr !== null) && (!isNaN(firstNumber)) && (!isNaN(secondNumber));
    if (condArifm){
       if(kindOfAction === "Add"){
           alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`)
       }
       if(kindOfAction === "Diff"){
           alert(`Difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`)
       }
       if(kindOfAction === "Mult"){
           alert(`Product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`)
       }
        if (kindOfAction === "Div") {
            if (secondNumber !== 0) {
                alert(`Division of ${firstNumber} by ${secondNumber} is ${firstNumber / secondNumber}`);
            } else {
                alert('Division by 0 is not possible. Good by, see you later.');
            }
        }

    } else {alert("You entered an INCORRECT NUMBER, the program will stop working! Good by, see you later.")}

} else {alert("You entered an INCORRECT ACTION, the program will stop working! Good by, see you later.")}

