import Vue from 'vue'
import Vuex from 'vuex'
import {GET_PAGE_IMAGES, LOAD_PAGE_IMAGES} from "./type";
import axios from '../plugins/axios'
import object2arg from "../utils/object2arg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    totalPages: 1,
  },
  mutations: {
    [LOAD_PAGE_IMAGES](state, res) {
      state.images = res.images;
      state.totalPages = res.total;
    },
  },
  actions: {
    [GET_PAGE_IMAGES](context, payload) {
      axios({
        url: '/api/search?' + object2arg(payload),
        method: 'get'
      }).then(res => context.commit(LOAD_PAGE_IMAGES, {
        images: res.data.data,
        total: Math.ceil(res.data.total / payload['limit'])
      }));
    },
  },
  modules: {
  }
});
