import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Huangjia from '@/views/Huangjia.vue'
import Sijia from '@/views/Sijia.vue'
import Simiao from '@/views/Simiao.vue'
import Xq from '@/views/Xq.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'中华园林'
    }
  },
  {
    path: '/Huangjia',
    name: 'Huangjia',
    component:Huangjia,
    meta:{
      title:'皇家园林'
    }
  },
  {
    path: '/Sijia',
    name: 'Sijia',
    component:Sijia,
    meta:{
      title:'私家园林'
    }
  },
  {
    path: '/Simiao',
    name: 'Simiao',
    component:Simiao,
    meta:{
      title:'寺庙园林'
    }
  },
  {
    path: '/Xq',
    name: 'XQ',
    component:Xq,
    meta:{
      title:'详情'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
