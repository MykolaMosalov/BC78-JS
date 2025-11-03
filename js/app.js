//? Контекст виклику функції
//? Правила визначення this
//? this в стрілочних функціях
//? Методи call, apply і bind
//? Прототип об'єкта і метод Object.create()

// console.log(this);

// const obj = {
//   message: 'Im test',
//   test() {
//     return this.message;
//   },
// };

// console.log(obj.test());

// const arrowFn = () => {
//   this
// }

// const human = {
//   firstName: 'Bob',
//   lastName: 'Marty',
//   age: 25,

//   greed() {
//     return `Hello Im ${this.firstName} ${this.lastName}`;
//   },
// };

// const obj = {};

// const user = Object.create(human);
// user.firstName = 'Mango';
// user.lastName = 'Mangovuch';
// user.isActive = true;

// const newUser = Object.create(user);
// console.log(newUser);

// console.log(user);

// for (const key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(Object.keys(user));

// user.showIsActive = showIsActive;
// obj.showIsActive = showIsActive;

// function showIsActive() {
//   return this.isActive;
// }

// console.log(user);
// console.log(obj);

// console.log(user.greed());
// console.log(user.showIsActive());
// console.log(human.greed());
