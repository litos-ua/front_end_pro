'use strict'

alert('Welcome to calculator!');

const kindOfAction = prompt("What action you want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin; Cos");
const condActionArithm = kindOfAction === "Add" || kindOfAction === "Diff" || kindOfAction === "Mult" || kindOfAction === "Div";
const condActionAlg = kindOfAction === "Sqrt" || kindOfAction === "Exp" || kindOfAction === "Sin" || kindOfAction === "Cos";
let firstNumberStr,  firstNumber, secondNumberStr, secondNumber, condNumArifm, condNumAlg;

if(condActionArithm) {

    firstNumberStr = prompt("Enter the first number.");
    firstNumber = Number(firstNumberStr);
    secondNumberStr = prompt("Enter the second number.");
    secondNumber = Number(secondNumberStr);

    condNumArifm = (firstNumberStr !== null) && (secondNumberStr !== null) && (!isNaN(firstNumber)) && (!isNaN(secondNumber)) && (firstNumberStr !== '') && (secondNumberStr !== '');
    if (condNumArifm) {
        if (kindOfAction === "Add") {
            alert(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`)
        }
        if (kindOfAction === "Diff") {
            alert(`Difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`)
        }
        if (kindOfAction === "Mult") {
            alert(`Product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`)
        }
        if (kindOfAction === "Div") {
            if (secondNumber !== 0) {
                alert(`Division of ${firstNumber} by ${secondNumber} is ${(firstNumber / secondNumber).toFixed(2)}`);
            } else {
                alert('Division by 0 is not possible. Good by, see you later.');
              }
        }
    }   else {alert("You entered an INCORRECT NUMBER, the program will stop working! Good by, see you later.")}
}  else if(condActionAlg) {
        firstNumberStr = prompt("Enter the number.");
        firstNumber = Number(firstNumberStr);
        condNumAlg = (firstNumberStr !== null) && (!isNaN(firstNumber)) && (firstNumberStr !== '');
        if (condNumAlg) {
            if (kindOfAction === "Sqrt") {
                if (firstNumber >= 0) {
                    alert(`Square root of a number ${firstNumber} is ${Math.sqrt(firstNumber).toFixed(2)}`);
                } else {
                    alert('Extracting the square root of a number is not possible. Good by, see you later.');
                }
            } else if (kindOfAction === "Exp") {
                    if (firstNumber >= 0) {
                        alert(`Exponent of a number ${firstNumber} is ${Math.exp(firstNumber).toFixed(2)}`);
                    } else {
                        alert('Raising to a negative power is impossible. Good by, see you later.');
                      }
                    } else if (kindOfAction === "Sin") {
                        alert(`Sine of angle ${firstNumber} is ${Math.sin(firstNumber).toFixed(2)}`);
                           } else if (kindOfAction === "Cos") {
                                alert(`Cosine of angle ${firstNumber} is ${Math.cos(firstNumber).toFixed(2)}`);
                             }
        }  else {
                 alert("You entered an INCORRECT NUMBER, the program will stop working! Good by, see you later.")
           }

        }   else {
                alert("You entered an INCORRECT ACTION, the program will stop working! Good by, see you later.")
}






