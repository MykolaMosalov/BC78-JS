export const getUniqCategories = arr => {
  return arr
    .map(({ category }) => category)
    .filter((item, idx, arr) => {
      return arr.indexOf(item) === idx;
    });
};
