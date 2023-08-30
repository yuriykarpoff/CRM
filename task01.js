'use strict';

const exchangeCurrency = (currencyRuble) => {
    const currencyDollar = 73;
    const currencyEuro = 1.2 * currencyDollar;

    return currencyRuble * currencyEuro;
}

console.log('Стоимость покупки 1 евро: ' +  exchangeCurrency(1) + ' рублей');
console.log('Стоимость покупки 10 евро: ' +  exchangeCurrency(10) + ' рублей');
console.log('Стоимость покупки 100 евро: ' +  exchangeCurrency(100) + ' рублей');