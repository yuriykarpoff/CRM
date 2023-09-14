'use strict';

const generateArray2 = (lengthArray, n, m, parity) => {
  const array = [];

  while (array.length < lengthArray) {
    let range = Math.abs(Math.max(m, n) - (Math.min(m, n)));
    let min = Math.min(m, n);

    const number = (Math.round(Math.random() * range)) + min;
      array.push(number);
  }
  
  return array;
};

console.log(generateArray2(19, -10, 10));
console.log(generateArray2(19, 10, -10));
