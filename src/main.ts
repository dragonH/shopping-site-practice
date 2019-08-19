import Vue from 'vue';
import vuetify from './plugins/vuetify.js';
import App from './App.vue';
import router from './routers/index.router';
import store from './stores/index.store';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
