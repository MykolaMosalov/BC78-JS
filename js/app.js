// Робота з масивом об'єктів
// Свторення методів обєкту
// this в методах об'єкта при зверненні до властивостей
// Операції spread і rest

const users = [
  {
    userName: "Bob",
    age: 29,
    isActive: true,
  },
  {
    userName: "Mango",
    age: 33,
    isActive: false,
  },
  {
    userName: "Jon",
    age: 20,
    isActive: true,
  },
];

// console.log(users);

const usersNameArray = [];

for (const item of users) {
  usersNameArray.push(item.userName);
}

// console.log(usersNameArray);

const obj = {
  products: [],

  addProducts() {},

  showProducts() {},
};

function fn() {}

// console.log(obj.addProducts());

// console.log(fn());

const user = {
  userName: "Bob",
  age: 30,

  showName() {
    return `Hello im ${this.userName}`;
  },
};

function sayHello(name) {
  return name;
}

const human = Object.create(user);
human.userName = "Mango";
human.sayHello = sayHello;

// console.log(human.showName());
// console.log(user.showName());
// console.log(human.sayHello('Bob'));

// console.log(user.showName());

// // const newObj = { ...user };
// // console.log(newObj);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// // const newArr = arr1.concat(arr2);
// // console.log(newArr);

// const newArr = [...arr1, ...arr2];
// // console.log(newArr);

// function findMaxNumber(...args) {
//     return Math.max(...args);
// }

// console.log(findMaxNumber(29, 49, 90, 200));

// * Свторення методів обєкту
//TODO:============task-1==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина".
//Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини
//та ширини.

// const square = {
//   width: 2,
//   high: 3,

//   calculateArea() {
//     return this.width * this.high;
//   },
// };

// console.log(square.calculateArea());

//TODO:============task-2==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// const storeProducts = {
//   items: [
//     { name: "laptop", price: 5000 },
//     { name: "phone", price: 2500 },
//   ],
//   calculateTotal() {
//     let totalPrice = 0;
//     for (const item of this.items) {
//       totalPrice += item.price;
//     }
//     return `Сумма до сплати: ${totalPrice} $`;
//   },
// };

// console.log(storeProducts.calculateTotal());

//TODO:============task-3==============================================
// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.

// const bankAccount = {
//   ownerName: "",
//   accountNumber: "",
//   balance: 0,
//   deposit(value) {
//     this.balance += value;
//     console.log(
//       `your balance is replenishment to ${value}. current balance: ${this.balance}`
//     );
//   },
//   withdraw(value) {
//     return value <= this.balance
//       ? `your balance decrease to ${value}. current balance: ${(this.balance -=
//           value)}`
//       : "Insufficient funds in your account.";
//   },
// };

// // console.log(bankAccount.deposit(500));
// // console.log(bankAccount.withdraw(300));
// // console.log(bankAccount.withdraw(20000));

// const artem = Object.create(bankAccount);
// artem.ownerName = "Artem";
// artem.accountNumber = 1;
// artem.deposit(5000);
// console.log(artem.withdraw(3000));
// console.log(artem);

// const mykola = Object.create(bankAccount);
// mykola.ownerName = "Mykola";
// mykola.accountNumber = 2;
// mykola.deposit(10000);
// console.log(mykola);

// * Операції spread і rest
//TODO:============task-1=========================
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

const arr1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" },
  { id: 3, name: "Bob" },
];

const arr2 = [
  { id: 2, name: "Mary" },
  { id: 4, name: "Jane" },
  { id: 5, name: "Tom" },
];

const newArr = [...arr1, ...arr2];
const newObj = {};
for (const item of newArr) {
  newObj[item.id] = item;
}
// console.log(Object.values(newObj));

//TODO:============task-2=========================
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// function updateObject(obj, ...toDelete) {
//   let newObj = {};
//   for (const key in obj) {
//     // console.log(toDelete.includes(key));
//     if (!toDelete.includes(key)) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

function updateObject(obj, ...toDelete) {
  for (const item of toDelete) {
    delete obj[item];
  }
  return obj;
}

console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));
