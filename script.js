'use strict';

const productName = prompt('Введите наименование товара', '');
const productCount = +prompt('Введите количество товара', ''); 
const productCategory = prompt('Введите категорию товара', '');
const productPrice = +prompt('Введите стоимость товара', '');
const productTotalPrice = productCount * productPrice;

if (!parseInt(productCount) || !parseInt(productPrice)) {
    console.log('Вы ввели некорректные данные')
} else {
        console.log(`На складе ${productCount} единиц(ы) товара "${productName}" на сумму ${productPrice} ₽. Общая стоимость составляет - ${productTotalPrice} ₽`);
    }
