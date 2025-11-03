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

//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить
// повну інформацію про користувача.

const user = {
  firstName: "Vadym",
  lastName: "Buinov",
  age: 37,
  email: "test@gmail.com",
  commonInfoUser() {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} old, email: ${this.email},`
    );
  },
  modifyInfoUser(key, value) {
    if (key !== "firstName" && key !== "lastName") {
      return "Key is not valid";
    }

    if (value[0] === value[0].toLowerCase() || value.length < 3) {
      return "Value is not valid";
    }

    this[key] = value;
  },
};

// user.modifyInfoUser("firstName", "Vasilii");
// user.modifyInfoUser("firstName", "Vasilii");
console.log(user.modifyInfoUser("firstName", "Benedict"));

console.log(user);

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові
//потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

const friends = [
  {
    firstName: "Mary",
    lastName: "Smith",
    age: 32,
    email: "marysmith@hotmail.com",
  },
  {
    firstName: "Alex",
    lastName: "Johnson",
    age: 45,
    email: "alex.johnson@yahoo.com",
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    age: 19,
    email: "emilydavis@gmail.com",
  },
];

function addProperty(key, value) {
  this[key] = value;
}

// const obj = {};

// user.addProperty = addProperty;

// obj.addProperty = addProperty;

// user.addProperty("friends", friends);

// user.addProperty("hobby", "it");

// obj.addProperty("firstName", "Artem");

// console.log(obj);

// console.log(user);

//TODO:=========task-04=================
//  Викликати метод user.commonInfoUser() таким чином, щоб він вивів результатом  ({name: 'Bob', lastName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const newObj = Object.create(user);

// newObj.lastName = "Lasso";
// newObj.age = 50;
// newObj.firstName = "Bob";
// newObj.email = "BodLasso@gmail.com";

// console.log(newObj.commonInfoUser());

const obj = {
  firstName: "Bob",
  lastName: "Lasso",
  age: 50,
  email: "BodLasso@gmail.com",
};

user.commonInfoUser.call(obj);
console.log(user.modifyInfoUser.call(obj, "hobby", "it"));
console.log(obj);

//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

function showFullName(message) {
  console.log(`${message} ${this.firstName} ${this.lastName}`);
}

showFullName.call(obj, "Hello");
showFullName.apply(user, ["Greetings"]);
