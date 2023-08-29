import axios, { AxiosRequestConfig } from "axios";

const API_URL = "https://localhost:5000";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const sessionData = localStorage.getItem("user"); // Use getItem here
  const token = sessionData ? JSON.parse(sessionData).data.token : null;
  console.log("Token: ", JSON.parse(sessionData!).data.token);
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Cache-Control"] = "no-cache";

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or unauthorized access
      localStorage.removeItem("user"); // Use removeItem here
      window.location.href = "/"; // Redirect to the login page
    } else if (error.response && error.response.status === 403) {
      // Access forbidden
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
      window.location.href = "/unauthorized"; // Redirect to the unauthorized page
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
