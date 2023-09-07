'use strict';

const randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)
const userNumber = +prompt('Введите число от 1 до 100', '');

const checkNumber = (number) => {

    if (randomNumber < number) {
        console.log('Меньше')
        let userNumber = +prompt('Введите число от 1 до 100', '');
    } else 
   
    if (randomNumber > number) {
        console.log('Больше')    
        let userNumber = +prompt('Введите число от 1 до 100', '');
    } else

    if (randomNumber === number) {
        console.log('Правильно')    
    }

}

console.log(checkNumber(userNumber));

