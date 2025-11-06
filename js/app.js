// const titleEl = document.querySelector('.js-title');
// console.log(titleEl);

// const pEls = document.querySelectorAll('p');
// console.log(pEls);

// pEls.forEach((p) => (p.style.color = 'red'));

// titleEl.textContent = 'About';
// titleEl.style.color = 'Green';
// titleEl.classList.add('title');
// titleEl.classList.remove('section-title');

//! Navigation
// const ulEl = document.querySelector('.nav-list');

// ulEl.addEventListener('click', (e) => {
//   const activeLink = ulEl.querySelector('.active');

//   activeLink.classList.remove('active');

//   e.target.classList.add('active');
// });

// const pEls = document.querySelectorAll('p');
// console.log(pEls);

// Вставка елементів коли елемент не є елементом ДОМ дерева
// const mainTitle = document.createElement('h1');
// mainTitle.classList.add('section-title');
// mainTitle.textContent = 'Hero';

// const containerEl = document.querySelector('.container');

// containerEl.prepend(mainTitle);

// const nav = document.createElement('nav');
// nav.classList.add('nav');

// const ul = document.createElement('ul');
// ul.classList.add('nav-list');

// for (let i = 1; i <= 3; i++) {
//   const li = document.createElement('li');
//   li.classList.add('nav-item');

//   if (i === 1) {
//     li.textContent = 'Home';
//   } else if (i === 2) {
//     li.textContent = 'About';
//   } else if (i === 3) {
//     li.textContent = 'Contacts';
//   }

//   ul.appendChild(li);
// }

// nav.appendChild(ul);

// const titleEl = document.querySelector('h1');

// titleEl.after(nav);

//! Вставка елементів коли елемент є елементом ДОМ дерева

// const listEl = document.querySelector('.test');
// const fragment = document.createDocumentFragment();

// for (let i = 1; i <= 10; i++) {
//   const li = document.createElement('li');
//   li.textContent = i;

//   fragment.appendChild(li);
// }

// listEl.append(fragment);

//!
// const titleEl = document.querySelector('h1');
// titleEl.insertAdjacentHTML(
//   'afterend',
//   `<nav class="nav">
//     <ul class="nav-list">
//       <li class="nav-item active">Home</li>
//       <li class="nav-item">About</li>
//       <li class="nav-item">Contacts</li>
//     </ul>
//   </nav>`
// );

// const listEl = document.querySelector('.test');

// listEl.innerHTML = `
// <li>1</li>
//             <li>2</li>
//             <li>3</li>
//             <li>4</li>
//             <li>5</li>
//             <li>6</li>
//             <li>7</li>
//             <li>8</li>
//             <li>9</li>
//             <li>10</li>
// `;

// listEl.insertAdjacentHTML(
//   'beforeend',
//   `
// <li>1</li>
//             <li>2</li>
//             <li>3</li>
//             <li>4</li>
//             <li>5</li>
//             <li>6</li>
//             <li>7</li>
//             <li>8</li>
//             <li>9</li>
//             <li>10</li>
// `
// );

// const bodyEl = document.body;
// bodyEl.innerHTML = '';

// listEl.innerHTML = '';

//! Function
// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     alt: 'Alpine Spring Meadows',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     alt: 'Nature Landscape',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     alt: 'Lighthouse Coast Sea',
//   },
// ];

// const galleryList = document.querySelector('.js-gallery');

// function createMarkup(arr) {
//   return arr
//     .map(({ url, alt }) => {
//       return `
//     <li><img height="300" width="300" src="${url}" alt="${alt}"></li>
//     `;
//     })
//     .join('');
// }

// galleryList.innerHTML = createMarkup(images);

//? Practice
//TODO:=========task-01=================
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

//!----- Task-1-----//
const bodyEl = document.querySelector("body");
// console.log(bodyEl);
//!----- Task-2-----//
const titleEl = document.querySelector("#title");
// console.log(titleEl);
//!----- Task-3-----//
const listEl = document.querySelector(".list");
// console.log(listEl);
//!----- Task-4-----//
const topicsEl = document.querySelectorAll("[data-topic]");
console.log(topicsEl);
//!----- Task-5-----//
const topicEl = document.querySelector("[data-topic]");
console.log(topicEl);
//!----- Task-6-----//
// const lastTopicEl = document.querySelector("[data-topic='manipulation']");
const lastTopicEl = topicsEl[topicsEl.length - 1];
console.log(lastTopicEl);
//!----- Task-7-----//
const titleSibling = titleEl.nextElementSibling;
console.log(titleSibling);
//!----- Task-8-----//
const subTitlesEl = document.querySelectorAll("h3");
console.log(subTitlesEl);
