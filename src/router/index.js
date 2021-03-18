import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lobby',
    name: 'lobby',
    meta: {
      auth: true
    },
    component: () => import('../views/lobby.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      auth: false
    }
  },
  {
    path: '/rules',
    name: 'Rules',
    meta: {
      auth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rules.vue')
  },
  {
    path: '/plays',
    name: 'Plays',
    meta: {
      auth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Plays.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.name
  if (isLogged) next()
  else {
    if (!to.meta.auth) next()
    else next('/login')
  }
})

export default router
