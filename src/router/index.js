import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载 https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
const Menu = () => import('@/components/Menu.vue')
const Refresh = () => import('@/components/Refresh.vue')
const MentalArithmetic = () => import('@/components/games/MentalArithmetic.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
      meta: {title: '林万程的脑锻炼'},
    },
    {
      path: '/Refresh',
      name: 'Refresh',
      component: Refresh,
      meta: {title: '加载中'},
    },
    {
      path: '/MentalArithmetic',
      name: 'MentalArithmetic',
      component: MentalArithmetic,
      meta: {title: 'Mental Arithmetic 心算'},
    },
  ]
})