import client from "./client";

const endpoint = "/incomes";

const getIncomes = () => client.get(endpoint);

const addIncome = (income) => {
  const data = new FormData();
  data.append("title", icome.title);
  data.append("amount", icome.price);
  data.append("description", income.description);
  data.append("date", income.createDate);
  return client.post(endpoint, data);
};

export default {
  getIncomes,
  addIncome,
};
