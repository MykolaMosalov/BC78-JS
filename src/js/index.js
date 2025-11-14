import expenses from './transactions';
import { calculateTotalExpenses, getExpensesByCategory } from './expenses';
import refs from './helpers/refs';
import { getUniqCategories } from './helpers/uniqCategory';
import { initSelect } from './helpers/render';

initSelect(refs.select, getUniqCategories(expenses));

const onSelectChange = event => {
  const currentOption = event.target.selectedOptions[0].value;
  const category = getExpensesByCategory(expenses, currentOption);
  const total = calculateTotalExpenses(category);
  refs.total.textContent = total;
};

refs.select.addEventListener('change', onSelectChange);

refs.total.textContent = calculateTotalExpenses(
  getExpensesByCategory(expenses, refs.select.value)
);
