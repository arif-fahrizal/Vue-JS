import JobDetails from '@/views/jobs/JobDetails.vue'
import JobsSection from '@/views/jobs/JobsSection.vue'
import AboutPage from '@/views/pages/AboutPage.vue'
import HomePage from '@/views/pages/HomePage.vue'
import NotFound from '@/views/pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsSection
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // 404 catchall
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router