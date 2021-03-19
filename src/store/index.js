import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    soalList: [],
    roomDetail: []
  },
  mutations: {
    insertSoal (state, payload) {
      state.soalList = payload
    },
    addRoom (state, payload) {
      state.rooms = payload
    },
    roomDetail (state, payload) {
      state.roomDetail = payload
    }
  },
  actions: {
      SOCKET_updatedRoom (context, payload) {
        context.commit('addRoom', payload);
      },    
      SOCKET_getRooms (context, payload) {
        context.commit('addRoom', payload);
      },
      SOCKET_roomDetail (context, payload) {
        context.commit('roomDetail', payload);
      }
  },
  modules: {
  }
})
