import Vue from 'vue'
import Vuex from 'vuex'
import {GET_PAGE_IMAGES, LOAD_PAGE_IMAGES} from "./type";
import axios from '../plugins/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    [LOAD_PAGE_IMAGES](state, res) {
      state.images = res;
    }
  },
  actions: {
    [GET_PAGE_IMAGES](context, payload) {
      axios({
        url: '/illust?pn=' + payload['page'] + '&limit=' + payload['limit'],
        method: 'get'
      }).then(res => context.commit(LOAD_PAGE_IMAGES, res.data));
    }
  },
  modules: {
  }
});
