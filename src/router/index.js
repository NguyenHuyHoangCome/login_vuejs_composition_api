import { createRouter, createWebHistory } from 'vue-router'
import LOGIN_view from '../views/login_view.vue'
import REGISTER_view from '../views/Register_view.vue'
import UserProfile from '../views/user_view.vue'
import AppLayout from '@/layouts/App.vue';
import Layout_Default from '@/layouts/Default.vue';


const routes = [
  {
    path: '/login',
    name: 'login',
    component: Layout_Default,
    children: [
      {
        path: '',
        component: LOGIN_view,
      },
    ],

  },
  {
    path: '/register',
    name: 'register',
    component: Layout_Default,
    children: [
      {
        path: '',
        component: REGISTER_view,
      },
    ],
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/UserProfile1',
    component: AppLayout,
    children: [
      {
        path: '',
        component: UserProfile,
      },
    ],
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
