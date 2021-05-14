import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000/" });

api.interceptors.request.use(function (config) {
  const user = localStorage.getItem("user");
  if (user) {
    config.headers = { user };
  }
  return config;
});

export default api;
