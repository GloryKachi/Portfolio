import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "@/assets/styles/main.css";
import './assets/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueAos from 'vue-aos'
import 'aos/dist/aos.css'
import VueTyperPlugin from 'vue-typer'
import 'animate.css'


Vue.use(VueTyperPlugin)
Vue.use(VueAos)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
