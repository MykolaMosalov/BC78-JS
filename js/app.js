//* Розгалуження: if, if...else, else...if
//TODO:============task-1=========================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const str = "abcde";

function checkSymbol(str) {
    return str.startsWith("a") ? "так" : "ні";
}
// console.log(checkSymbol(str));
// console.log(checkSymbol("bcde"));

//TODO:============task-2=========================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const firstName = "Elore";
const lastName = "Olabi";
function sumLetters(firstName, lastName) {
    const first = firstName.length;
    const last = lastName.length;
    return first > 4 && last > 5 ? first + last : "неможливо виконати умову";
}

// console.log(sumLetters(firstName, lastName));
// console.log(sumLetters("Віктор", "Сташко"));

//TODO:============task-3=========================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const enteredPrompt = +prompt("Enter number");

// function someFun(enteredPrompt) {
//   return enteredPrompt >= 55 && enteredPrompt <= 99
//     ? "Число потрапляє в діапазон"
//     : "Число не потрапляє в діапазон";
// }

// alert(someFun(enteredPrompt));
// console.log(someFun(55));
// console.log(someFun(56));

//TODO:============task-4=========================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.
const age = 55;
function ageGroup(age) {
    // let group;

    // if (age >= 0 && age <= 16) {
    //   // return "діти";
    //   group = "діти";
    // } else if (age >= 17 && age <= 60) {
    //   // return "дорослі";
    //   group = "дорослі";
    // } else if (age >= 61 && age <= 100) {
    //   // return "пенсіонери";
    //   group = "пенсіонери";
    // } else {
    //   group = "ERROR";
    // }
    // return group;

    if (age >= 0 && age <= 16) {
        return "діти";
    }

    if (age >= 17 && age <= 60) {
        return "дорослі";
    }

    if (age >= 61 && age <= 100) {
        return "пенсіонери";
    }

    return "Error";
}

// console.log(ageGroup(age));
// console.log(ageGroup(5));
// console.log(ageGroup(35));
// console.log(ageGroup(99));
// console.log(ageGroup(101));
// console.log(ageGroup(-101));

//TODO:============task-5=========================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

const num = 25;
let year;
switch (num) {
    case 1:
        year = "зима";

        break;

    case 2:
        year = "весна";
        break;

    case 3:
        year = "літо";
        break;

    case 4:
        year = "осінь";
        break;
    default:
        year = "Такої пори року не існує";
}
console.log(year);
