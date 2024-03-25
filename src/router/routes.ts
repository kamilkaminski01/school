import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { BLOGS, PROJECTS } from '@/utils/consts'
import SharedLayout from '@/layouts/SharedLayout.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: SharedLayout,
    children: [{ path: '', name: 'home', component: HomeView }]
  },
  {
    path: '/projects',
    component: SharedLayout,
    children: [
      {
        path: '',
        name: 'projects',
        meta: { title: 'Projects | Kamil Kamiński' },
        component: () => import('../views/ProjectsView.vue')
      },
      {
        path: 'job-board',
        name: 'job-board',
        meta: { title: 'Job Board', tutorial: PROJECTS.jobBoard.tutorial },
        component: () => import('../views/TutorialView.vue')
      },
      {
        path: 'monitoring-system',
        name: 'monitoring-system',
        meta: { title: 'Monitoring System', tutorial: PROJECTS.monitoringSystem.tutorial },
        component: () => import('../views/TutorialView.vue')
      },
      {
        path: 'development-forum',
        name: 'development-forum',
        meta: { title: 'Development Forum', tutorial: PROJECTS.developmentForum.tutorial },
        component: () => import('../views/TutorialView.vue')
      },
      {
        path: 'recommendations-system',
        name: 'recommendations-system',
        meta: {
          title: 'Recommendations System',
          tutorial: PROJECTS.recommendationsSystem.tutorial
        },
        component: () => import('../views/TutorialView.vue')
      }
    ]
  },
  {
    path: '/blog',
    component: SharedLayout,
    children: [
      {
        path: '',
        name: 'blog',
        meta: { title: 'Blog | Kamil Kamiński' },
        component: () => import('../views/BlogView.vue')
      },
      {
        path: 'about',
        name: 'about',
        meta: { title: 'About | Kamil Kamiński', tutorial: BLOGS.about.tutorial },
        component: () => import('../views/TutorialView.vue')
      },
      {
        path: 'django-react-chat',
        name: 'django-react-chat',
        meta: { title: 'Chat in Django & React', tutorial: BLOGS.djangoReactChat.tutorial },
        component: () => import('../views/TutorialView.vue')
      }
    ]
  }
]
