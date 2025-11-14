import refs from "./refs.js";

export const showDisplay = (count) => {
  refs.counter.textContent = count;
};
