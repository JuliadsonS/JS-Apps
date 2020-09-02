import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home:{
      name: "JSmart"
    }
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  actions: {
  },
  modules: {
  }
})
