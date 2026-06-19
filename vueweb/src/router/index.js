import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载：按需分块，首屏更快
const Home = () => import('@/views/Home.vue')
const Huangjia = () => import('@/views/Huangjia.vue')
const Sijia = () => import('@/views/Sijia.vue')
const Simiao = () => import('@/views/Simiao.vue')
const Xq = () => import('@/views/Xq.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '中华园林', transition: 'fade' }
  },
  {
    path: '/Huangjia',
    name: 'Huangjia',
    component: Huangjia,
    meta: { title: '皇家园林', transition: 'fade' }
  },
  {
    path: '/Sijia',
    name: 'Sijia',
    component: Sijia,
    meta: { title: '私家园林', transition: 'fade' }
  },
  {
    path: '/Simiao',
    name: 'Simiao',
    component: Simiao,
    meta: { title: '寺庙园林', transition: 'fade' }
  },
  {
    path: '/Xq',
    name: 'XQ',
    component: Xq,
    meta: { title: '详情', transition: 'fade' }
  }
]

const router = new VueRouter({
  routes,
  // 路由懒加载已经按需分块，不需要 history 模式以兼容静态部署
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  }
})

export default router
