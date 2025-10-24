/**  
- Функціональні вирази і оголошення функції
- Аргументи та параметри, дефолтні значення параметрів
- Повернення значення
- Порядок виконання коду і стек викликів функцій
- Область видимості функції
- Псевдомасив arguments
- Паттерн «Раннє повернення»
*/

//TODO:=========task-01=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

const numbers = [2, 5, 35, 56, 12, 1, 24, 7, 80, 3];

function findSmallerNumber(numbers = []) {
  if (!Array.isArray(numbers)) return "Arguments not a array";

  let smallNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallNumber) {
      smallNumber = number;
    }
  }

  return smallNumber;

  // return Math.min(...numbers);
}

// console.log(findSmallerNumber(numbers));
// console.log(findSmallerNumber(10, 59, 60));
// console.log(findSmallerNumber());

//TODO:============task-02==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   // if (typeof a !== "number" || typeof b !== "number") {
//   //   return "Невірні значення";
//   // }

//   // if (a > b) {
//   //   return b;
//   // } else if (b > a) {
//   //   return a;
//   // } else if ((a = b)) {
//   //   return "a=b";
//   // }
//   if (a === undefined || b === undefined) {
//     return "Передано лише один аргумент";
//   }
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Невірні значення";
//   }

//   if (a === b) {
//     return "Аргументи рівні";
//   }

//   return a < b ? a : b;
// }

// function min(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     if (a === b) {
//       return "Числа равны";
//     }
//     return a > b ? b : a;
//   } else {
//     return "неправильные значения";
//   }
// }
// console.log(min(5));
// console.log(min("gfd", "dhdh"));
// console.log(min(null, true));
// console.log(min(5, 3));
// console.log(min(5, 5));
// console.log(min(5, "fsg"));
