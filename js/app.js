//TODO:===============task-02===============================
// Даний словник із міст та дат виступів рок-групи
// Необхідно перетворити словник (key-value) на масив із назв міст
// Виведення міст має бути у хронологічному порядку
// Міста у яких концерт вже пройшов потрібно виключити
// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2025-11-10"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2025-11-17"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2025-11-15"),
// };

// function getUnfinishedConcerts(concerts) {
//   const currentDate = new Date();

//   return Object.entries(concerts)
//     .filter((item) => item[1] > currentDate)
//     .toSorted((a, b) => a[1] - b[1])
//     .map((item) => item[0]);
// }

// const getUnfinishedConcerts = (concerts) =>
//   Object.keys(concerts)
//     .filter((city) => concerts[city] > new Date())
//     .toSorted((a, b) => concerts[a] - concerts[b]);

// console.log(getUnfinishedConcerts(concerts));

//! callback
//TODO:=================task-01=============================
// Є масив чисел. Напишіть функцію, яка приймає масив та два колбеки.
// Перший колбек виконується над усіма елементами масиву перемножуючи їх на 2.
// Другий - над елементами, ділить елементи, що можна розділити без залишку, на 5, та повертає суму усіх елементів масиву.
// Результат першого колбеку повинен передаватися другому колбеку.Функція повинна повертати результат другого колбеку.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function manipulateArray(arr, callback1, callback2) {
//   const newArr = [];
//   let result = 0;

//   arr.forEach((num) => {
//     const value = callback1(num);

//     newArr.push(value);

//     if (value % 5 === 0) {
//       result += callback2(value);
//     }
//   });

//   return result;
// }

// const multiplyBy2 = (num) => num * 2;

// const divideNumber = (num) => num / 5;

// console.log(manipulateArray(array, multiplyBy2, divideNumber));

//! Замикання
//TODO:=================task-02=============================
// Напишіть функцію makeСhef(сhefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику
// Функція makeDish має логірувати "<shef> is cooking <dish>"

/**
 * Параметр сhefName это локальная переменная для функции makeСhef.
 * Это значит что она будет доступна функции makeDish через замыкание.
 */

// function makeChef(chefName) {
//   return function makeDish(dish) {
//     return `${chefName} is cooking ${dish}`;
//   };
// }

// const chef1 = makeChef("Parmesano");
// const chef2 = makeChef("Mamma-mia");

// console.log(chef1("La Pasta"));
// console.log(chef2("La Pizza"));

//! Arrow method
//TODO:=================task-06=============================
// У кожному масиві якщо унікальний рядок, у якому не повторюються літери.
// Знайдіть і виведіть цей рядок.

// const stringArr = ["abc", "acb", "bac", "foo", "bca", "cab", "jhgf", "cba"];
// const stringArr2 = ["fghj", "ghfj", "abcd", "jhgf", "fghj", "fgjh", "ghjf"];

// ["bac", "acb", "bac", "foo", "bca", "cab", "cba"] // === 'foo'
// ['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'] // === 'abcd'

// function searchUniq(arr) {
//   let check1 = arr[0];
//   let check2 = arr[1];

//   for (let i = 2; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (check1.includes(arr[i][j]) && check2.includes(arr[i][j])) {
//         check2 = arr[i];
//         break;
//       } else {
//         return arr[i];
//       }
//     }
//   }
// }

// function searchUniq(arr) {
//   return arr.find((string, idx, array) => {
//     const sortString = string
//       .split("")
//       .toSorted((a, b) => a.localeCompare(b))
//       .join("");

//     return array.every(
//       (str, index) =>
//         index === idx ||
//         sortString !==
//           str
//             .split("")
//             .toSorted((a, b) => a.localeCompare(b))
//             .join("")
//     );
//   });
// }

// console.log(searchUniq(stringArr));
// console.log(searchUniq(stringArr2));

//! this and contacts
//TODO:=================task-08=============================
// Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль
// та викликати user.loginOk / loginFail залежно від відповіді.

// //? Однак його виклик призводить до помилки. Чому?

// const checkPassword = function (ok, fail, password) {
//   password === "rockstar" ? ok() : fail();
// };

// const client = {
//   name: "Вася",

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(
//   client.loginOk.bind(client),
//   client.loginFail.bind(client),
//   "rockstar"
// );

//! class
//TODO:=================task-01=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)

// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

class Order {
  #tableNumber;
  #items;
  #isPaid;

  constructor(table) {
    this.#tableNumber = table;
    this.#items = [];
    this.#isPaid = false;
  }

  get tableNumber() {
    return this.#tableNumber;
  }

  set tableNumber(newTable) {
    this.#tableNumber = newTable;
  }

  get isPaid() {
    return this.#isPaid;
  }

  set isPaid(newPaid) {
    this.#isPaid = newPaid;
  }

  calculateTotal() {
    return this.#items.reduce((acc, { price }) => (acc += price), 0);
  }

  markAsPaid() {
    this.#isPaid = true;
    console.log(this.#isPaid);
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(item) {
    for (const i = 0; i < this.#items.length; i++) {
      if (item.name === this.#items[i].name) {
        this.#items.splice(i, 1);
        break;
      }
    }
  }
}

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Create menu items
const burger = new MenuItem("burger", 100);
const pizza = new MenuItem("pizza", 500);
const coffee = new MenuItem("coffee", 80);

// New Order
const order = new Order(1);
const order1 = new Order(2);
const order2 = new Order(3);

// Add items to order
order.addItem(burger);
order.addItem(coffee);

order1.addItem(pizza);

order2.addItem(coffee);
order2.addItem(pizza);

// Calculate total price
const total = order.calculateTotal();
order.markAsPaid();
console.log(`Order for table ${order.tableNumber} - Total: ${total} UAH`);
console.log(`Is Paid: ${order.isPaid}`);

const total1 = order1.calculateTotal();
order1.markAsPaid();
console.log(`Order for table ${order1.tableNumber} - Total: ${total1} UAH`);
console.log(`Is Paid: ${order1.isPaid}`);

const total2 = order2.calculateTotal();
order2.markAsPaid();
console.log(`Order for table ${order2.tableNumber} - Total: ${total2} UAH`);
console.log(`Is Paid: ${order2.isPaid}`);
