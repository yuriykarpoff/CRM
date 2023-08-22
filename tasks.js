'use strict';

// задание # 2

const rain = Math.round(Math.random());

if (rain === 1) {
    console.log('Возьмите зонт, будет дождь');
}
    else {
    console.log('Сегодня сухая погода, зонт не нужет');
}

// задание # 3

const totalPoints = 256;

const lessonRussianLang  = +prompt('Введите количество баллов по русскому языку', '');
const lessonMath = +prompt('Введите количество баллов по математике', '');
const lessonInfo  = +prompt('Введите количество баллов по информатике', '');

if (totalPoints <= lessonRussianLang + lessonMath + lessonInfo) {
    console.log('Поздравляем, Вы прошли на бюджет');
}
    else {
    console.log('К сожалению, Вы не прошли на бюджет');
}

// задание #4 

const banknotes = 100;

const withdrawMoney = +prompt('Введите сумму которую хотите снять', '');

if (withdrawMoney % banknotes === 0) {
    console.log('Сумма верна, выдаем деньги :)');
}
    else {
    console.log('Снятие невозможно, пожалуйста, введите сумму кратную 100');
}
