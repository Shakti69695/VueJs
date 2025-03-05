import { createStore } from 'vuex'
import todos from './modules/todos'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  modules: {
    todos
  },
  plugins:[createPersistedState()]
})
