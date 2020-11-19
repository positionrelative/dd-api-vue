import Vue from 'vue'
import Vuex from 'vuex'
import dragons from './modules/dragons'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    dragons
  },
  strict: debug
})
