import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import Toasted from 'vue-toasted';
import Breadcrumbs from './components/bread_crumbs'
import { store } from './store';
import VueFeather from 'vue-feather';
import VueApexCharts from 'vue-apexcharts';

Vue.use(Toasted,{
  iconPack: 'fontawesome'
});

import PxCard  from './components/Pxcard.vue'
Vue.component(PxCard.name, PxCard)

// Import Theme scss
import './assets/scss/app.scss'

import Common from './mixin';
Vue.use(Common);

Vue.use(VueFeather);
Vue.use(BootstrapVue)
Vue.component('Breadcrumbs', Breadcrumbs)
Vue.component('apexchart', VueApexCharts);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')