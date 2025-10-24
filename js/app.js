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
  if (!Array.isArray(numbers)) return 'Arguments not a array';

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
