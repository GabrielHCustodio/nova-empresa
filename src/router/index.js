import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Welcome from '@/views/Welcome.vue'

import Services from '@/components/MyServices.vue'
import NewService from '@/components/NewService.vue'
import ListServices from '@/components/ListServices.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'services',
        name: 'services',
        component: Services
      },
      {
        path: 'newservice',
        name: 'newServices',
        component: NewService
      },
      {
        path: 'listservices',
        name: 'listServices',
        component: ListServices
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition 
    }

    if(to.hash) {
      return {el: to.hash}
    }

    return { left: 0, top:0}
  },
  routes
})

export default router
