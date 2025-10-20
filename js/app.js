//* Розгалуження: if, if...else, else...if
//TODO:============task-1=========================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const str = "abcde";

function checkSymbol(str) {
  return str.startsWith("a") ? "так" : "ні";
}
console.log(checkSymbol(str));
// console.log(checkSymbol("bcde"));
