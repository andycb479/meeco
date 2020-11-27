import client from "./client";

const endpoint = "/users/auth";

const login = (userInfo) => client.post(endpoint, JSON.stringify(userInfo));

export default {
  login,
};
