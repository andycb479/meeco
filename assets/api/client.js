import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.100.2:8085",
});
export default apiClient;
