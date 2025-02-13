import axios from "axios";

const api = axios.create({
  // baseURL: "http://127.0.0.1:5000/api/v1", //LOCAL
  baseURL: "https://boliviafigurinhasbackend.onrender.com/api/v1", //A VERA
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
