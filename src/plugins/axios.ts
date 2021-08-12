import axios from "axios";
import store from "@/store";
import jc from 'js-cookie'
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

    if (status === 200) {
      
      // showMessageBox(
      //   {
      //     timeout: 700,
      //     type: isFav ? "成功" : "警告",
      //     show: true,
      //     message: isFav ? "静画，喜欢！" : "已经坏掉了，我的心意（取消喜欢成功）...",
      //   },
      //   store
      // );
    }

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
      const msg = error.response.data.detail.message;
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
