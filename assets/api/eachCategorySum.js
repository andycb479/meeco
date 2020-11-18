import client from "./client";

const endpoint = "/expenses/mainScreen";

const getSums = () => client.get(endpoint);
export default {
  getSums,
};
