'use strict';

const generateArray2 = (lengthArray, n, m) => {
  const array = [];

  while (array.length < lengthArray) {
    let range = Math.abs(Math.max(n, m) - (Math.min(n, m)));
    let min = Math.min(n, m);

    const number = (Math.round(Math.random() * range)) + min;
      array.push(number);
  }
  
  return array;
};

console.log(generateArray2(99, -10, 10));
console.log(generateArray2(99, 10, -10));
