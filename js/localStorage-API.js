// Створіть функцію, яка буде додавати данні в localStorage.

export const addDataToLocalStorage = (key, value) => {
  try {
    const normalizedState = JSON.stringify(value);
    localStorage.setItem(key, normalizedState);
  } catch (error) {
    console.error(error.message);
  }
};

// Створіть функцію, яка буде отримувати данні з localStorage.

export const getDataFromLocalStorage = (key) => {
  try {
    const lsData = localStorage.getItem(key);
    return lsData === null ? undefined : JSON.parse(lsData);
  } catch (error) {
    console.error(error.message);
  }
};

// Створіть функцію, яка буде видаляти всі значення з localStorage по ключу.

export const removeDataFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error.message);
  }
};

// Створіть функцію, яка буде видаляти всі значення з localStorage.

export const removeAllDataFromLocalStorage = () => localStorage.clear();
