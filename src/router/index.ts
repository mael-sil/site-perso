import { createRouter, createWebHashHistory } from 'vue-router'
import { getRoutes } from '../utils/pages'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: getRoutes(),
  scrollBehavior() {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 })
    })
  }
})

export default router
