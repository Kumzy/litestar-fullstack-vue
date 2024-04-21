import {
  createRouter,
  createWebHistory,
  type RouteRecordName,
  type RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext
} from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { getPageTitle } from '@/utils/page'
import {
  KeyIcon,
  HomeIcon,
  BriefcaseIcon,
  UsersIcon,
  WrenchIcon,
  Cog8ToothIcon,
  PresentationChartLineIcon
} from '@heroicons/vue/24/outline'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue'),
    meta: {
      title: 'about',
      layout: null,
      sidebar: null,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue'),
    meta: {
      title: 'Login',
      layout: null
    }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/users/UsersListView.vue'),
    meta: {
      title: 'Users',
      layout: 'DefaultLayout',
      icon: BriefcaseIcon,
      sidebar: 'main'
    }
  },
  {
    path: '/users/:id',
    name: 'user-detail',
    component: () => import('@/views/users/UserDetail.vue'),
    props: true, // Enables route parameter as a prop
    meta: {
      title: 'User',
      layout: 'DefaultLayout',
      sidebar: 'user',
      icon: HomeIcon
    }
  },
]

// Creating the route
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// Array of public route names
const publicRoutes: RouteRecordName[] = ['login', 'about']

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated

  document.title = getPageTitle(to.meta.title as string)

  if (!publicRoutes.includes(to.name as string) && !isAuthenticated) {
    next({ name: 'login' }) // Redirect to login page
  } else if (to.path == '/') {
    if (!isAuthenticated) {
      // No valid token, redirect to Login
      next({name: 'login'});
    } else {
      // Valid token exists, redirect to Dashboard
      next({name: 'users'});
    }
  } else {
    next() // Proceed to route
  }
})

export default router
