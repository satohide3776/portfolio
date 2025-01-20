import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import InstructorView from '../views/InstructorView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component:ProfileView
  },
  {
    path: '/instructor',
    name: 'instructor',
    component:InstructorView
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
