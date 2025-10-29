//TODO:============task-01=========================
// function calcAverageCalories(arr) {
//   let totalCalories = 0;
//   const totalDays = arr.length;

//   if (arr.length === 0) return totalCalories;

//   for (const { calories } of arr) {
//     totalCalories += calories;
//   }

//   return totalCalories / totalDays;
// }

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 3010 },
//     { day: 'tuesday', calories: 3200 },
//     { day: 'wednesday', calories: 3120 },
//     { day: 'thursday', calories: 2900 },
//     { day: 'friday', calories: 3450 },
//     { day: 'saturday', calories: 3280 },
//     { day: 'sunday', calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 2040 },
//     { day: 'tuesday', calories: 2270 },
//     { day: 'wednesday', calories: 2420 },
//     { day: 'thursday', calories: 1900 },
//     { day: 'friday', calories: 2370 },
//     { day: 'saturday', calories: 2280 },
//     { day: 'sunday', calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

//TODO:============task-02=========================
// Перебрати та вивести числа від 10 до 30, число 15 пропустити і не виводити.

// const min = 10;
// const max = 30;

// for (let i = min; i <= max; i += 1) {
//   if (i === 15) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//* Цикл while and do while
//TODO:============task-03=========================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.

// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.

// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."

// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let input;
// let total = 0;

// do {
//   input = prompt('Paste number');

//   if (input === null) {
//     break;
//   }

//   input = parseFloat(input);

//   if (!isNaN(input)) {
//     total += input;
//   }
// } while (true);

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

//TODO:============task-04=========================
// Перевірте чи співпадає введений пароль password із збереженим паролем.
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true,
// якщо значення збігаються, і false - якщо ні.

// let newPwrd = prompt("type password");
// function isMatchPassword(password) {
//   const SAVED_PASSWORD = "12348765aA";
//   return password === SAVED_PASSWORD;
// }

// alert(isMatchPassword(newPwrd));

//TODO:============task-05=========================
// Створи функцію createSubstring, яка буде створювати підрядок довжиною length символів (від початку) з рядка string.
// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка

// const string =
//   "Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.";
// const length = 25;

// function createSubstring(string, length) {
//   return string.slice(0, length) + "...";
// }

// console.log(createSubstring(string, length));

//TODO:============task-06=========================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку.

// const str = "This is a new line";
// const vowels = ["a", "e", "i", "o", "u"];

// function countVowels(str) {
//   let count = 0;

//   //   // for (let i = 0; i < str.length; i++) {
//   //   //   if (vowels.includes(str[i])) {
//   //   //     count++;
//   //   //   }
//   //   // }

//   for (const letter of str) vowels.includes(letter) && count++;
//   // {
//   //   count += Number(vowels.includes(letter));
//   // }
//   return count;
// }

// console.log(countVowels(str));

//TODO:============task-07=========================
// Перебрати числа від 10 до 30, вивести число 15 і зупинити цикл.
// const min = 10;
// const max = 30;

// function serchNumber(min, max, number) {
//   if (number < min || number > max) {
//     return "Error!!!";
//   }
//   for (let i = min; i <= max; i++) {
//     if (i === number) {
//       return i;
//     }
//   }
// }
// console.log(serchNumber(min, max, 45));

//TODO:============task-08=========================
// Перевірити два масиву і дізнатися, чи вони рівні

// //* Оцікуваний результат - true, true, false, false
// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];
// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];
// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];
// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function compareArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (const char of arr1) {
//     if (!arr2.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(compareArrays(arr1, arr2)); // true
// console.log(compareArrays(arr3, arr4)); // true
// console.log(compareArrays(arr5, arr6)); // false
// console.log(compareArrays(arr7, arr8)); // false

//TODO:============task-8==================================================
// Створіть масив об'єктів "продуктів" з властивостями "назва", "ціна" та "кількість".
// Напишіть функцію "calculateTotalPrice", яка буде повертати загальну вартість всіх товарів в масиві.

// //* Оцікуваний результат - store1=> 25, store2=> 304, store3=> 3024
// const store = [
//   { name: "Молоко", price: 2, quantity: 3 },
//   { name: "Хліб", price: 1, quantity: 2 },
//   { name: "Сир", price: 12, quantity: 1 },
//   { name: "Яблука", price: 1, quantity: 5 },
// ];
// const store2 = [
//   { name: "Молоко", price: 22, quantity: 3 },
//   { name: "Хліб", price: 14, quantity: 2 },
//   { name: "Сир", price: 120, quantity: 1 },
//   { name: "Яблука", price: 18, quantity: 5 },
// ];
// const store3 = [
//   { name: "Молоко", price: 212, quantity: 3 },
//   { name: "Хліб", price: 314, quantity: 2 },
//   { name: "Сир", price: 1120, quantity: 1 },
//   { name: "Яблука", price: 128, quantity: 5 },
// ];

// function calculateTotalPrice(arr) {
//   let totalPrice = 0;

//   for (const { price, quantity } of arr) {
//     totalPrice += price * quantity;
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice(store));
// console.log(calculateTotalPrice(store2));
// console.log(calculateTotalPrice(store3));

//TODO:============task-9=====================================
// * Задача: є масив об'єктів, кожен об'єкт містить інформацію про певний товар: назву товару, його ціну та кількість.
// * Необхідно вивести інформацію про ті товари, ціна яких менше 50 гривень та кількість більше 5 одиниць.

// const products = [
//   { name: "product 1", price: 20, quantity: 10 },
//   { name: "product 2", price: 30, quantity: 4 },
//   { name: "product 3", price: 40, quantity: 6 },
//   { name: "product 4", price: 50, quantity: 3 },
//   { name: "product 5", price: 60, quantity: 2 },
// ];

// function checkProducts(arr, maxPrice, minQuant) {
//   const resArr = [];

//   for (const item of arr) {
//     const { price, quantity } = item;
//     if (price < maxPrice && quantity > minQuant) {
//       resArr.push(item);
//     }
//   }
//   return resArr;
// }

// console.log(checkProducts(products, 50, 5));

//!  Методи обьектів
//TODO:============task-10===================================
// Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
//  метод "login", який буде перевіряти правильність введеного email та password.
// Використайте інпути для запису значень властивостей в об’єкт

// const user = {
//   name: "John",
//   email: "JohnSmith@gmail.com",
//   password: "19ds68GJ",
//   login(email, password) {
//     return email.toLowerCase() === this.email.toLowerCase() &&
//       password === this.password
//       ? "Авторизація пройшла успішно"
//       : "Помилка авторизації! Перевірте правильність email та пароля.";
//   },
// };

// const email = prompt("Введіть Ваш email");
// const password = prompt("Введіть Ваш пароль");

// alert(user.login(email, password));

//TODO:=================task-11=============================
// Напиши функцію яка приймає масив чисел і повертає новий масив, унікальних чисел, які не повторюються.

const numbers = [
  10,
  10,
  10,
  2,
  "a",
  4,
  7,
  7,
  6,
  6,
  "B",
  4,
  23,
  22,
  22,
  111,
  10,
  "a",
];

function getUniqueNumbers(arr) {
  const obj = {};

  for (const item of arr) {
    obj[item] = item;
  }

  return Object.values(obj);
}

console.log(getUniqueNumbers(numbers));
