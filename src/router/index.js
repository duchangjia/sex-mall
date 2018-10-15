import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routers = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve),
      meta: {
        title: '特色酒店'
      }
    },
    {
      path: '/detail',
      name: 'index',
      component: resolve => require(['@/pages/detail'], resolve),
      meta: {
        title: '特色酒店'
      }
    }
  ]
})
routers.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default routers
