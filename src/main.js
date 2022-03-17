import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

// console.log(`Bearer ${ store.state.token }`);
// import 'assets/css/main.css'
if (store.state.token === '') {
    console.log('Logged Out');
}


// import Swal from 'sweetalert2'

import Toastify from 'toastify-js'

Vue.use(Toastify)

import "toastify-js/src/toastify.css"

// console.log(`Bearer ${ store.state.token }`);
// import 'assets/css/main.css'
if (store.state.token === '') {
    console.log('Logged Out');
}



var ifConnected = window.navigator.onLine;
if (ifConnected) {
    console.log('Connection available');

} else {
    alert('No Internet connected detected');
    Toastify({
        text: "No Internet Connection",
        className: "info",
        style: {
            background: "red",
        }
    }).showToast();
}

Vue.config.ignoredElements = [/^ion-/]

import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MMMM DD YYYY')
    }
});

Vue.config.productionTip = false

new Vue({
    router,
    axios,
    store,
    render: h => h(App)
}).$mount('#app')