import { createStore } from 'vuex'
import { GET_PAGE_IMAGE, LOAD_PAGE_IMAGE } from './type'
import axios from '../plugins/axios'

export default createStore({
  state: {
    imageUrl: ''
  },
  mutations: {
    [LOAD_PAGE_IMAGE](state, payload) {
      state.imageUrl = payload;
    }
  },
  actions: {
    [GET_PAGE_IMAGE]({ commit }) {
      axios.get('/random').then(res => commit(LOAD_PAGE_IMAGE, res.data.message));
    }
  },
  modules: {
  }
})
