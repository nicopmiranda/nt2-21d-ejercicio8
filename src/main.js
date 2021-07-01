import Vue from 'vue';
import App from './App.vue';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* https://router.vuejs.org/ */
/* npm i vue-router */
import { router } from './router';

/* https://www.npmjs.com/package/vue-form */
/* npm i vue-form */
import './form';

/* https://github.com/axios/axios */
/* npm i axios vue-axios */
import './httpClient';

/* https://vuex.vuejs.org/#what-is-a-state-management-pattern */
/* npm i vuex */
import store from './store'

import './globalMixins';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

