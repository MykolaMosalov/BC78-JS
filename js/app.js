// Callback-функції
// Стрілочні функції
// Метод forEach як заміна for і for...of
// Декларативний і імперативний код

// * Callback - функції;

//TODO:============task-01=========================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const name = prompt('Enter your name').trim();

//   if (!name) {
//     return 'Error';
//   }

//   return callback(name);
// }

// function greet(name) {
//   return `Hello ${name}`;
// }

// alert(letMeSeeYourName(greet));

//TODO:============task-06=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 3, 6, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

// words.forEach((el, idx, arr) => {
//   console.log(`${idx + 1} - ${el}`);
// });

// function findFirstElementInArray(arr, callback) {
//   // for (const value of arr) {
//   //   if (callback(value)) {
//   //     return value;
//   //   }
//   // }

//   let result = null;

//   arr.forEach((value) => {
//     if (callback(value) && result === null) {
//       result = value;
//     }
//   });

//   return result;
// }

// function firstIsEvenElement(num) {
//   return num % 2 === 0;
// }

// const firstIsEvenElement = (num) => num % 2 === 0;

// function startWithO(str) {
//   return str.toLowerCase().startsWith('o');
// }

// const startWithO = (str) => str.toLowerCase().startsWith('o');

// console.log(findFirstElementInArray(numbers, firstIsEvenElement));
// console.log(findFirstElementInArray(words, startWithO));

//! Зауважте, що використання методу forEach не дозволяє прямо вийти з циклу після знаходження першого підходящого елемента. Тому ми використовуємо додаткову змінну result, щоб зберегти перший підходящий елемент та перевіряти, чи він вже був знайдений. forEach нічого не повертає, а просто перебирає масив!

//? MAP
// const numbersArr = [1, 2, 3, 4, 5];

// function MultiplicationOfNumbers(arr) {
//   const newArr = [];

//   for (const number of arr) {
//     newArr.push(number * 2);
//   }

//   return newArr;
// }

// const MultiplicationOfNumbers = (arr) => arr.map((number) => number * 2);

// console.log(MultiplicationOfNumbers(numbersArr));
// console.log(numbersArr);
