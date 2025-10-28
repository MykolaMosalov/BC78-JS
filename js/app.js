// Робота з масивом об'єктів
// Свторення методів обєкту
// this в методах об'єкта при зверненні до властивостей
// Операції spread і rest

const users = [
  {
    userName: 'Bob',
    age: 29,
    isActive: true,
  },
  {
    userName: 'Mango',
    age: 33,
    isActive: false,
  },
  {
    userName: 'Jon',
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
  userName: 'Bob',
  age: 30,

  showName() {
    return `Hello im ${this.userName}`;
  },
};

function sayHello(name) {
  return name;
}

const human = Object.create(user);
human.userName = 'Mango';
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
