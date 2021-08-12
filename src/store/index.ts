import { createStore } from "vuex";
import {
  SHOW_MESSAGE_BOX,
  GET_PAGE_IMAGE,
  LOAD_PAGE_IMAGE,
  UPDATE_PAGINATION,
  UPDATE_KEYWORD,
  UPDATE_CAN_BACK,
  LOGIN_ACTION,
  UPDATE_USER_STATUS,
  REGISTER_ACTION,
  LIKE_IMAGE_ACTION,
} from "./type";
import { GlobalProp } from "./props";
import { object2Parma, showMessageBox } from "../utils/utils";
import axios from "../plugins/axios";

export default createStore<GlobalProp>({
  state: {
    search_prop: { keyword: "all", type: "all", join: "OR", pn: 1, limit: 20 },
    message_box_prop: { type: "成功", show: false, timeout: 1500, message: "" },
    illust_list_prop: null,
    can_back: 0,
    use_status_prop: { token: "", isLogin: false },
  },
  mutations: {
    [UPDATE_KEYWORD](state, { keyword, type }) {
      state.search_prop.keyword = keyword;
      state.search_prop.type = type;
      // 搜索默认为第一页
      state.search_prop.pn = 1;
    },
    [SHOW_MESSAGE_BOX](state, payload) {
      state.message_box_prop = payload;
      setTimeout(() => (state.message_box_prop.show = false), payload.timeout);
    },
    [LOAD_PAGE_IMAGE](state, payload) {
      state.illust_list_prop = payload;
    },
    [UPDATE_PAGINATION](state, { page }) {
      state.search_prop.pn = page;
    },
    [UPDATE_CAN_BACK](state, { cnt }) {
      state.can_back += cnt;
    },
    [UPDATE_USER_STATUS](state, status) {
      state.use_status_prop = status;
    },
  },
  actions: {
    async [GET_PAGE_IMAGE]({ commit }, parma) {
      const { data } = await axios({
        method: "get",
        url: `/search?${object2Parma(parma.value)}`,
      });
      commit(LOAD_PAGE_IMAGE, data);
    },
    async [LOGIN_ACTION]({ commit }, userinfo) {
      try {
        const { data } = await axios({
          method: "post",
          url: "/auth/login",
          data: userinfo,
        });
        const token = data.token_type + " " + data.access_token;
        sessionStorage.setItem("token", token);
        commit(UPDATE_USER_STATUS, { isLogin: true, token });
      } catch {}
    },
    async [REGISTER_ACTION]({ commit }, userinfo) {
      try {
        const { data } = await axios({
          method: "post",
          url: "/auth/register",
          data: userinfo,
        });
        showMessageBox(
          {
            timeout: 500,
            type: "成功",
            message: "注册成功，登陆，请（懒狗）...",
            show: true,
          },
          this
        );
      } catch {}
    },
    async [LIKE_IMAGE_ACTION]({ commit }, sid) {
      try {
        await axios({
          method: "post",
          url: '/favorite',
          data: sid,
        });
      } catch {}
    },
  },
  modules: {},
});
