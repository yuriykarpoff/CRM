'use strict';

const customText = prompt('Введите текст, который нужно отформатировать', '');

const formatString = (string) => {
    return string.trim().substring(0, 1).toUpperCase() + string.trim().substring(1).toLowerCase();
}

console.log(formatString(customText));