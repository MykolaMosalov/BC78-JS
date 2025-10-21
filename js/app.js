// //* Розгалуження: if, if...else, else...if
// //TODO:============task-1=========================
// //Даний рядок, що складається із символів, наприклад, 'abcde'.
// // Перевірте, що першим символом цього рядка є буква 'a'.
// // Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// // const str = "abcde";

// function checkSymbol(str) {
//   return str.startsWith("a") ? "так" : "ні";
// }
// // console.log(checkSymbol(str));
// // console.log(checkSymbol("bcde"));

// //TODO:============task-2=========================
// // Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// // Якщо умова не виконується - вивести “неможливо виконати умову”.
// // Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// // Використовувати вбудований метод length.

// // String.toLowerCase();

// // * Методи рядків: slice, toLowerCase, includes,startsWith,indexOf,trim

// //? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// // const userName = prompt("Введите имя");

// function calcSymbol(str) {
//   return str.length;
// }

// // alert(calcSymbol(userName));

// //? Попросіть користувача ввести email і переведіть у нижній регістр.

// // const eMale = prompt("Введите email");

// function loLowerEmail(str) {
//   return str.toLowerCase();
// }

// // alert(loLowerEmail(eMale));

// //? Попросіть користувача ввести email і переведіть у верхній регістр
// // const eMale = prompt("Введите email");

// function loUpperEmail(str) {
//   return str.toUpperCase();
// }

// // alert(loUpperEmail(eMale));

// // ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'. Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?

// const langs = "HTML, CSS, PHP, React, Vue, Node.js, C, C++";

// function langIncl(str) {
//   return str.includes("JavaScript") || str.includes("JS");
// }
// // console.log(langs.indexOf("ku"));

// // console.log(langIncl(langs));

// // ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок

// function indexOfIncl(str) {
//   let message = "";
//   if (str.includes("JavaScript")) {
//     message = `JavaScript stay in ${str.indexOf("JavaScript")}; `;
//   }
//   if (str.includes("JS")) {
//     message += `JS stay in ${str.indexOf("JS")}; `;
//   }
//   return message;
// }

// console.log(indexOfIncl(langs));

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;

// const str = "24px";

// function searchStr(str) {
//   let end = "";
//   if (str.endsWith("%")) {
//     end = "%";
//   } else if (str.endsWith("rem")) {
//     end = "rem";
//   } else if (str.endsWith("em")) {
//     end = "em";
//   } else if (str.endsWith("px")) {
//     end = "px";
//   } else {
//     return "nothing found";
//   }
//   return `string ends with ${end}`;
// }

// console.log(searchStr(str));

//? У нас є рядок '23,4', замініть кому на крапку

// const str = "23,4";

// function replaceComa(str) {
//   return str.replace(",", ".");
// }

// console.log(replaceComa(str));

// ?  У нас є рядок: 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy ?'.
// ? Замініть усі входження dog на monkey.

// const str =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy ?";

// function replaceSubStr(str) {
//   return str.replaceAll("dog", "monkey");
//   // let res = str.split(" ");
//   // for (let i = 0; i < res.length; i++) {
//   //   if (res[i] === "dog" || res[i] === "Dog") {
//   //     res[i] = "monkey";
//   //   }
//   // }
//   // return res.join(" ");
// }

// console.log(replaceSubStr(str));

// DONT DO IT
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
//   if (str[i] === 'D' || str[i] === 'd') {
//     if ((str[i - 1] === ' ' || i === 0) && str[i + 1] === "o" && str[i + 2] === "g" && str[i + 3] === " ") {

//     }
//   }
// }

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// const str = "12:05:21";
// function replaceSubStr(str) {
//   return str.replaceAll(":", ".");
// }

// console.log(replaceSubStr(str));

// ?  Дано рядок 'Vasyl Pupkin is 24 years old'. Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.

const str = 'Vasyl Pupkin is 24 years old';

function createInfoAboutUser(str) {
  // const strCopy = str.split(" ");
  // const firstName = strCopy[0];
  // const lastName = strCopy[1];
  // const age = strCopy[3];
  // return `${firstName} ${lastName} - ${age} year`;
  const fullUserName = str.slice(0, 12);
  const age = str.slice(16, 18);

  return `${fullUserName} - ${age} year`;
}

// console.log(createInfoAboutUser(str));

//TODO:============task-01=========================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином
// *
// **
// ***
// ****
// *****

// let star = '*';

// for (let i = 1; i <= 7; i += 1) {
//   console.log(star);
//   star += '*';
// }

// let num;

// do {
//   num = Number(prompt('Веддшть число більше 100'));
// } while (num < 100);

//! Оператор break & continue
//TODO:============task-03=========================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 80;
// const min = 40;
// let total = 0;

// for (let i = max; i >= min; i--) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(`Парні - ${i}`);
//   total += i;
// }

// console.log(`Сума усіх парних чисел = ${total}`);
