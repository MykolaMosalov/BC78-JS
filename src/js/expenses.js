export const calculateTotalExpenses = arr => {
  return arr.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);
};

// const result = calculateTotalExpenses(expenses);
// console.log(result);

export const getExpensesByCategory = (arr, searchCategory) => {
  return arr.filter(({ category }) => {
    return category === searchCategory;
  });
};
