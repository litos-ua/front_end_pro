'use strict'

const inputKeyString = "qwertyuiopasdfghjklzxcvbnm1234567890";
const inputSecretString = "someSecret";

const res = createHash(inputKeyString,inputSecretString);
const coddingResult = String.fromCodePoint(...res)
console.log('ключ "qwertyuiopasdfghjklzxcvbnm1234567890" секретна фраза "someSecret"');
console.log(`coddingResult = ${coddingResult}`);
console.log(`coddingResult = ${String.fromCodePoint(...createHash("qwertyuiopasdfghjklzxcvbnm1234567890","someSecret"))}`);
console.log('\n');
console.log('ключ той же "qwertyuiopasdfghjklzxcvbnm1234567890" секретна фраза інша\n');
console.log(`coddingResult = ${String.fromCodePoint(...createHash("qwertyuiopasdfghjklzxcvbnm1234567890","yRR24!!@86!@##$%It is a wonderfull day890"))}`);
console.log(`coddingResult = ${String.fromCodePoint(...createHash("qwertyuiopasdfghjklzxcvbnm1234567890","yRR24!!@86!@##$%It is a wonderfull day890"))}`);
console.log('\n');
console.log('ключ інший "Dhgf7655GHK&jk" секретна фраза як і в першому варіанті\n');
console.log(`coddingResult = ${String.fromCodePoint(...createHash("Dhgf7655GHK&jk","someSecret"))}`);
console.log(`coddingResult = ${String.fromCodePoint(...createHash("Dhgf7655GHK&jk","someSecret"))}`);
console.log('\n');
console.log('дві різні секретні фрази однакової довжини с однаковим ключем\n');
console.log(`coddingResult = ${String.fromCodePoint(...createHash("2someSecret!","slhdLJLJ6876LiLJ,rpy"))}`);
console.log(`coddingResult = ${String.fromCodePoint(...createHash("2someSecret!","2ldaLg5T6a717f5r$g#f"))}`)


function createHash (key, secret){

    const keyPoints = []; //Строка для кодирования
    const secretPoints = []; //Кодовое слово

    for (let i = 0; i < secret.length; i++) {
        secretPoints.push(secret.charCodeAt(i));
    }

    for (let i = 0; i < key.length; i++) {
        keyPoints.push(key.charCodeAt(i)-60);
    }

    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < secretPoints.length; i++) {
        const sum = secretPoints[i] + keyPoints[keyIndex];
        if (sum >= 100)  result.push(sum+1);
        else result.push(sum-1);

        keyIndex = (keyIndex + 1) % keyPoints.length;
    }

    let keySum = sumOfDigit(Math.abs(secretPoints[secretPoints.length-2]).toString());
    result.splice(2,0,keySum+30);
    result.splice(keySum+2,0,...keyPoints.map((num) => num + 30));
    let utfCode = 85;
    for (let i = 1; i < keySum; i++) {
        result.push(utfCode);
        utfCode += 2;
    }

    return result;

    function sumOfDigit(element){
        let sumOfDigit = 0;

        for (let i = 0; i < element.length; i++) {
            sumOfDigit += parseInt(element[i]);
        }
        return sumOfDigit;
    }
}




