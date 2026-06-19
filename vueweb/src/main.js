import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/** 引入 element */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import '@/assets/css/quanju.css'
import '@/assets/css/animate.css'
import '@/assets/css/vivify.min.css'

// 自定义指令
import imgLazy from '@/directives/img-lazy'

Vue.use(ElementUI)
Vue.directive('img-lazy', imgLazy)

Vue.config.productionTip = false

// 全局基础路径 - 使用相对路径，走 vue.config.js 的代理
Vue.prototype.tubase = '/vuetu/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
