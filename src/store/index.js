import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sesion: null
  },
  mutations: {

    SET_SESION(state, sesion) {
      state.sesion = sesion
    },

  },
  actions: {

    ingresar(contexto, sesion) {
      contexto.commit('SET_SESION', sesion);
      window.sessionStorage.setItem('nombre', sesion.nombre);
      window.sessionStorage.setItem('rol', sesion.rol);
      window.sessionStorage.setItem('token', sesion.token);
      router.push('/home');
    },

    salir(contexto) {
      contexto.commit('SET_SESION', null);
      window.sessionStorage.removeItem('nombre');
      window.sessionStorage.removeItem('rol');
      window.sessionStorage.removeItem('token');
      router.push('/login');
    },

    restaurarSesion(contexto) {
      if (window.sessionStorage.getItem('token') !== null) {
        const sesion = {
          nombre: window.sessionStorage.getItem('nombre'),
          rol: window.sessionStorage.getItem('rol'),
          token: window.sessionStorage.getItem('token')
        }
        
        contexto.commit('SET_SESION', sesion);
      }
      else if (router.currentRoute.name != 'Login') contexto.dispatch('salir');
    }

  }
})
