/*
 * @Description: 
 * @Autor: luckymiaow
 * @Date: 2020-12-28 17:11:28
 * @LastEditors: luckymiaow
 * @LastEditTime: 2020-12-29 21:29:46
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Sheet',
    component: () => import('../views/Sheet.vue')
  },  
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('../views/Canvas.vue')
  },  
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
