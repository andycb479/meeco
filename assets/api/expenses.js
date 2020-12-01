import client from "./client";
import defaultImg from "../src/Meeco_Img.png";
import { Image } from "react-native";

const endpoint = "/expenses";

const getExpenses = () => client.get(endpoint);

const addExpense = (expense) => {
  var image = {
    uri:
      expense.images[0] == null
        ? Image.resolveAssetSource(defaultImg).uri
        : expense.images[0],
    type: "image/jpeg",
    name: "image",
  };

  const data = new FormData();
  data.append("iconName", expense.category.icon);
  data.append("category", expense.category.label);
  data.append("name", expense.title);
  data.append("value", expense.price);
  data.append("description", expense.description);
  data.append("imageURI", image);

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  return client.post(endpoint, data, { headers });
};

const deleteExpense = (id) => {
  return client.delete(endpoint + "/" + id.toString());
};

export default {
  getExpenses,
  addExpense,
  deleteExpense,
};
