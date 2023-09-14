'use strict';

const generateArray3 = (lengthArray, n, m, parity) => {
    const array = [];

while (array.length < lengthArray) {
    const number = Math.floor(Math.random() * (n - m + 1)) + m;
    if ((parity === 'even' && !(number % 2)) || (parity === 'odd' && number % 2)) {
      array.push(number);
    }
  }
  return array;
}

console.log(generateArray3(10, -5, 25, 'even'));
console.log(generateArray3(10, -5, 25, 'odd'));