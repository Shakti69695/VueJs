import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Dashboard from './pages/Dashboard.vue'
import ItemView from './pages/ItemView.vue'
import Bag from './pages/Bag.vue'
import Checkout from './pages/Checkout.vue'
import Login from './pages/Login.vue'

const pinia = createPinia()
// createApp(App).mount('#app')

const routes = [
  { path: '/', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/item', component: ItemView },
  { path: '/bag', component: Bag },
  { path: '/checkout', component: Checkout },
  { path: '/itemview', component: ItemView },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


// router.beforeEach((to, from, next) => {
//   // const isLoggedIn = store.getters['login/isLoggedIn']

//   if (to.path === '/login' && isLoggedIn) {
//     next('/profile')
//   } else if (to.path === '/profile' && !isLoggedIn) {
//     next('/login')
//   } else {
//     next()
//   }
// })
// Create app instance
const app = createApp(App)

// Use Pinia and Router before mounting
app.use(router)
app.use(pinia)

// Finally mount the app
app.mount('#app')
// createApp(App).use(router).use(pinia).mount('#app')
