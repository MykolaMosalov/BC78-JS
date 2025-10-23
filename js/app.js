// const str =
//   'Dog quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy hot-dog ?';

// let strArray = str.split(' ');

// const newArray = [];

// const someArr = [10, 29, 69, 49, 59, true, false, undefined];

// const numbersArray = [];

// for (const item of someArr) {
//   if (typeof item === 'number' && item % 2 !== 0) {
//     numbersArray.push(item);
//   }
// }

// console.log(numbersArray);

// for (const value of strArray) {
//   // if (value === 'dog') {
//   //   newArray.push('monkey');
//   //   continue;
//   // }

//   // if (value === 'dog.') {
//   //   newArray.push('monkey.');
//   //   continue;
//   // }

//   // if (value === 'Dog') {
//   //   newArray.push('Monkey');
//   //   continue;
//   // }

//   // newArray.push(value);

//   switch (value) {
//     case 'dog':
//       newArray.push('monkey');
//       break;

//     case 'Dog':
//       newArray.push('Monkey');
//       break;

//     case 'dog.':
//       newArray.push('monkey.');
//       break;

//     default:
//       newArray.push(value);
//   }
// }

// console.log(newArray.join(' '));

// const arr = [10, 20, 40];

// arr.push(29);
// arr.pop();
// arr.unshift(0);
// arr.shift();

// const newArr = [0].concat(arr);
// console.log(newArr);

// arr.unshift(87);

// arr[1] = 100;

// const idx = arr.indexOf(10);
// console.log(idx);

// if (idx !== -1) {
//   arr[idx] = 100;
// }

// console.log(arr);

//TODO:=========task-1=================
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку за допомогою циклу for і for..of.

// const str = 'JavaScript, HTML, CSS, React';

// const arr = str.split(', ');



// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (const item of arr) {
//     console.log(item);
// }

//TODO:=========task-2=================
// Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі.

const message = 'JavaScript is a popular programming language.';

// const arr = message.split(' ');
// const arrayLength = arr.length;
// console.log(arr.length);

// let newMessage = arr.join('-');

// newMessage = newMessage.toLowerCase();

// console.log(newMessage);

const result = message.toLowerCase().split(' ').join('-');
console.log(result);g