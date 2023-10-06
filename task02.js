'use strict';

const arrayStart = [];

const generateArray = (array) => 
  (array.reduce((acc, item) => acc + item, 0) >= 50 ? array : generateArray([...array, Math.round(Math.random() * 10)]));

console.log(generateArray(arrayStart));