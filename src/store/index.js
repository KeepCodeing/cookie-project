import Vue from 'vue'
import Vuex from 'vuex'
import {GET_PAGE_IMAGES, GET_TOTAL_PAGES, LOAD_PAGE_IMAGES, LOAD_TOTAL_PAGES} from "./type";
import axios from '../plugins/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    totalPages: 1,
  },
  mutations: {
    [LOAD_PAGE_IMAGES](state, res) {
      state.images = res;
    },
    [LOAD_TOTAL_PAGES](state, res) {
      state.totalPages = Math.ceil(res);
    }
  },
  actions: {
    [GET_PAGE_IMAGES](context, payload) {
      axios({
        url: '/illust?pn=' + payload['page'] + '&limit=' + payload['limit'],
        method: 'get'
      }).then(res => context.commit(LOAD_PAGE_IMAGES, res.data));
    },
    [GET_TOTAL_PAGES](context, payload) {
      axios({
        url: '/total',
        method: 'get'
      }).then(res => context.commit(LOAD_TOTAL_PAGES, res.data.total / payload['limit'] ));
    }
  },
  modules: {
  }
});
