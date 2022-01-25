import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseUrl = "https://zuga.divcommanifold.com"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
  products: [],
  product: {},
  category:null
  },
  mutations: {
    GET_CATEGORIES(state, data) {
      state.categories = data;
  },
  GET_SINGLE_CATEGORY(state, data) {
    state.category = data;
},

  // Products
  GET_PRODUCTS(state, data) {
      state.products = data;
  },
  GET_SINGLE_PRODUCT(state, data) {
      state.product = data;
  },
  },
  actions: {
    // categories
  async getCategories({ commit }) {
    const res = await axios.get(baseUrl+'/api/all-categories')
    commit('GET_CATEGORIES', res);
    return res.data
    
    
},
// Single Category products
// async getByCategory({ commit }, id) {
//   const res = await axios.get(baseUrl+`/api/find-category/${id}`)
//   commit('GET_SINGLE_CATEGORY', res)
//   return res.data
// },

//  products
// All Products
async getProducts({ commit }) {
    const res = await axios.get(baseUrl+'/api/all-products')
    commit('GET_PRODUCTS', res);
    return res.data
},

// Single Product
async getSingleProduct({ commit }, id) {
    const res = await axios.get(baseUrl+`/api/find-product/${id}`)
    commit('GET_SINGLE_PRODUCT', res)
    return res.data
},
/**** Top tier Admin ****/
async getUsers({ commit }) {
    const res = await this.$axios.$get('/loanees')
    commit('GET_USERS', res);
    return res
},
async getUser({ commit }, id) {
    const res = await this.$axios.$get(`/loanees/${id}`)
    commit('GET_SINGLE_USER')
    return res
},
async getAdmins({ commit }) {
    const res = await this.$axios.$get('/users')
    commit('GET_ADMINS', res);
    return res
},
async getAdmin({ commit }, id) {
    const res = await this.$axios.$get(`/users/${id}`)
    commit('GET_SINGLE_ADMIN')
    return res
},
async createAdmin({ dispatch }, { payload }) {
    const res = await this.$axios.$post('/users', payload)
    dispatch('CREATE_ADMIN')
    return res
},
async getRoles({ commit }) {
    const res = await this.$axios.$get('/roles')
    commit('GET_ROLES', res);
    return res
},
async addContact({ dispatch }, { payload }) {
    const res = await this.$axios.$post('/campaignx/create', payload)
    dispatch('addContact')
    return res
},
async getLoans({ commit }) {
    const res = await this.$axios.$get('/loans')
    commit('GET_LOANS', res);
    return res
},
async getSuperAnalytics({ commit }) {
    const res = await this.$axios.$get('/dashboards')
    commit('SUPER_ANALYTICS', res);
    console.log(res);
    return res

},


// For Admins and Sales Reps
async getMyUsers({ commit }) {
    const res = await this.$axios.$get('loanees/my-loanees')
    commit('GET_MY_USERS', res);
    return res
},
async createUser({ dispatch }, { payload }) {
    const res = await this.$axios.$post('/loanees', payload)
    dispatch('CREATE_USER')
    return res
},
async getLoanCategories({ commit }) {
    const res = await this.$axios.$get('/categories')
    commit('GET_LOAN_CATEGORIES')
    return res
},
async addLoan({ dispatch }, { payload }) {
    const res = await this.$axios.$post('/loans', payload)
    dispatch('CREATE_LOAN')
    return res
},
  },
  getters: {
    categories: state => state.categories,
    products: state => state.products,
    product: state => state.product,
    category: state => state.category
  },
  modules: {
  }
})


