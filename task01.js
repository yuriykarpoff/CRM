'use strict';

const randomNumber = Math.floor(Math.random() * 100);

const getGuessNumber = num => {
  const userNumber = prompt('Угадай число от 1 до 100', '');

  switch (true) {
    case userNumber === null:
      alert('Игра окончена');
      return null;
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
      return num;
  }
  return getGuessNumber(num);
};

getGuessNumber(randomNumber);

