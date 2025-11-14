// const dialogEl = document.querySelector(".js-modul");
// const openBtnEl = document.querySelector(".js-btn-open");
// const closeBtnEl = document.querySelector(".js-btn-close");

const refs = {
    dialogEl: document.querySelector(".js-modul"),
    openBtnEl: document.querySelector(".js-btn-open"),
    closeBtnEl: document.querySelector(".js-btn-close"),
};

const onOpenModalBtn = () => {
    refs.dialogEl.showModal();
    document.addEventListener("keydown", onEscClick);
};
const onCloseModalBtn = () => {
    refs.dialogEl.close();
};
// const onOpenModalBtn = ()=>{}
const onEscClick = (e) => {
    if (e.code !== "Escape") return;
    onCloseModalBtn();
    console.log("worked");
    document.removeEventListener("keydown", onEscClick);
};

refs.openBtnEl.addEventListener("click", onOpenModalBtn);
refs.closeBtnEl.addEventListener("click", onCloseModalBtn);

/*
  |============================
  | Робота з формою:
  | 1 - Реалізуй відправку данних через подію "submit" на формі
  | 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача
  | виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
  | 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо користувач не ввів імʼя, записуй в обьект рядок "Anonimus"
  |
  | Виконуй завдвння послідовно:
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  |  - Повісь слухача події на форму
  |  - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
  |  - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна
  |============================
*/

// console.log(document.forms);

const { revievForm } = document.forms;
const submitFormFunction = (e) => {
    e.preventDefault();
    const form = e.target;

    const {
        userName: { value: userNameValue },
        userEmail: { value: userEmailValue },
        userReview: { value: userReviewValue },
    } = form.elements;

    const data = Object.fromEntries(new FormData(form));
    console.log(data);
    // console.log(formData.values);
    // for (const [key, value] of formData) {
    //     // console.log(`${key}, ${value}`);
    // }

    // if (
    //     // !userNameValue.trim() ||
    //     !userEmailValue.trim() ||
    //     !userReviewValue.trim()
    // )
    //     return alert("No values");
    // console.log({
    //     userName: userNameValue.trim() || "Anonimous",
    //     userEmail: userEmailValue,
    //     userReview: userReviewValue,
    // });
    // form.reset();
    // onCloseModalBtn();

    // setTimeout(() => alert("Form has been sent successfuly"), 2000);
};

revievForm.addEventListener("submit", submitFormFunction);
