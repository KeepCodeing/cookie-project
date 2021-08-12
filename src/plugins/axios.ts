import axios from "axios";
import store from "@/store";
import jc from "js-cookie";
import { showMessageBox } from "../utils/utils";

const inc = axios;
inc.defaults.baseURL = "/api";

inc.interceptors.request.use((config) => {
  const token = jc.get("token");
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
    if (status === 401) {
      showMessageBox(
        {
          timeout: 1500,
          type: "错误",
          show: true,
          message: "给我登陆，三回啊三回！",
        },
        store
      );
      return;
    }

    if (status !== 200) {
      let msg = '';
      if (error.response.data.detail) {
        msg = error.response.data.detail.message;
      } else if (status === 500) {
        msg = "服务器错误，请尝试使用备用站！";
      }
      showMessageBox(
        {
          timeout: 1500,
          type: "错误",
          show: true,
          message: msg ? msg : "未知错误，刷新，请w...",
        },
        store
      );
    }
  }
);

export default inc;
