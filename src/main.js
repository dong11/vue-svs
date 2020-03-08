// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import 'vant/lib/index.css'
import {
  PullRefresh, Toast,
  Swipe, SwipeItem
} from 'vant'

Vue.config.productionTip = false

Vue.use(PullRefresh)
  .use(Toast)
  .use(Swipe)
  .use(SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
