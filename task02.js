'use strict';

const arrayStart = [];

const generateArray = (array) => {
  const number = Math.round(Math.random() * 10);
  array.push(number);

  const arraySum = array.reduce((acc, item) => acc + item, 0);
  console.log(arraySum);

  if (arraySum < 50) {
    generateArray(array);
  }

  return array;
};

console.log(generateArray(arrayStart));
