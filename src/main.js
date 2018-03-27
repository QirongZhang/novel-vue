import Vue from 'vue'
import App from './app'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios"
// import Layout from './components/layout'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
