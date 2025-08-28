import { createRouter, createWebHashHistory } from 'vue-router'
import { getRoutes } from '../utils/pages'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: getRoutes(),
})

export default router
