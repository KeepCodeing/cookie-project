import Vue from 'vue'
import Vuex from 'vuex'
import {GET_PAGE_IMAGES, GET_SEARCH_PAGES, LOAD_PAGE_IMAGES, LOAD_SEARCH_PAGES} from "./type";
import axios from '../plugins/axios'
import object2arg from "../utils/object2arg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    totalPages: 1,
    isLoading: false,
  },
  mutations: {
    [LOAD_PAGE_IMAGES](state, res) {
      state.images = res.images;
      state.totalPages = res.total;
      state.isLoading = false;
    },
    [LOAD_SEARCH_PAGES](state, res) {
      state.images = res.images;
      state.totalPages = res.total;
      state.isLoading = false;
    }
  },
  actions: {
    [GET_PAGE_IMAGES](context, payload) {
      this.state.isLoading = true;
      axios({
        url: '/api/search?' + object2arg(payload),
        method: 'get'
      }).then(res => context.commit(LOAD_PAGE_IMAGES, {
        images: res.data.data,
        total: Math.ceil(res.data.count / payload['limit'])
      }));
    },

    [GET_SEARCH_PAGES](context, payload) {
      this.state.isLoading = true;
      axios({
        url: '/api/search?' + payload['url'],
        method: 'get'
      }).then(res => context.commit(LOAD_SEARCH_PAGES, {
        images: res.data.data,
        total: Math.ceil(res.data.count / payload['limit'])
      }))
    }
  },
  modules: {
  }
});
