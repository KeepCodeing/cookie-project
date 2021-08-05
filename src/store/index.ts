import { createStore } from 'vuex'
import { SEARCH_PROP_UPDATE, SHOW_MESSAGE_BOX } from './type'
import {  GlobalProp } from './props'
import { showMessageBox } from '../utils/utils'
import axios from '../plugins/axios'

export default createStore<GlobalProp>({
  state: {
    search_prop: { keyword: '', tag: true },
    message_box_prop: { type: '成功', show: false, timeout: 1500, message: '' }
  },
  mutations: {
    [SEARCH_PROP_UPDATE](state, { search_data }) {
      state.search_prop = search_data;
      
      showMessageBox({ type: '成功', message: '成功搜索xx标签/编号的静画', timeout: 1500, show: true }, this);
    },
    [SHOW_MESSAGE_BOX](state, payload) {
      state.message_box_prop = payload;
      setTimeout(() => state.message_box_prop.show = false, payload.timeout)
    }
  },
  actions: {

  },
  modules: {
  }
})
