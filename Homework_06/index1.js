'use strict'
const firstNumber = Number(prompt("Enter the first number.",'10'));
const secondNumber = Number(prompt("Enter the second number.",'10'));

if (firstNumber>secondNumber){
    console.log(`first number (${firstNumber}) > second number (${secondNumber})`);
    document.getElementById('display1').innerText = `first number (${firstNumber}) > second number (${secondNumber})`;
}else {
    if(firstNumber===secondNumber){
        console.log(`first number (${firstNumber}) = second number (${secondNumber})`);
        document.getElementById('display1').innerText = `first number (${firstNumber}) = second number (${secondNumber})`;
    }else {
        console.log(`second number (${secondNumber}) > first number (${firstNumber})`)
        document.getElementById('display1').innerText = `second number (${secondNumber}) > first number (${firstNumber})`
    }
}