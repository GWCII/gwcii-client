import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import VueFakeInput from 'vue-fake-input';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.use(VueFakeInput);
Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000',
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
