import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';

import VueSweetalert2 from 'vue-sweetalert2';
import GSignInButton from 'vue-google-signin-button'

import 'buefy/dist/buefy.css'
import 'sweetalert2/dist/sweetalert2.min.css';
 

Vue.use(VueSweetalert2);
Vue.use(GSignInButton)
Vue.use(Buefy)
new Vue(App).$mount('#app');

