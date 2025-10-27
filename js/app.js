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
