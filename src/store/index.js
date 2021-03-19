import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    soalList: [],
    roomDetail: [],
    soal: [],
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
    },
    SOCKET_initSoal (state, soal) {
      state.soal = soal
    },
    updateScore (state, payload) {
      let userIndex = state.roomDetail.users.findIndex(user => user.username === payload.username) 
      state.roomDetail.users[userIndex].score = payload.score
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
      },
      SOCKET_updateScore (context, payload) {
        context.commit('updateScore', payload)
      }
  },
  modules: {
  }
})
