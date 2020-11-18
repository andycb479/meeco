import client from "./client";

const endpoint = "/incomes/incomesmonth";

const getSumsPerMonth = () => client.get(endpoint);
export default {
  getSumsPerMonth,
};
