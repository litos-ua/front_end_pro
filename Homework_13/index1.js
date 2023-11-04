const sumDouble = sumCounterDouble(0,100);
console.log(`sumDouble(3,103) = ${sumDouble(3,103)}`);
console.log(`sumDouble(5,105) = ${sumDouble(5,105)}`);
console.log(`sumDouble(20,120) = ${sumDouble(20,120)}`);

function sumCounterDouble(firstParameter, secondParameter) {
    let sumAccumulator1 = firstParameter;
    let sumAccumulator2 = secondParameter
    return function (sumAdd1,sumAdd2) {
        console.log(`sumAdd1 = ${sumAdd1}`);
        console.log(`sumAdd2 = ${sumAdd2}`);
        sumAccumulator1 += sumAdd1;
        sumAccumulator2 += sumAdd2;
        return [sumAccumulator1,sumAccumulator2];
    };
}