'use strict';

const generateArray3 = (lengthArray, n, m, str) => {
    let array = [];
    const rules = ['even', 'odd'].indexOf(str);
    // n < m && ([n, m] = [m, n]);

    for (let i = 0; i < lengthArray; i++) {
        const randomNumber = Math.ceil(Math.random() * (n - m + 1)) + m;
        if (rules === -1 || Math.abs(randomNumber % 2) === rules) array.push(randomNumber);
    }
    return array
}

console.log(generateArray3(10, -100, 100, 'even'))