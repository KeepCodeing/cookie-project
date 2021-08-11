import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const index = {
  name: 'index',
  path: '/index',
  component: () => import('../views/index.vue'),
}

const login = {
  name: 'login',
  path: '/login',
  component: () => import('../views/Login.vue')
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  index,
  login
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
