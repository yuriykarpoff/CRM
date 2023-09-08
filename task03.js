'use strict';

const generateArray3 = (lengthArray, n, m, str) => {
    let array = [];
    const parity = ['even', 'odd'].indexOf(str);
    n < m && ([n, m] = [m, n]);

    for (let i = 0; i < lengthArray ; i++) {
        const goTo = Math.ceil(Math.random() * (n - m + 1)) + m;
        if (parity === -1 || Math.abs(goTo % 2) === parity) array.push(goTo);
    }
    return array  
}

console.log(generateArray3(10, -100, 100, 'even'))