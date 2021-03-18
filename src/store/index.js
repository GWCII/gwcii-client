import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soalList: [],
    rooms: []
  },
  mutations: {
    insertSoal (state, payload) {
      state.soalList = payload
    },
    addRoom (state, payload) {
      console.log(payload)
      state.rooms = payload
    }
  },
  actions: {
    fetchSoal(context) {
      axios
        .get('/soal')
        .then(({data}) => {
          context.commit("insertSoal", data)
        })
        .catch((err) => {
          console.log(err);
        })
      },
      SOCKET_updatedRoom (context, payload) {
        context.commit('addRoom', payload);
      }    
  },
  modules: {
  }
})
