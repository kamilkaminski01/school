import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = typeof to.meta?.title === 'string' ? to.meta.title : 'School | Kamil Kamiński'
})

export default router
