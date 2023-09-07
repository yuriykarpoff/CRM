'use strict';

const generateArray2 = (lengthArray, n, m) => {
    let array = [];
    for (let i = 0; i < lengthArray; i++) {
        array.push(Math.ceil(Math.random() * (n - m + 1)) + m);
    }
    return array
}

console.log(generateArray2(10, -10, 10))