'use strict';

const productName = prompt('Введите наименование товара', '');
const productCount = Number(prompt('Введите количество товара', '')); 
const productCategory = prompt('Введите категорию товара', '');
const productPrice = +prompt('Введите стоимость товара', '');
const productTotalPrice = productCount * productPrice;


console.log('Тип данных productName - ' + typeof productName);
console.log('Тип данных productCount - ' + typeof productCount);
console.log('Тип данных productCategory - ' + typeof productCategory);
console.log('Тип данных productPrice - ' + typeof productPrice);
console.log('Тип данных productTotalPrice - ' + typeof productTotalPrice);

console.log(`На складе ${productCount} единиц(ы) товара "${productName}" на сумму ${productPrice} ₽. Общая стоимость составляет - ${productTotalPrice} ₽`);