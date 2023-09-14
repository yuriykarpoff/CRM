'use strict';

const randomNumber = Math.floor(Math.random() * 100);

let userNumber = 0;

while (userNumber !== null && +userNumber !== randomNumber) {
  userNumber = prompt('Угадай число от 1 до 100', '');

  switch (true) {
    case userNumber === null:
      alert('Игра окончена');
      break;
    case isNaN(userNumber):
      alert('Нужно ввести число');
      break;
    case +userNumber < 1:
      alert('Число должно быть больше 1!');
      break;
    case +userNumber > 100:
      alert('Число должно быть меньше 100!');
      break;
    case +userNumber > randomNumber:
      alert('Меньше!');
      break;
    case +userNumber < randomNumber:
      alert('Больше!');
      break;
    default:
      alert('Правильно!');
  }
}
