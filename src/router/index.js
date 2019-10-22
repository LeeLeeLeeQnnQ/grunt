import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { getToken } from '@/js/util'


import login from '@/pages/login/login.vue'
import home from '@/pages/home/home.vue'
import search from '@/pages/search/search.vue'
import report from '@/pages/report/report.vue'
import person from '@/pages/person/person.vue'
import showInfo from '@/pages/showInfo/showInfo.vue'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/showInfo',
      name: 'showInfo',
      component: showInfo
    },
  ],
  mode: 'history'
})

const LOGIN_PAGE_NAME = 'login'

// 路由操作
// router.beforeEach((to, from, next) => {
//   next();
//   const token = getToken()
//   if (!token && to.name !== LOGIN_PAGE_NAME) {
//     next({
//       name: LOGIN_PAGE_NAME // 跳转到登录页
//     })
//   } else if (!token && to.name === LOGIN_PAGE_NAME) {
//     // 未登陆且要跳转的页面是登录页
//     next() // 跳转
//   } else if (token && to.name === LOGIN_PAGE_NAME) {
//     next()
//   } else{
//     // 已登录且要跳转的页面是登录页
//     if (store.state.info.hasGetInfo) {
//       next()
//     } else {
//       store.dispatch('setUserInfo').then(res => {
//         if (res.code != 0) {
//           next({
//             name: LOGIN_PAGE_NAME // 跳转到登录页
//           })
//           return
//         }
//         next()
//       })
//     }
//   }
// })



export default router