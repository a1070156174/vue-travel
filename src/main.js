/*
 * @Author: your name
 * @Date: 2020-08-20 21:28:32
 * @LastEditTime: 2020-08-22 10:34:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \travle\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  './assets/styles/border.css'
import './assets/styles/reset.css'
import FastClick from 'fastclick'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios';
import QS from 'qs'
import '../src/mock/mock.js'


Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.prototype.axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
