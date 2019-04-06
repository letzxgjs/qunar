import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: window.localStorage.getItem('city') || '广丰'
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      window.localStorage.setItem('city', city)
    }
  },
  actions: {}
})
