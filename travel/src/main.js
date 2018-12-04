// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 没有后缀的现寻找vue,js，json后缀
import App from './App'
import router from './router'
import 'styles/reset.css'
// 移动端的真正的1px
import 'styles/border.css'
// 因为每个页面都要引入iconfont
import 'styles/iconfont.css'
import fastClick from 'fastclick'
Vue.config.productionTip = false

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
