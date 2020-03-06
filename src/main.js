// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import 'vant/lib/index.css'
import { PullRefresh, Toast } from 'vant'

Vue.config.productionTip = false

Vue.use(PullRefresh)
Vue.use(Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
