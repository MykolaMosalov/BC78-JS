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

const str = "This is a new line";
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;

  //   // for (let i = 0; i < str.length; i++) {
  //   //   if (vowels.includes(str[i])) {
  //   //     count++;
  //   //   }
  //   // }

  for (const letter of str) vowels.includes(letter) && count++;
  // {
  //   count += Number(vowels.includes(letter));
  // }
  return count;
}

console.log(countVowels(str));
