import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    meta: { title: 'Projects | Kamil Kamiński' },
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/projects/monitoring-system',
    name: 'monitoring-system',
    meta: { title: 'Monitoring System' },
    component: () => import('../projects/MonitoringSystem.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: { title: 'Blog | Kamil Kamiński' },
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/blog/about',
    name: 'about',
    meta: { title: 'About | Kamil Kamiński' },
    component: () => import('../blogs/AboutMe.vue')
  },
  {
    path: '/blog/django-react-chat',
    name: 'django-react-chat',
    meta: { title: 'Chat in Django & React' },
    component: () => import('../blogs/DjangoReactChat.vue')
  }
]
