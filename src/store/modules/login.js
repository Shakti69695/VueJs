import axios from "axios"

const state = {
  username: '',
  password: '',
  user: {},
  error: false,
  login_progress: false,
}
const getters = {
  getUser: (state) => state.user,
  isLoggedIn: (state) => (state.user.username ? true : false),
}
const actions = {
  async login({ commit }, payload) {
   try {
    commit('login_progress',true)
    const response = await axios.post("https://reqres.in/api/login",payload)
    // delete payload.password;
    payload.token= response;
    commit("login", payload);
    commit("setUsername", "");
    commit("setPassword", "");
    commit("login_progress", false);
   } catch (error) {
    commit("login_progress", false);
    commit("login_fail", error)
   }
  },
  logout({ commit }) {
    commit('logout')
  },
}
const mutations = {
  login: (state, data) => {
    state.user = data
  },
  logout: (state) => {
    state.user = {}
  },
  setUsername: (state, username) => {
    state.username = username
  },
  setPassword: (state, password) => {
    state.password = password
  },
  login_fail: (state, data) => {
    state.error = data
  },
  login_progress: (state, data) => {
    state.login_progress = data
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
