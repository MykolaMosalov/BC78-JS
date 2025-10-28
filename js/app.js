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

// const newObj = { ...user };
// console.log(newObj);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// const newArr = arr1.concat(arr2);
// console.log(newArr);

const newArr = [...arr1, ...arr2];
// console.log(newArr);

function findMaxNumber(...args) {
  return Math.max(...args);
}

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

const storeProducts = {
  items: [
    { name: "laptop", price: 5000 },
    { name: "phone", price: 2500 },
  ],
  calculateTotal() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  },
};

console.log(storeProducts.calculateTotal());
