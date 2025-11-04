//!  Class
// const user = {
//   userName: 'Bob',

//   greed() {
//     return `Hello ${this.userName}`;
//   },
// };

// console.log(user.userName);

// const newUser = Object.create(user);

// 1, 2, 3

// class User {
//   static Info() {
//     return 'Im static method';
//   }

//   #userName;
//   #email;

//   constructor(name, age, email) {
//     this.#userName = name;
//     this.age = age;
//     this.#email = email;
//   }

//   get getUserName() {
//     return this.#userName;
//   }

//   set setNewName(newName) {
//     this.#userName = newName;
//   }

//   greed() {
//     return `Hello ${this.#userName}`;
//   }
// }

// const user = new User('Bob', 35, 'Bob@gmail.com');
// const user1 = new User('Bob1', 352, 'Bob@gmail.com');
// const user2 = new User('Bob2', 353, 'Bob@gmail.com');
// const user3 = new User('Bob3', 354, 'Bob@gmail.com');
// const user4 = new User('Bob4', 355, 'Bob@gmail.com');

// user.setNewName = 'mango';

// console.log(User.Info());
// console.log(user.greed());
// console.log(user1.greed());
// console.log(user2.greed());
// console.log(user3.greed());
// console.log(user4.greed());

// class Human extends User {
//   constructor(name, age, email, hobby, lastName) {
//     super(name, age, email);
//     this.hobby = hobby;
//     this.lastName = lastName;
//   }

//   getInfo() {}
// }

// const human = new Human('Mango', 25, 'Mango@gmail.com', 'IT', 'Viktorovich');
// console.log(human.getUserName);

//* Модуль 6. Заняття 12. Прототипи та класи
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   // result = 0;

//   number(num) {
//     this.result = num;
//     return this;
//   }

//   getResult() {
//     console.log(this.result);
//     return this.result;
//   }

//   add(num) {
//     this.result += num;
//     return this;
//   }

//   substruct(num) {
//     this.result -= num;
//     return this;
//   }

//   divide(num) {
//     this.result /= num;
//     return this;
//   }

//   multiply(num) {
//     this.result *= num;
//     return this;
//   }
// }

// const calculator = new Calculator();
// const calculator2 = new Calculator();
// const calculator3 = new Calculator();

// calculator.number(10);
// calculator.add(5);
// calculator.multiply(2);
// calculator.divide(3);
// calculator.substruct(2);
// calculator.getResult();

// calculator.number(25).add(25).multiply(2).substruct(45).getResult(); // 55
// calculator2.number(10).add(10).multiply(2).substruct(45).getResult(); // - 5
// calculator3.number(25).multiply(2).add(10).getResult(); // 60

//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("Vlad", "vladik567@gmail.com");

// console.log(client.login);
// console.log(client.email);

//! Статичний метод
//TODO:=========task-03=================
/**
 * Напиши клас Notes який управляє колекцією нотаток у властивості items.
 * Нотатка - це об'єкт із властивостями text і priority.
 * Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
 * Додай методи
 * - addNote(note),
 * - removeNote(text)
 * - updatePriority(text, newPriority)
 */
class Notes {
  static Priopity() {
    return {
      high: "HIGH",
      low: "LOW",
    };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
  }
  removeNote(note) {
    this.items = this.items.filter((item) => item.text !== note.text);
  }
  updatePriority(note, newPriority) {
    const a = this.items.find((item) => item.text === note.text);
    if (a) {
      a.priopity = newPriority;
    }
  }
}

// const note = new Notes();

// note.addNote({ text: "вивчити класи", priopity: Notes.Priopity().high });

// note.addNote({ text: "вивчили класи", priopity: Notes.Priopity().low });

// note.removeNote({ text: "вивчити класи", priopity: Notes.Priopity().low });

// note.updatePriority(
//   { text: "вивчили класи", priopity: "LOW" },
//   Notes.Priopity().high
// );

// console.log(note);
