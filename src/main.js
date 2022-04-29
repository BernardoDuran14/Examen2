import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import Vue from "@vue/cli-plugin-eslint/eslintOptions"; // Importo Vue Router

Vue.config.productionTip = false
Vue.use(vuetify);

new Vue({
    vuetify, // Vuetify
    router, // Vue Router
    render: h => h(App)
}).$mount('#app')

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')







