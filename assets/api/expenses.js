import client from "./client";

const endpoint = "/expenses";

const getExpenses = () => client.get(endpoint);

const addExpense = (expense) => {
  var datas = {
    iconName: expense.category.icon,
    category: expense.category.label,
    name: expense.title,
    value: expense.price,
    description: expense.description,
  };
  return client.post(endpoint, JSON.stringify(datas));
};

export default {
  getExpenses,
  addExpense,
};
