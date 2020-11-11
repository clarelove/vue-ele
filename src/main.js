// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Cascader } from 'element-ui'
import Vuex from 'vuex'
Vue.use(Cascader)
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    count: 0,
    item: ['lsdkajf', 'asdasd', 'asdasd']
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
