'use strict'

const inputKeyString = "qwertyuiopasdfghjklzxcvbnm1234567890";
const inputSecretString = "someSecret";

const res = createHash(inputKeyString,inputSecretString);
//console.log(`res = ${res}`)
const coddingResult = String.fromCodePoint(...res)
console.log(`coddingResult = ${coddingResult}`);

console.log(`coddingResult = ${String.fromCodePoint(...createHash("qwertyuiopasdfghjklzxcvbnm1234567890","someSecret"))}`);
console.log('\n');
console.log(`coddingResult = ${String.fromCodePoint(...createHash("qwertyuiopasdfghjklzxcvbnm1234567890","2someSecret!"))}`);
console.log(`coddingResult = ${String.fromCodePoint(...createHash("qwertyuiopasdfghjklzxcvbnm1234567890","2someSecret!"))}`);
console.log('\n')
console.log(`coddingResult = ${String.fromCodePoint(...createHash("It is a wonderfull day","someSecret"))}`);
console.log(`coddingResult = ${String.fromCodePoint(...createHash("It is a wonderfull day","someSecret"))}`);

function createHash (key, secret){
    const keyPoints = []; //Строка для кодирования
    let secretPoints = []; //Кодовое слово
    //Формируем массив символов строки
    for (let i = 0; i < key.length; i++) {
        keyPoints.push(key.charCodeAt(i));
    }
    //console.log(`keyPoints = ${keyPoints}`);
    //Формируем массив символов кодового слова
    for (let i = 0; i < secret.length; i++) {
        secretPoints.push(secret.charCodeAt(i));
    }
    //console.log(`secretPoints = ${secretPoints}`);
    //Вычитаем из кодов кодового слова 105
    secretPoints = secretPoints.map((num) => num - 80)
    //console.log(`newSecretPoints = ${secretPoints}`)
    const result = [];
    let secretIndex = 0;
    //Арифметически складываем массивы
    for (let i = 0; i < keyPoints.length; i++) {
        const sum = keyPoints[i] + secretPoints[secretIndex];
        // if (i===23) console.log(`keyPoints= ${keyPoints[i]} secretPoints = ${secretPoints[secretIndex]}`)
        if (sum >= 100)  result.push(sum+1);
        else result.push(sum-1);

        secretIndex = (secretIndex + 1) % secretPoints.length;
    }
    //console.log(`result = ${result}`)
    let secretSum = sumOfDigit(Math.abs(keyPoints[keyPoints.length-2]).toString());
    //console.log(`secretSum = ${secretSum}`)
    result.splice(2,0,secretSum+30)
    let utfCode = 85;
    for (let i = 1; i < secretSum; i++) {
        result.push(utfCode);
        utfCode += 2;
    }

    // const restoredString = String.fromCodePoint(...codePoints);
    // console.log(restoredString);
    return result;

    function sumOfDigit(element){
        let sumOfDigit = 0;

        for (let i = 0; i < element.length; i++) {
            sumOfDigit += parseInt(element[i]);
        }
        return sumOfDigit;
    }
}




