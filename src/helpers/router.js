import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from "@/stores";

export const router = createRouter({
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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      beforeEnter: (to, from, next) => {
        // Install the user store
        const userStore = useAuthStore();
        // Redirect if user is not authenticated
        if (userStore.userIsAuth === false) {
          return next('/login');
        }
        // Allow route entry if user is authenticated
        return next();
      }
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('../views/SalesView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue'),
      beforeEnter: (to, from, next) => {
        // Install the user store
        const userStore = useAuthStore();
        // Redirect if user is authenticated
        if (userStore.userIsAuth === true) {
          return next('/');
        }
        // Allow route entry if user is not authenticated
        return next();
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      beforeEnter: (to, from, next) => {
        // Install the user store
        const userStore = useAuthStore();
        // Redirect if user is authenticated
        if (userStore.userIsAuth === true) {
          return next('/');
        }
        // Allow route entry if user is not authenticated
        return next();
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderListView.vue'),
      beforeEnter: (to, from, next) => {
        // Install the user store
        const userStore = useAuthStore();
        // Redirect if user is not authenticated
        if (userStore.userIsAuth === false) {
          return next('/login');
        }
        // Allow route entry if user is authenticated
        return next();
      }

    },
    {
      path: '/order/:id',
      name: 'order detail',
      component: () => import('../views/OrderView.vue'),
      beforeEnter: (to, from, next) => {
        // Install the user store
        const userStore = useAuthStore();
        // Redirect if user is not authenticated
        if (userStore.userIsAuth === false) {
          return next('/login');
        }
        // Allow route entry if user is authenticated
        return next();
      }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/men',
      name: 'men product',
      component: () => import('../views/MenView.vue')
    },
    {
      path: '/women',
      name: 'women product',
      component: () => import('../views/WomenView.vue')
    },
    {
      path: '/new',
      name: 'new product',
      component: () => import('../views/NewArrivalView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ]
});
