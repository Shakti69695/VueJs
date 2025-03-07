import axios from 'axios'
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      user: {},
      bagItems: [],
      allProducts: [],
      username: '',
      password: '',
    }
  },
  actions: {
    async fetchUser() {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username: this.username,
          password: this.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          // withCredentials:true
        },
      )
      this.user = response.data
    },
    async fetchProducts() {
      const response = await axios.get('https://dummyjson.com/products?limit=100') 
      console.log(response.data.products);
       
      this.allProducts = response.data.products
    },
    setUsername(username) {
      this.username = username
    },
    setPassword(password) {
      this.password = password
    },
  },
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => (state.user.username ? true : false),
    getUsername: (state) => state.username,
    getPassword: (state) => state.password,
    getAllProducts: (state) => state.allProducts,
  },
})
