'use strict';

const income = +prompt('Введите Вашу заработную плату', '');
let taxCalc = 0;

if (income <= 15000) {
    taxCalc += income * 0.13;
}

if (income > 15000 && income <= 50000) {
    taxCalc += 15000 * 0.13 + (income - 15000) * 0.2
}

if (income > 50000) {
    taxCalc += 50000 * 0.13 + (income - 50000) * 0.3
}

console.log('Сумма налога: ' + taxCalc);