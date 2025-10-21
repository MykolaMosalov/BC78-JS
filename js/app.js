// * Заняття 4:

// ? Методи рядків: slice, toLowerCase, includes,startsWith,indexOf,trim
// ? Цикли: while, do while, for
// ? Оператор break & continue

// const str = 'Hi, Hello World';
// const value = str.indexOf('o');
// console.log(value); // 4
// console.log(str.slice(0, value + 1));

// if(){}

const min = 48;
const max = 60;

function fn() {
  for (let i = min; i <= max; i += 1) {
    if (i === 55) {
      console.log(i);
      return;
    }

    console.log(i);
  }
}

// fn();

// ! While
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 1;
// }

// do {
//   console.log('Hello');
// } while (false);
