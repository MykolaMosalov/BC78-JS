import refs from "./refs.js";
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "./localStorage-api.js";
import { COUNT_LS_KEY } from "./keys.js";
import { showDisplay } from "./helpers.js";

let count = 0;

const onControlsClick = (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const clickBtn = event.target.dataset.action;
  console.log(clickBtn);

  if (clickBtn === "decrease") {
    count -= 1;
  }

  if (clickBtn === "reset") {
    count = 0;
  }

  if (clickBtn === "increase") {
    count += 1;
  }

  showDisplay(count);
};

const onSaveBtnsClick = (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const clickBtn = event.target.dataset.action;
  console.log(clickBtn);

  if (clickBtn === "save") {
    addDataToLocalStorage(COUNT_LS_KEY, count);
  }

  if (clickBtn === "clear-save") {
    removeDataFromLocalStorage(COUNT_LS_KEY);
  }
};

const renderPage = () => {
  const LS_DATA = getDataFromLocalStorage(COUNT_LS_KEY);

  if (LS_DATA) {
    count = LS_DATA;
    showDisplay(count);
  }
};

refs.controls.addEventListener("click", onControlsClick);

refs.saveBtns.addEventListener("click", onSaveBtnsClick);

document.addEventListener("DOMContentLoaded", renderPage);
