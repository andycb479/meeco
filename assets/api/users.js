import client from "./client";

const endpoint = "";

const register = (userInfo) => client.post(endpoint, userInfo);

export default { register };
