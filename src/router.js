import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/ProfileView.vue')
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('./views/SalesView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LogIn.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/OrderListView.vue')
    },
    {
      path: '/order/:id',
      name: 'order detail',
      component: () => import('./views/OrderView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/ProductView.vue')
    },
    {
      path: '/men',
      name: 'men product',
      component: () => import('./views/MenView.vue')
    },
    {
      path: '/women',
      name: 'women product',
      component: () => import('./views/WomenView.vue')
    },
    {
      path: '/new',
      name: 'new product',
      component: () => import('./views/NewArrivalView.vue')
    }
  ]
});

export default router
