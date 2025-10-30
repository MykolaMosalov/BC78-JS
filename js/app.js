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

//TODO:============task-03=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// const multiNumbers = (num1, num2, callback) => callback(num1 * num2);

// const processingNum = (num) =>
//   num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num);

// console.log(multiNumbers(2, 5, processingNum));
// console.log(multiNumbers(3, 3, processingNum));

//TODO:============task-04=========================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// const makeProduct = (name, price, callback) => {
//   const objProduct = { id: Date.now(), name, price };
//   return callback(objProduct);
// };

// const showProduct = (product) =>
//   `id: ${product.id}, name: ${product.name}, price: ${product.price}`;

// console.log(makeProduct("apple", 12, showProduct));

//TODO:============task-05=========================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2
//! Використай анонімну колбєк функцію
// const numbers = [3, 5, 6, 34, 8, 83, 12, 34];

// function each(array, callback) {
//   const newArr = [];

//   for (const item of array) {
//    newArr.push(callback(item));

//   }
//   return newArr;
// }

// console.log(each(numbers, number =>  number * 2));

//TODO:============task-06=========================
// Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна повернути новий масив, у якому кожен елемент масиву перетворено згідно з логікою, яка визначається в колбек-функції. Колбек-функція приймає число, і повертає його ж, помножене на рандомне число від 1 до цього числа.

// const numbers = [1, 2, 3, 4, 5];
// function transformArray(arr, callback) {
//   const newArray = [];
//   arr.forEach((element) => {
//     newArray.push(callback(element));
//   });
//   return newArray;
// }

// function transformNumbers(number) {
//   return Math.round(Math.random() * number) + 1;
// }

// console.log(transformArray(numbers, transformNumbers));
