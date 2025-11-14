import expenses from './transactions';
import { calculateTotalExpenses, getExpensesByCategory } from './expenses';

const totalExpenses = calculateTotalExpenses(expenses);
console.log(`Загальна сума витрат: ${totalExpenses}`);

const foodExpenses = getExpensesByCategory(expenses, 'Їжа');
console.log(`Витрати на їжу: ${calculateTotalExpenses(foodExpenses)}`);
