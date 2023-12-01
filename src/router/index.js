import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue"
import RegisterView from "@/views/RegisterView.vue"

const routes = [
  {
    path: '/',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/home',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/register',
    name: 'registerRoute',
    component: RegisterView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
