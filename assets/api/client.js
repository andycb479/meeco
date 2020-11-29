import { create } from "apisauce";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "https://meeco.herokuapp.com/",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["authToken"] = authToken;
});

export default apiClient;
