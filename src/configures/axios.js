import axios from "axios";
import configs from "./configs";

const request = axios.create();

request.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

request.defaults.timeout = 60000;

request.defaults.baseURL = configs.SERVER_URL;

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      return Promise.reject({
        code: error.response.status,
        message: error.response.data.message,
      }); // eslint-disable-line
    }
    if (error.request)
      return Promise.reject({ message: "No response was received" }); // eslint-disable-line
    return Promise.reject(error);
  }
);

const setToken = (token) => {
  request.defaults.headers.common.Authorization = "Bearer " + token;
  // delete request.defaults.headers.common['Authorization'];
};

export { request, setToken };
