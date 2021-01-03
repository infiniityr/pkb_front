import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import marked from './plugins/marked'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'http://localhost:8000/api'

Vue.use(marked)

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify
}).$mount('#app')
