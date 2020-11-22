import { exp } from "react-native-reanimated";
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
    imageURI: expense.images[0],
  };
  return client.post(endpoint, JSON.stringify(datas));
};

const deleteExpense = (id) => {
  return client.delete(endpoint + "/" + id.toString());
};

export default {
  getExpenses,
  addExpense,
  deleteExpense,
};
