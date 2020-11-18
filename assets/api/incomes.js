import client from "./client";

const endpoint = "/incomes";

const getIncomes = () => client.get(endpoint);

const addIncome = (income) => {
  var datas = {
    name: income.title,
    value: income.price,
    description: income.description,
  };
  return client.post(endpoint, JSON.stringify(datas));
};

export default {
  getIncomes,
  addIncome,
};
