import { createStore } from "vuex";
import {
  SHOW_MESSAGE_BOX,
  GET_PAGE_IMAGE,
  LOAD_PAGE_IMAGE,
  UPDATE_PAGINATION,
  UPDATE_KEYWORD
} from "./type";
import { GlobalProp } from "./props";
import { object2Parma } from "../utils/utils";
import axios from "../plugins/axios";

export default createStore<GlobalProp>({
  state: {
    search_prop: { keyword: "all", type: "all", join: "OR", pn: 1, limit: 20 },
    message_box_prop: { type: "成功", show: false, timeout: 1500, message: "" },
    illust_list_prop: null,
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
  },
  actions: {
    async [GET_PAGE_IMAGE]({ commit }, parma) {
      const { data } = await axios({
        method: "get",
        url: `/search?${object2Parma(parma.value)}`,
      });
      commit(LOAD_PAGE_IMAGE, data);
    },
  },
  modules: {},
});
