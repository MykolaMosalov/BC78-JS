import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
  removeAllDataFromLocalStorage,
} from "./localStorage-api.js";

addDataToLocalStorage("test", [10, 20, 30]);
addDataToLocalStorage("test2", 10);

console.log(getDataFromLocalStorage("test"));
console.log(getDataFromLocalStorage("test2"));

removeDataFromLocalStorage("test2");

removeAllDataFromLocalStorage();
