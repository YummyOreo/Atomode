import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('../views/Board.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
