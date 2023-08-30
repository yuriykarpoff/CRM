'use strict';

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n !== 1;
}

console.log(isPrime(5));
console.log(isPrime(15));
console.log(isPrime(97));
console.log(isPrime(1024));