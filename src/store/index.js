import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soalList: []
  },
  mutations: {
    insertSoal (state, payload) {
      state.soalList = payload
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
    }
  },
  modules: {
  }
})
