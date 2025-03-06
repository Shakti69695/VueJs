import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './components/Login.vue'
import store from './store'
import Profile from './pages/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['login/isLoggedIn']

  if (to.path === '/login' && isLoggedIn) {
    next('/profile')
  } else if (to.path === '/profile' && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

createApp(App).use(router).use(store).mount('#app')
