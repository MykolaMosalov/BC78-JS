// *  Оператори порівняння (<, >, <=, >=)
/*
  Результатом порівняння буде бульове значення.
  Рядки порівнюються по unicode.
  При порівнянні рядків рядки порівнюються посимвольно.
  При порівнянні різних типів, операнди приводяться до числа.
  null не дорівнює нічому окрім себе, як і undefined.
 */

//? Оператор менше (<)
console.log(2 < 12);
console.log(12 < 2);
console.log('a' < 'b');
console.log('b' < 'a');
console.log('A' < 'a');
console.log('apple' < 'ananana');
console.log('bananana' < 'apple');
console.log(true < false);
console.log(false < true);

//? Оператор більше (>)
console.log(10 > 20);
console.log(20 > 10);

//? Оператор менше або дорівнює (<=)
console.log(4 <= 6);
console.log(5 <= 5);
console.log(5 <= 4);

//? Оператор більше або дорівнює (>=)
console.log(5 >= 3);
console.log(5 >= 5);
console.log(3 >= 4);

// * Оператори рівності (==, ===, !=, !==)

//? Рівність (==)
console.log('123' == 123);
console.log(true == '1');
console.log(4 == 5);

//? Строга рівність (===)
console.log('123' === 123);
console.log(null === null);
console.log(null === undefined);
console.log(2 + 2 === 4);

//? Нерівність (!=)
console.log('4' != 4);

//? Строга нерівність (!==)
console.log('4' !== 4);

// * Приведення типів до числа: +, Number
/*
  true --> 1
  false --> 0
  '' --> 0
  null --> 0
  undefined --> 0
 */

console.log(+false);
console.log(Number(true));

// * Арифметичні функції (parseInt, parseFloat, клас Number і Math)
console.log(Number.MAX_SAFE_INTEGER); // Максимальне безпечне число у js
console.log(Number.POSITIVE_INFINITY);
console.log(1 / 0);

// ? Де і як використовувати
console.log(Number('24px'));
console.log(Number.parseFloat('24px'));

console.log(Number('24.10'));
console.log(Number.parseFloat('24.10'));
console.log(Number.parseFloat('24,10')); // Не працює з комою
console.log(Number('24,10'));
console.log(Number.parseInt('24.10'));

// ? Math
console.log(Math.pow(2, 53) - 1); // Як отримати Максимальне безпечне число Math
console.log(Math.PI); // Число PI

console.log(Math.sqrt(25));
console.log(Math.pow(2, 5));
console.log(Math.abs(-58));
console.log(Math.min(1, 58, 65, 85));
console.log(Math.max(25, 78, 95, 20));
console.log(Math.floor(4.6));
console.log(Math.ceil(2.2));
console.log(Math.round(4.6));
console.log(Math.random());

// * Функціі (аргументи параметри, та повернення значення)

/**
 * Function declaration
 * funstion fn(){}
 *
 * Function expression
 * const fn1 = function(){}
 */

// ? Напиши функцію яка буде генерувати рандомне число від 1 - 20

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomNumber(1, 20);
console.log(randomNumber);

// ? Напиши функцію, яка буде виводити найменьше число

function showMinNumber(a, b, c, d, e) {
  return Math.min(a, b, c, d, e);
}

const minNumber = showMinNumber(10, 20, 45, 85, 6);
console.log(minNumber);

// Оголоси дві змінні, які зберігають назву та ціну товару: productName і price. Присвоїти змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 10000.

const productName = 'MacBook Pro 13″';
const price = 10000;

// Напиши функцію, яка буде виводити повідомлення - 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'.

function showMessage(product, price) {
  return `Обрано «${product}», ціна за штуку ${price} кредитів`;
}

const message = showMessage(productName, price);
console.log(message);

// Напиши функцію, яка буде перевизначати обраному товару, нову ціну. Функція повинна повертати повідомлення - 'Ціна змінена «MacBook Pro 13», нова ціна за штуку «new price» кредитів'.

function changePrice(product, newPrice) {
  return `Ціна змінена ${product}, нова ціна за штуку ${newPrice} кредитів`;
}

const newPrice = changePrice(productName, 20000);
console.log(newPrice);

// ? Напиши функцію, яка буде перевіряти пароль у користувача. Запроси пароль у користувача через promt

const password = prompt('Enter your password');

function chackPassword(value) {
  const userPassword = 'admin';

  return value.toLocaleLowerCase() === userPassword;
}

const isChacked = chackPassword(password);
console.log(isChacked);

// ? Напишіть функцію яка приймає наступні параменти userName з ім’ям користувача і payment з сумою до оплати. Функція повинна допомогою шаблонного рядка вивести через alert повідомлення: «Дякуємо, Олександро! До сплати 300 гривень».

function showUserMessage(userName, payment) {
  const message = `Дякуємо, ${userName}! До сплати ${payment} гривень`;
  return message;
}

console.log(showUserMessage('Mango', 1000));
console.log(showUserMessage('Stanislav', 3000));
console.log(showUserMessage('Andriy', 5000));
