'use strict';

const generateArray = (lengthArray) => {
    let array = [];
    for (let i = 0; i < lengthArray; i++) {
        array.push(Math.ceil(Math.random() * 100))
    }
    return array
}

console.log(generateArray(10))