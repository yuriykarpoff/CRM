'use strict';

// Первый способ

const customText = prompt('Введите текст, который нужно перевернуть', '');

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

console.log(reverseString(customText));

// Второй способ

const reverseString2 = (string) => {
    let newString = '';
    for (let i = string.length -1; i>=0; i--) {
        newString += string[i]; 
    }
    return newString;
}

console.log(reverseString2(customText));