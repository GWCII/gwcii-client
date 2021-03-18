import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: () => import('../views/lobby.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      auth: true
    }
  },
  {
    path: '/lobby',
    name: 'Lobby',
    meta: {
      auth: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    meta: {
      auth: false
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
      auth: false
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
    if (to.meta.auth) next()
    else next('/login')
  }
})

export default router
