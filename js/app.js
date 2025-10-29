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
