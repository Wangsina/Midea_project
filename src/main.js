import Vue from 'vue'

import VueRouter from 'vue-router'

import App from './App.vue'

import router from './js/router.js'

//引入了midea的icon的css文件
import './assets/css/mideaIcon.css'

//清全局样式
import './assets/css/base.css'

import axios from 'axios'

//在客户端使用axios
Vue.prototype.$http = axios

//引入mint ui组件
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

//配置每个实例对象可以使用vue
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
