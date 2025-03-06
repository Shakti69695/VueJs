import { createStore } from 'vuex'
import login from './modules/login'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  modules: {
  login,
  },
  plugins:[createPersistedState()]
})