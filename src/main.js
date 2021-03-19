import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import VueFakeInput from 'vue-fake-input';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueFakeInput);
Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'https://gwcii-gr6.herokuapp.com/',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
