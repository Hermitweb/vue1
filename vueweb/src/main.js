import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/** 引入element */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import "@/assets/css/quanju.css"
import "@/assets/css/animate.css"
import "@/assets/css/vivify.min.css"

Vue.use(ElementUI);
Vue.config.productionTip = false


Vue.prototype.tubase='http://localhost/vuetu/'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  /*路由发生变化修改页面title*/ 
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

// Vue.directive('title',{
//   inserted:function(el,binding){
//     document.title = el.dataset.title
//   }
// }) 