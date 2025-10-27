// const users = [
//   {
//     userName: 'Bob',
//     age: 34,
//     isActive: true,
//     address: {
//       city: 'Lviv',
//       str: 'Kovpaka',
//     },
//   },
//   'Mukola',
//   'Sergii',
// ];

// const user = {
//   userName: 'Bob',
//   age: 34,
//   isActive: true,
//   address: {
//     city: 'Lviv',
//     str: 'Kovpaka',
//   },
// };

// const newUser = user;
// const newUser = Object.create(user);
// const newUser = { ...user };
// newUser.userName = 'Mango';
// newUser.address.city = 'Kiyv';
// console.log(newUser);
// console.log(user);

// for (const key in user) {
//   console.log(user[key]);
// }

// const keys = Object.keys(user);
// console.log(keys);

// const value = Object.values(user);
// console.log(value);

// const res = Object.entries(user);
// console.log(res);

// const obj = {
//   Mango: 2500,
//   Bob: 2200,
// };

// let total = 0;

// for (const key in obj) {
//   total += obj[key];
// }

// console.log(total);

// for (const item of Object.values(obj)) {
//   total += item;
// }

// console.log(total);

//TODO:============task-1======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// function newObj(obj, key) {
// for (const keys in obj) {
//   if (keys === key) return true;
// }
// return false;

// const arrayKeys = Object.keys(obj);
// return arrayKeys.includes(key);
// for (const keys of arrayKeys) {
//   if (keys === key) return true;
// }
// return false;

//   return key in obj;
// }
// console.log(newObj({ a: 1, b: 2 }, "c"));
// console.log(newObj({ a: 1, b: 2 }, "a"));

//TODO:============task-2======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Vlad: 10000,
//   Dima: 20000,
//   Lera: 15000,
// };

// // function sumSalaries(salaries) {
// //   let sum = 0;
// //   for (const value of Object.values(salaries)) {
// //     sum += value;
// //   }
// //   return sum;
// // }

// console.log(sumSalaries(salaries));
// console.log(sumSalaries({}));

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (const key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// }

//TODO:============task-3======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }

//   return obj;
// }

// console.log(multiplyNumeric(menu));

//TODO:===============task-04===============================
// Даний словник із міст та дат виступів рок-групи
// Необхідно перетворити словник (key-value) на масив із назв міст
// Виведення міст має бути у хронологічному порядку
// Міста у яких концерт вже пройшов потрібно виключити
// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2025-12-02"),
//   Вінниця: new Date("2020-04-21"),
//   Харків: new Date("2025-12-10"),
//   Одеса: new Date("2025-12-15"),
//   Хмельницький: new Date("2020-04-18"),
// };

// console.log(getUnfinishedConcerts(concerts));

// function getUnfinishedConcerts(obj) {
//   const resArr = [];
//   const currentDate = new Date();

//   for (const key in obj) {
//     if (obj[key] > currentDate) {
//       resArr.push(key);
//     }
//   }

//   return resArr;
// }
