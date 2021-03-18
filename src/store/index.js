import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
  },
  mutations: {
    addRoom (state, payload) {
      console.log(payload)
      state.rooms = payload
    }
  },
  actions: {
    SOCKET_updatedRoom (context, payload) {
      context.commit('addRoom', payload);
    }
  },
  modules: {
  }
})
