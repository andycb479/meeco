import client from "./client";

const endpoint = "/money";

const getCurrency = () => client.get(endpoint);
export default {
  getCurrency,
};
