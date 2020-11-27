import client from "./client";

const endpoint = "/users/addUser";

const register = (userInfo) => client.post(endpoint, JSON.stringify(userInfo));
export default { register };
