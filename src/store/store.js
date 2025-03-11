import axios from 'axios'
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      user: {},
      isUserLoggedIn: false,
      bagItems: [],
      allProducts: [],
      username: '',
      password: '',
      query: '',
      product: {},
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
      this.allProducts = response.data.products
    },

    async fetchQueryProducts(query) {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
      this.allProducts = response.data.products
    },
    async categoryProducts(category) {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`)
      this.allProducts = response.data.products
    },
    async fetchProduct(id) {
      const response = await axios.get(`https://dummyjson.com/products/${id}`)
      console.log(response.data)

      this.product = response.data
    },
    addToCart(product) {
      const existingItem = this.bagItems.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.bagItems.push({ ...product, quantity: 1 })
      }
    },
    removeFromBag(id) {
      this.bagItems = this.bagItems.filter((item) => item.id !== id) // Remove the item by id
    },
    setUsername(username) {
      this.username = username
    },
    setPassword(password) {
      this.password = password
    },
    setQuery(query) {
      this.query = query
    },
    setLoginStatus(status) {
      this.isUserLoggedIn = status // Update the login status
    },
  },
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => (state.user.username ? true : false),
    getUsername: (state) => state.username,
    getPassword: (state) => state.password,
    getAllProducts: (state) => state.allProducts,
    getProduct: (state) => state.product,
  },
  persist: true,
})
