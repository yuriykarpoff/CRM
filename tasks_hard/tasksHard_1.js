'use strict';

const income = +prompt('Введите Вашу заработную плату', '');
let taxCalc = 0;

switch (true) {
    case (income <= 15000):
        taxCalc += income * 0.13
        break;
    case (income < 50000):
        taxCalc += income * 0.2
        break;
    case (income >= 50000):
        taxCalc += income * 0.3
        break;
    default:
        break;
}

console.log('Сумма налога: ' +  taxCalc);