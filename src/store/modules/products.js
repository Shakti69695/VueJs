const state = {
  products: [],
};

const getters = {
  products: (state) => state.products,
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  deleteProduct: (state, index) => {
    state.products.splice(index, 1);
  },
  addProduct: (state, newProduct) => {
    // Add new product to the state
    state.products.push(newProduct);
  },
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    commit("setProducts", data.products);
  },
  deleteProduct({ commit }, index) {   
    commit("deleteProduct", index);
  },
  addProduct({ commit }, newProduct) {    
    commit("addProduct", newProduct);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
