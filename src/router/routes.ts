import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { blogs, projects } from '@/utils/consts'

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
    path: '/projects/job-board',
    name: 'job-board',
    meta: { title: 'Job Board', tutorial: projects.jobBoard.tutorial },
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/projects/monitoring-system',
    name: 'monitoring-system',
    meta: { title: 'Monitoring System', tutorial: projects.monitoringSystem.tutorial },
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/projects/development-forum',
    name: 'development-forum',
    meta: { title: 'Development Forum', tutorial: projects.developmentForum.tutorial },
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/projects/recommendations-system',
    name: 'recommendations-system',
    meta: { title: 'Recommendations System', tutorial: projects.recommendationsSystem.tutorial },
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: { title: 'Blog | Kamil Kamiński' },
    component: () => import('../views/BlogsView.vue')
  },
  {
    path: '/blog/about',
    name: 'about',
    meta: { title: 'About | Kamil Kamiński', tutorial: blogs.about.tutorial },
    component: () => import('../views/TutorialView.vue')
  },
  {
    path: '/blog/django-react-chat',
    name: 'django-react-chat',
    meta: { title: 'Chat in Django & React', tutorial: blogs.djangoReactChat.tutorial },
    component: () => import('../views/TutorialView.vue')
  }
]
