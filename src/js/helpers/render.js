export const initSelect = (selector, uniqCategories) => {
  const markUp = uniqCategories
    .map(category => {
      return `<option value="${category}">${category}</option>`;
    })
    .join('');
  selector.insertAdjacentHTML('beforeend', markUp);
};
