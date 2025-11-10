// const lisEl = document.querySelectorAll()
// const lisEl = document.querySelectorAll('.calendar-item');

// lisEl.forEach((li) =>
//   li.addEventListener('click', () => {
//     console.log('click');
//   })
// );

// const CalendarListContainer = document.querySelector('.calendar-list');

// CalendarListContainer.addEventListener('click', onCalendarListClick);

// function onCalendarListClick(e) {
//   const target = e.target;
//   const activeTarget = CalendarListContainer.querySelector('.active');

//   if (target.nodeName !== 'LI') return;

//   activeTarget.classList.remove('active');
//   target.classList.add('active');

//   // console.log(e);
//   // console.log('currentTarget:', e.currentTarget);
//   // console.log('Target:', e.target);
// }

// Модуль 8. Заняття 13. Поширення подій.

//TODO:=========task-01=======Accordion==========
/**
 * Викориcтовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */
const acardeonList = document.querySelector(".js-accordion-list");
acardeonList.addEventListener("click", openUlEl);

function openUlEl(e) {
  const btn = e.target;

  if (btn.nodeName !== "BUTTON") return;
  btn.nextElementSibling.classList.toggle("active");
}
//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу html для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

// const paginationList = document.querySelector(".js-pagination");

// paginationList.addEventListener("click", powrClick);

// function powrClick(e) {
//   const target = e.target;
//   const activeBtn = paginationList.querySelector(".active");
//   if (target.nodeName !== "LI") return;
//   if (target.dataset.type === "page") {
//     activeBtn.classList.remove("active");
//     target.classList.add("active");
//     return;
//   }
//   if (
//     target.dataset.type === "next" &&
//     activeBtn.nextElementSibling.dataset.type === "page"
//   ) {
//     activeBtn.classList.remove("active");
//     activeBtn.nextElementSibling.classList.add("active");
//     return;
//   }
//   if (
//     target.dataset.type === "prev" &&
//     activeBtn.previousElementSibling.dataset.type === "page"
//   ) {
//     activeBtn.classList.remove("active");
//     activeBtn.previousElementSibling.classList.add("active");
//   }
// }

const btnWrapper = document.querySelector(".btn-wrapper");
let previousBtnBackgroudColor = "";

const btnChangeColor = (e) => {
  let target = e.target;
  if (target.nodeName !== "BUTTON") return;

  if (previousBtnBackgroudColor) {
    btnWrapper
      .querySelector(`.${previousBtnBackgroudColor}`)
      .classList.remove(previousBtnBackgroudColor);
  }
  const currentBtnBackgroundColor = target.textContent.toLowerCase();
  // Variant 1
  // [...btnWrapper.children].forEach((li) => {
  //   const btn = li.firstElementChild;
  //   const updateBtnBackground = btn.textContent.toLowerCase();
  //   btn.classList.remove(updateBtnBackground);
  // });

  target.classList.add(currentBtnBackgroundColor);
  previousBtnBackgroudColor = currentBtnBackgroundColor;
};

btnWrapper.addEventListener("click", btnChangeColor);
