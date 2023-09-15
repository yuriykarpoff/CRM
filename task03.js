'use strict';

const generateArray3 = (lengthArray, n, m, parity) => {
  const array = [];

  while (array.length < lengthArray) {
    let range = Math.abs(Math.max(n, m) - (Math.min(n, m)));
    let min = Math.min(n, m);

    const number = (Math.round(Math.random() * range)) + min;
    if ((parity === undefined || parity === 'even' && !(number % 2)) || (parity === 'odd' && number % 2)
    ) {
      array.push(number);
    } 
  }
  
  return array;
}

console.log(generateArray3(19, 10, -10, 'even'));
console.log(generateArray3(19, -10, 10, 'odd'));
console.log(generateArray3(19, -10, 10));
console.log(generateArray3(19, 10, -10));