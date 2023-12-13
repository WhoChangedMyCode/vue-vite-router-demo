import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // createWebHistory模式在部署tune時需要配合後端服務
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // history: createWebHashHistory()
  // https://router.vuejs.org/zh/api/#Functions-createWebHashHistory
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      // 嵌套路由
      children: [
        {
          path: 'one',
          name: 'aboutOne',
          component: () => import('@/views/about/AboutOneView.vue'),
        },
        {
          path: 'two',
          name: 'aboutTwo',
          component: () => import('@/views/about/AboutTwoView.vue'),
        },
        {
          path: 'three',
          name: 'aboutThree',
          component: () => import('@/views/about/AboutThreeView.vue'),
        },
      ],
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('@/views/AddressView.vue'),
    },
    // 動態路由匹配
    {
      path: '/:id',
      name: 'userId',
      component: () => import('@/views/DynamicView.vue'),
    },
    {
      // 404Not Found通常會放在最後面，和放在最前面效果是不一樣的
      // 這個pathMatch不是固定的寫法，可以自定義
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
