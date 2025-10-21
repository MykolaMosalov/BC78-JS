//* Розгалуження: if, if...else, else...if
//TODO:============task-1=========================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "abcde";

function checkSymbol(str) {
  return str.startsWith("a") ? "так" : "ні";
}
// console.log(checkSymbol(str));
// console.log(checkSymbol("bcde"));

//TODO:============task-2=========================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// String.toLowerCase();

// * Методи рядків: slice, toLowerCase, includes,startsWith,indexOf,trim

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// const userName = prompt("Введите имя");

function calcSymbol(str) {
  return str.length;
}

// alert(calcSymbol(userName));

//? Попросіть користувача ввести email і переведіть у нижній регістр.

// const eMale = prompt("Введите email");

function loLowerEmail(str) {
  return str.toLowerCase();
}

// alert(loLowerEmail(eMale));

//? Попросіть користувача ввести email і переведіть у верхній регістр
// const eMale = prompt("Введите email");

function loUpperEmail(str) {
  return str.toUpperCase();
}

// alert(loUpperEmail(eMale));

// ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'. Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?

const langs = "HTML, CSS, PHP, React, Vue, Node.js, C, C++";

function langIncl(str) {
  return str.includes("JavaScript") || str.includes("JS");
}
// console.log(langs.indexOf("ku"));

// console.log(langIncl(langs));

// ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок

function indexOfIncl(str) {
  let message = "";
  if (str.includes("JavaScript")) {
    message = `JavaScript stay in ${str.indexOf("JavaScript")}; `;
  }
  if (str.includes("JS")) {
    message += `JS stay in ${str.indexOf("JS")}; `;
  }
  return message;
}

console.log(indexOfIncl(langs));
