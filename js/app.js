// import

// refs
// const textInputEl = document.querySelector('.text-input');
// const btnEl = document.querySelector('.btn');
// const outputEl = document.querySelector('.output');
// const formEl = document.querySelector('.form');

// const refs = {
//   textInput: document.querySelector('.text-input'),
//   btn: document.querySelector('.btn'),
//   output: document.querySelector('.output'),
//   form: document.querySelector('.form'),
// };

// callback
// const onTextInput = (event) => {
//   const input = event.currentTarget;
//   const inputValue = event.currentTarget.value.trim();

//   if (inputValue.length > 3) {
//     input.style.border = '2px solid green';
//   } else {
//     input.style.border = '2px solid red';
//   }
// };

// const onBtnClick = (event) => {
//   const btnContent = event.currentTarget.textContent;
//   const btn = event.currentTarget;

//   if (btnContent === 'Clicked') {
//     btn.textContent = 'Click';
//   } else {
//     btn.textContent = 'Clicked';
//   }

//   // event.currentTarget.style.backgroundColor = 'blue';

//   refs.output.textContent = refs.textInput.value.trim();
// };

// const onSubmit = (event) => {
//   event.preventDefault();

//   const { userName, userAge, userEmail } = event.currentTarget.elements;

//   if (
//     !userName.value.trim() ||
//     !userAge.value.trim() ||
//     !userEmail.value.trim()
//   ) {
//     return alert('Error');
//   }

//   const data = {
//     userName: userName.value.trim(),
//     userAge: userAge.value.trim(),
//     userEmail: userEmail.value.trim(),
//   };

//   console.log(data);

//   event.currentTarget.reset();
// };

// const onRenderPage = (e) => {
//   refs.output.textContent = 'Empty';
// };

// Listener
// refs.textInput.addEventListener('input', onTextInput);
// refs.btn.addEventListener('click', onBtnClick);
// textInputEl.addEventListener('blur', onTextInput);
// textInputEl.addEventListener('focus', onTextInput);
// refs.form.addEventListener('submit', onSubmit);
// textInputEl.addEventListener('click', () => {
//   console.log('Clicked on Input');
// });
// document.addEventListener('DOMContentLoaded', onRenderPage);

// Модуль 7. Заняття 14. DOM i events

//TODO:=========task-01=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */

// find refs

//TODO:===========1===============
//** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

// const inputEl = document.querySelector(".js-username-input");
// // console.log(inputEl);

// inputEl.addEventListener("input", (event) => {
//     if (event.currentTarget.value.trim().length > 6) {
//         event.currentTarget.classList.add("success");
//         event.currentTarget.classList.remove("error");
//     } else {
//         event.currentTarget.classList.add("error");
//         event.currentTarget.classList.remove("success");
//     }
// });

//TODO:===========2===============
// //2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// const inputEl = document.querySelector(".js-username-input");

// const eventFormula = (event) => {
//     const input = event.currentTarget;
//     if (input.value.trim() === "") {
//         input.style.outline = "3px solid red";
//     } else {
//         input.style.outline = "3px solid green";
//     }
//     console.dir(event);
// };

// inputEl.addEventListener("focus", eventFormula);

//TODO:===========3===============
//При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
const inputEl = document.querySelector(".js-username-input");
inputEl.addEventListener("blur", onBlur);
function onBlur(event) {
  const input = event.currentTarget;
  if (input.value.trim() === "") {
    input.style.outline = "3px solid red";
  } else {
    input.style.outline = "3px solid lime";
  }
}

//TODO:===========4===============

// При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.

const formEl = document.querySelector(".js-contact-form");
const formSpanEl = document.querySelector(".js-username-output");
const formInputEl = document.querySelector(".js-username-input");

formEl.addEventListener("submit", onSubmit);
formInputEl.addEventListener("input", onInput);

function onSubmit(event) {
  event.preventDefault();

  const { userName, accept } = event.currentTarget.elements;
  console.log(accept.checked);

  if (userName.value.trim() === "" || !accept.checked) {
    return alert("Error!");
  }

  const data = {
    userName: userName.value.trim(),
  };
  console.log(data);

  event.currentTarget.reset();
  formSpanEl.textContent = "Anonymous";
}

// function onInput(event) {
//   const input = formInputEl.value.trim();
//   input === ""
//     ? (formSpanEl.textContent = "Anonymous")
//     : (formSpanEl.textContent = input);
// }

function onInput() {
  formSpanEl.textContent = formInputEl.value.trim() || "Anonymous";
}

//TODO:=========task-02=================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

// const InputEl = document.querySelector(".js-password-input");
// const passwordBtnEl = document.querySelector(".js-password-button");

// passwordBtnEl.addEventListener("click", passwordBtnChanger);

// function passwordBtnChanger(event) {
//   if (InputEl.type === "text") {
//     InputEl.type = "password";
//     event.currentTarget.textContent = "Розкрити";
//     return;
//   }
//   InputEl.type = "text";
//   event.currentTarget.textContent = "Приховати";
// }

//TODO:=========task-03=================
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey

//TODO:=========task-04=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.
//
