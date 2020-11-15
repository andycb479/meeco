import { exp } from "react-native-reanimated";
import client from "./client";

const endpoint = "/expenses";

const getExpenses = () => client.get(endpoint);

const addExpenses = (expense) => {
  const data = new FormData();
  data.append("title", expense.title);
  data.append("amount", expense.amount);
  data.append("category", expense.category);
  data.append("description", expense.description);
  expense.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  data.append("date", expense.createDate);

  return client.post(endpoint, data);
};

export default {
  getExpenses,
  addExpenses,
};
