import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseUrl = "https://api.africanapp.store"
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
const getDefaultState = () => {
    return {
        token: '',
        user: {},
        categories: [],
        category: {},
    };
};

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        },
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
        login: ({ commit }, { token, user }) => {
            commit('SET_TOKEN', token);
            commit('SET_USER', user);

            // set auth header
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        },
        // categories
        async getCategories({ commit }) {
            const res = await axios.get(baseUrl + '/api/all-categories')
            commit('GET_CATEGORIES', res);
            return res.data
        },

        //  products
        // All Products
        async getProducts({ commit }) {
            const res = await axios.get(baseUrl + '/api/all-products')
            commit('GET_PRODUCTS', res);
            return res.data
        },

        // Single Product
        async getSingleProduct({ commit }, id) {
            const res = await axios.get(baseUrl + `/api/find-product/${id}`)
            commit('GET_SINGLE_PRODUCT', res)
            return res.data
        },

    },
    getters: {
        categories: state => state.categories,
        products: state => state.products,
        product: state => state.product,
        category: state => state.category,
        isLoggedIn: state => {
            return state.token;
        },
        getUser: state => {
            return state.user;
        },
    },
    modules: {}
})