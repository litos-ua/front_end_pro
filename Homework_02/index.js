let firstNumber, secondNumber, resultOut;

firstNumber = Number(prompt("Enter the first number.",'0'));
secondNumber = Number(prompt("Enter the second number.",'1'));
resultOut = `Calculations has finished!\n
       sumCalc: ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber};\n
       diffCalc: ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber};\n
       multCalc: ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber};\n
       divCalc: ${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`;

alert(`${resultOut}`);
console.log(`${resultOut}`);
document.getElementById('display1').innerText = `${resultOut}`;


