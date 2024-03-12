import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    meta: { title: 'Blog | Kamil Kamiński' },
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    meta: { title: 'Projects | Kamil Kamiński' },
    component: () => import('../views/ProjectsView.vue')
  }
]
