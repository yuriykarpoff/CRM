'use strict';

const randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)

let userNumber = 0;

while ((userNumber !== null) && (+userNumber !== randomNumber)) {

    let userNumber = prompt('Угадай число от 1 до 100', '');

    switch (true) {
        case userNumber === null:
            alert('Игра окончена!');
            break;
            case Number.isNaN(+userNumber):
            case (+userNumber < 0):
            case (+userNumber > 100):
            alert('Введи число от 1 до 100!');
            break;
        case +userNumber > randomNumber:
            alert('Меньше!');
            break;    
        case +userNumber < randomNumber:
            alert('Больше!');
            break;
        default:
            alert('Правильно!');
            break;
    }
}

