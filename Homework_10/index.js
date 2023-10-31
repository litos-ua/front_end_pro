'use strict'

const array = [1, 2, 3, 4, 5,'string', [1, 2, 3]];

console.log(removeElement(array, 5));


function removeElement(array, item){
    return array.filter((element) => element.toString() !== item.toString());
}