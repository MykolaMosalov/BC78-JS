// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];
// const number = [1, 4, 6, 70];

//! Map
// const namesArr = students.map((item) => item.grade + 1); // []
// console.log(namesArr);
// console.log(students);

//! Filter
// const topStudents = students.filter(({ grade }) => grade < 4); // []
// console.log(topStudents);

//! Find
// const findSidorova = students.find(({ surname }) => surname === 'Сидорова'); // el
// console.log(findSidorova);

// const findFirstEvenElement = number.find((number) => number > 3); // el
// console.log(findFirstEvenElement);

//! Sort
// const sortGrades = [...students].sort((a, b) => a.grade - b.grade);
// console.log(sortGrades);

// console.log(students);

//! toSorted
// const sortGrades = students.toSorted((a, b) => a.grade - b.grade); // []
// console.log(sortGrades);

// const sortedNamesArr = students.toSorted((a, b) =>
//   a.name.localeCompare(b.name)
// );
// console.log(sortedNamesArr);

// const numbers = [2, 200, 3, 1];
// console.log(numbers.toSorted((a, b) => a - b));

//! some every - Boolean

//! FlatMap
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];

// const data = [
//   { name: 'Андрій', surname: 'Іванов', grade: [1, 2, 3, 4] },
//   { name: 'Олександр', surname: 'Петров', grade: [5, 6, 7, 8] },
// ];

// console.log(arr1.concat(arr2));
// console.log([...arr1, ...arr2]);

// console.log(data.flatMap(({ grade }) => grade)); // []

//! reduce
// const number = [1, 4, 6, 70];

// console.log(number.reduce((acc, number) => acc + number, 0)); // el

// const res = students
//   .filter(({ grade }) => grade > 4)
//   .toSorted((a, b) => a.name.localeCompare(b.name))
//   .map(({ name }) => name)
//   .some((word) => word === 'Ірина');

// console.log(res);

//! new Set
// const number = [1, 4, 6, 70, 1, 6];
// console.log([...new Set(number)]);

//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((num) => num ** 2);
// console.log(newArr);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArr2 = data.flatMap((num) => num.values);
// console.log(newArr2);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 22 },
// ];

// const findAPerson = people.some((person) => person.age < 20);

// console.log(findAPerson);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 5, 8, 10];

// const isEven = numbers.every((number) => number % 2 === 0);

// console.log(isEven);

//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const firstOddNumber = numbers.find((number) => number % 2 !== 0);

// console.log(firstOddNumber);

// //TODO:=========task-06=================
// // Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const arr = [1, 2, 3, 4, 5];

// const requiredNum = arr.find((number) => number > 3);

// console.log(requiredNum);
