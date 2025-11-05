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
