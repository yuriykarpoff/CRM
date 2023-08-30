'use strict';

const calculate = (totalAmount, numberProducts, promocode) => {
    let discount = 0;

    if (numberProducts > 10) {
        discount += totalAmount * 0.03;
    }
   
    if (totalAmount >= 30000) {
        discount += (totalAmount - 30000) * 0.15;
    }

    if (promocode === 'METHED') {
        discount += totalAmount * 0.1;
    }

    if (promocode === 'G3H2Z1' && (totalAmount - discount) > 2000) {
        discount += 500;
    }

    return totalAmount - discount;
}

console.log(calculate(10000, 15, 'METHED'));
console.log(calculate(150000, 6, 'G3H2Z1'));