//TODO:===============task-02===============================
// Даний словник із міст та дат виступів рок-групи
// Необхідно перетворити словник (key-value) на масив із назв міст
// Виведення міст має бути у хронологічному порядку
// Міста у яких концерт вже пройшов потрібно виключити
// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2025-11-10"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2025-11-17"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2025-11-15"),
// };

// function getUnfinishedConcerts(concerts) {
//   const currentDate = new Date();

//   return Object.entries(concerts)
//     .filter((item) => item[1] > currentDate)
//     .toSorted((a, b) => a[1] - b[1])
//     .map((item) => item[0]);
// }

// const getUnfinishedConcerts = (concerts) =>
//   Object.keys(concerts)
//     .filter((city) => concerts[city] > new Date())
//     .toSorted((a, b) => concerts[a] - concerts[b]);

// console.log(getUnfinishedConcerts(concerts));

//! callback
//TODO:=================task-01=============================
// Є масив чисел. Напишіть функцію, яка приймає масив та два колбеки.
// Перший колбек виконується над усіма елементами масиву перемножуючи їх на 2.
// Другий - над елементами, ділить елементи, що можна розділити без залишку, на 5, та повертає суму усіх елементів масиву.
// Результат першого колбеку повинен передаватися другому колбеку.Функція повинна повертати результат другого колбеку.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function manipulateArray(arr, callback1, callback2) {
//   const newArr = [];
//   let result = 0;

//   arr.forEach((num) => {
//     const value = callback1(num);

//     newArr.push(value);

//     if (value % 5 === 0) {
//       result += callback2(value);
//     }
//   });

//   return result;
// }

// const multiplyBy2 = (num) => num * 2;

// const divideNumber = (num) => num / 5;

// console.log(manipulateArray(array, multiplyBy2, divideNumber));

//! Замикання
//TODO:=================task-02=============================
// Напишіть функцію makeСhef(сhefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику
// Функція makeDish має логірувати "<shef> is cooking <dish>"

/**
 * Параметр сhefName это локальная переменная для функции makeСhef.
 * Это значит что она будет доступна функции makeDish через замыкание.
 */

// function makeChef(chefName) {
//   return function makeDish(dish) {
//     return `${chefName} is cooking ${dish}`;
//   };
// }

// const chef1 = makeChef("Parmesano");
// const chef2 = makeChef("Mamma-mia");

// console.log(chef1("La Pasta"));
// console.log(chef2("La Pizza"));

//! Arrow method
//TODO:=================task-06=============================
// У кожному масиві якщо унікальний рядок, у якому не повторюються літери.
// Знайдіть і виведіть цей рядок.

const stringArr = ["abc", "acb", "bac", "foo", "bca", "cab", "jhgf", "cba"];
const stringArr2 = ["fghj", "ghfj", "abcd", "jhgf", "fghj", "fgjh", "ghjf"];

// ["bac", "acb", "bac", "foo", "bca", "cab", "cba"] // === 'foo'
// ['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'] // === 'abcd'

// function searchUniq(arr) {
//   let check1 = arr[0];
//   let check2 = arr[1];

//   for (let i = 2; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (check1.includes(arr[i][j]) && check2.includes(arr[i][j])) {
//         check2 = arr[i];
//         break;
//       } else {
//         return arr[i];
//       }
//     }
//   }
// }

// function searchUniq(arr) {
//   return arr.find((string, idx, array) => {
//     const sortString = string
//       .split("")
//       .toSorted((a, b) => a.localeCompare(b))
//       .join("");

//     return array.every(
//       (str, index) =>
//         index === idx ||
//         sortString !==
//           str
//             .split("")
//             .toSorted((a, b) => a.localeCompare(b))
//             .join("")
//     );
//   });
// }

// console.log(searchUniq(stringArr));
// console.log(searchUniq(stringArr2));
