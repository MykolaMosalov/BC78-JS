//* Розгалуження: if, if...else, else...if
//TODO:============task-1=========================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const str = "abcde";

function checkSymbol(str) {
  return str.startsWith("a") ? "так" : "ні";
}
// console.log(checkSymbol(str));
// console.log(checkSymbol("bcde"));

//TODO:============task-2=========================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const firstName = "Elore";
const lastName = "Olabi";
function sumLetters(firstName, lastName) {
  const first = firstName.length;
  const last = lastName.length;
  return first > 4 && last > 5 ? first + last : "неможливо виконати умову";
}

// console.log(sumLetters(firstName, lastName));
// console.log(sumLetters("Віктор", "Сташко"));

//TODO:============task-3=========================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

const enteredPrompt = +prompt("Enter number");

function someFun(enteredPrompt) {
  return enteredPrompt >= 55 && enteredPrompt <= 99
    ? "Число потрапляє в діапазон"
    : "Число не потрапляє в діапазон";
}

// alert(someFun(enteredPrompt));
// console.log(someFun(55));
// console.log(someFun(56));
