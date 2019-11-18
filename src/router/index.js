import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import { loggedInGuard } from './guards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: loggedInGuard
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import(/* webpackChunkName: "Usuarios" */ '../views/usuarios/Usuarios.vue'),
    beforeEnter: loggedInGuard
  },


  /* Exceptions */
  { path: "/", redirect: "/home" },
  {
    path: "/403",
    name: "403",
    component: () => import(/* webpackChunkName: "403" */ "../views/P403.vue")
  },
  { path: "*", redirect: "/403" }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router
