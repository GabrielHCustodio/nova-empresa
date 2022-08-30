import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Welcome from '@/views/Welcome.vue'

import NewOrder from '@/components/orders/NewOrder.vue'
import Order from '@/components/orders/Order.vue'
import Orders from '@/components/orders/Orders.vue'
import Service from '@/components/services/Service.vue'
import Services from '@/components/services/Services.vue'

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
        path: 'orders',
        name: 'orders',
        component: Orders
      },
      {
        path: 'orders/order',
        name: 'order',
        component: Order
      },
      {
        path: 'new-order',
        name: 'new-order',
        component: NewOrder
      },
      {
        path: 'services',
        name: 'services',
        component: Services
      },
      {
        path: 'services/service',
        name: 'service',
        component: Service
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
