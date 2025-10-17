// * Вкладка Console в Chrome Devtools
// ? Показати приклади

// * Виведення даних: console.log, alert, promt - показати "Code run" і es6 snippets
console.log('Hello');
console.log('5');
console.log(5);
console.log('number:', 5);

alert('Hello');
alert(5);

const userFirstName = prompt('Ваше ім`я?');
console.log(userFirstName);
const isAdult = confirm('Вам є 18?');
console.log(isAdult);

// * Базові примітивні типи: number, string, boolean, null и undefined
const number = 10;
const string = 'Hello world';
const bool = true;
const someData = null;
const antherData = undefined;

// ? Як перевірити тип данних
console.log(typeof someData); // косяк js
// ! NAN
console.log(1 / undefined);
console.log(typeof (1 / antherData));
console.log(typeof NaN); // number
// ! function
csonsole.log(typeof function () {}); // такого типу данних не існує, але зручно при перевірці

// * Перемінні: оголошення з let і const, найменування
// * Основи синтаксису: вирази, інструкції та крапка з комою

// ? Багаторівневі коментарі
/**
  let userFirstName;
  console.log(userFirstName);
  userFirstName = 'Denis';
  console.log(userFirstName);
 */

/**
const userLastName = 'Hunter';
console.log(userLastName);
userLastName = 'Carson'; // помилка
console.log(userLastName);
 */

// ? Як працює, але робити не потрібно
const $ = 10;
const $num = 40;
const num$ = 20;
const _ = 10;
const _num = 100;
const num_ = 150;
const num10 = 10;
const first_name = 'Mango'; // Стиль паскаль! - bad
const firstName = 'Bob'; // camelCase - good

// ? Як не працює
const 10num = 10;
const first-name = "Mango";
! Заревервовані (служебні)
const let = "hello";
const const = 10;
const false = false;

// * Числа і арифметичні оператори
const num = 25;
const float = 50.42;
const pow = 10e3;
console.log(pow);
const bigNumber = 100000; // Для зручності можна записати так 1_000_000
console.log(1_000_000);
const negativeNumber = -10;

//? Математичні оператори
console.log(10 + 15);
console.log(10 - 15);
console.log(10 * 15);
console.log(10 / 15);

// ? Теж саме тільки через константи
const firstNumber = 5;
const secondNumber = 10;
console.log(firstNumber - secondNumber);
console.log(firstNumber + secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);

//? Конкатинація
console.log(5 + '5');
console.log(10 + '10' - 1000); // - після конкатинації верне число

// ? Особливість
console.log(10 / 0); // Infinity
// ? Як перевірити число на безкінечність
console.log(isFinite(Infinity)); // false
console.log(isFinite(25)); // true

// ? Як перевірити NaN
const weird = 10 / undefined;
console.log(isNaN(weird));
console.log(isNaN(10));

// ? Дробні числа
console.log(0.1 + 0.2); // Погано працює з дробними числами
console.log((0.1 + 0.2).toFixed(1)); // рішення, тільки потрібно перевести в рядок

// * Рядки, шаблонні рядки - показати "BackTicks"

/*
  Конкатенація рядків, шаблонні рядки
 */

const strA = 'Hello';
const strB = 'world!';

const result = strA + ' ' + strB;

console.log(result);

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/

const userFirstName = prompt('Ваше ім`я'); 
const userAge = prompt('Ваш вік');

const resultStr =
  'Hello' + ' ' + userFirstName + ', your age is' + ' ' + userAge;

console.log(resultStr);

//? Виконайте завдання вище, використовуючи шаблонні рядки
const userFirstName = prompt('Ваше ім`я');
const userAge = prompt('Ваш вік');

const resultStr = `Hello ${userFirstName}, your age is ${userAge}`;

console.log(resultStr);

// ? Вирази в інтерпаляції
const userName = 'Mango';
const age = 30;

function getAge() {
  return age;
}

console.log(`Hello my name ${userName} and my age ${getAge()}`);

// * Приведення типів (до рядків)
//! String
const number = 42;
const stringNumber = String(number);
console.log(stringNumber); // "42"

//! через конкатинацію
const number = 42;
const stringNumber = '' + number;
console.log(stringNumber); // "42"

//! toString
const number = 42;
const stringNumber = number.toString();
console.log(stringNumber); // "42"

// ! Через інтерпаляцію
const number = 42;
const stringNumber = `${number}`;
console.log(stringNumber); // "42"
