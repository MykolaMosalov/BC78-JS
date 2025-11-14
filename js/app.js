import {
    addDataToLocalStorage,
    getDataFromLocalStorage,
    removeDataFromLocalStorage,
    removeAllDataFromLocalStorage,
} from "./localStorage-api.js";
import { LS_KEY } from "./keys.js";

import refs from "./refs.js";

// - Використовуй html з файлу [themeSwitch.html](./themeSwitch.html)
// - Використовуй local storage для зберігання вибраної теми (dark / light)
//

const onCheckboxClick = (event) => {
    if (event.target.checked) {
        refs.body.classList.replace("light", "dark");
        addDataToLocalStorage(LS_KEY, "dark");
    } else {
        refs.body.classList.replace("dark", "light");
        addDataToLocalStorage(LS_KEY, "light");
    }
};

const renderPage = () => {
    if (getDataFromLocalStorage(LS_KEY) === "dark") {
        refs.body.classList.replace("light", "dark");
        refs.checkbox.checked = true;
    } else {
        refs.body.classList.replace("dark", "light");
    }
};

refs.checkbox.addEventListener("click", onCheckboxClick);
document.addEventListener("DOMContentLoaded", renderPage);
