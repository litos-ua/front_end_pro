'use strict'

const array1 = [1, 2, 3, null, false,'string', [1, 2, 3]];
for (let i=0; i<array1.length; i++){
    let array2 = removeElement(array1, array1[i] );
    console.log(array2);
}
function removeElement(array, item) {
    return array.filter((element) => element !==null && item !== null ? (element).toString() !== item.toString(): element !== item);
}