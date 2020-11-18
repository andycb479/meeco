import client from "./client";

const endpoint = "/expenses/expensesmonth";

const getSumsPerMonth = () => client.get(endpoint);
export default {
  getSumsPerMonth,
};
