import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import router from './router'
import fetch from './request/fetch'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
Vue.use(fetch)
new Vue({
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
