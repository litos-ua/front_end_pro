let firstNumber, secondNumber;

firstNumber = Number(prompt("Enter the first number.",'0'));
secondNumber = Number(prompt("Enter the second number.",'1'));

alert(`Calculations has finished!\n
       sumCalc: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n
       diffCalc: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n
       multCalc: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n
       divCalc: ${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`);

console.log(`Calculations has finished!\n
       sumCalc: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n
       diffCalc: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n
       multCalc: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n
       divCalc: ${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`);

document.getElementById('display1').innerHTML =
    `Calculations has finished!\n<br>
    sumCalc: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}<br>
    diffCalc: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}<br>
    multCalc: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}<br>
    divCalc: ${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`;


