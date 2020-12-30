/*
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-28 17:11:28
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-30 09:27:04
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './tool-component'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
