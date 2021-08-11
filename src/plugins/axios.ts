import axios from "axios";
import store from "@/store";
import { showMessageBox } from "../utils/utils";

const inc = axios;
inc.defaults.baseURL = "/api";

inc.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

inc.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const status = error.response.status;

    if (status !== 200) {
      const msg = error.response.data.detail.message;
      showMessageBox(
        {
          timeout: 1500,
          type: "错误",
          show: true,
          message: msg ? msg : '未知错误，刷新，请w...',
        },
        store
      );
    }
  }
);

export default inc;
