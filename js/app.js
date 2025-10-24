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

//TODO:============task-03==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"]);

//TODO:=============task-04=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumSibling(arr) {
//   const res = [];
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     res.push(arr[i] + arr[i + 1]);
//   }
//   //     if (i === 0) {
//   //       res.push(arr[i] + arr[i + 1]);
//   //       continue;
//   //     }
//   //     if (i === arr.length - 1) {
//   //       res.push(arr[i] + arr[i - 1]);
//   //       continue;
//   //     }
//   //     res.push(arr[i] + arr[i - 1] + arr[i + 1]);
//   //   }
//   return res;
// }

// console.log(sumSibling(someArr));

//TODO:=========task-05=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

function calculateAverage() {
  let res = 0;
  let count = arguments.length;
  for (const num of arguments) {
    if (typeof num !== "number") {
      count--;
      continue;
    }
    res += num;
  }

  return count !== 0 ? res / count : "no one is number";
}

console.log(calculateAverage(1, 4, 3, 2, 5));
console.log(calculateAverage(1, 4, 3, "4", 5));
console.log(calculateAverage("1", "4", "3", "4"));
console.log(calculateAverage(0, 0, 0, 0, 0));
