import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'; // Importo Vuetify 
import router from './router'; // Importo Vue Router 
 
Vue.config.productionTip = false
 
Vue.use(vuetify);
 
new Vue({
  vuetify, // Vuetify 
  router, // Vue Router
  render: h => h(App)
}).$mount('#app');