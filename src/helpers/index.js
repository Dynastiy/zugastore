// const baseUrl = "https://api.africanapp.store"

import axios from 'axios';

const url = 'https://api.africanapp.store/api/';

export default {
    async login(credentials) {
        const response = await axios
            .post(url + 'auth/signin/', credentials);
        return response.data;
    },
    async forgotPassword(credentials) {
        const response = await axios
            .post(url + 'auth/forgot-password/', credentials);
        return response.data;
    },
    async resetPassword(credentials) {
        const response = await axios
            .post(url + 'auth/reset-password/', credentials);
        return response.data;
    },
    async register(credentials) {
        const response = await axios
            .post(url + 'auth/signup/', credentials);
        return response.data;
    },
    async getProducts() {
        const response = await axios
            .get(url + 'all-products');
        return response.data;
    },
    async getDevProducts() {
        const response = await axios
            .get(url + 'dev-products/');
        return response.data;
    },
    async getTags() {
        const response = await axios
            .get(url + 'all-tags/');
        return response.data;
    },
    async getCategories() {
        const response = await axios
            .get(url + 'all-categories/');
        return response.data;
    },
    async getUser() {
        const response = await axios
            .get(url + 'auth/user-profile/');
        return response.data;
    },
    async createProduct(payload) {
        const response = await axios
            .post(url + 'create-product/', payload);
        return response.data;
    },
    async getProductDetails(id) {
        const response = await axios.get(`${url}find-product/${id}`);
        return response.data
    },

};