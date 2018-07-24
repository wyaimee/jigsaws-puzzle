import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [types.SET_INCREMENT] (state, payload) {
      state.count += payload
    },
    [types.SET_DECREMENT] (state, payload) {
      state.count -= payload
    }
  }
})

export default store
