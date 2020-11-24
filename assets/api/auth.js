import client from "./client";

const endpoint = "";

const login = (email, password) => client.post(endpoint, { email, password });

export default {
  login,
};
