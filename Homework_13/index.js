'use strict'

const sum1 = sumCounter(0);
console.log(`sum1(3) = ${sum1((3))}`);
console.log(`sum1(5) = ${sum1((5))}`);
console.log(`sum1(20) = ${sum1((20))}`);

const sum2 = sumCounter(100);
console.log(`sum2(3) = ${sum2((3))}`);
console.log(`sum2(5) = ${sum2((5))}`);
console.log(`sum2(20) = ${sum2((20))}`);


function sumCounter(firstParameter) {
    let sumAccumulator = firstParameter;
    return function (sumAdd) {
        sumAccumulator += sumAdd;
        return sumAccumulator;
    };
}

