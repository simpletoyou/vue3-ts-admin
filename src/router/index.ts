/*
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-29 13:03:27
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-31 15:24:34
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'goods',
        name: 'goods',
        meta: {
          isShow: true,
          title: '商品列表'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/GoodsView.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          isShow: true,
          title: '用户列表'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
