import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue"
import RegisterView from "@/views/RegisterView.vue"
import ProfileView from "@/views/ProfileView.vue";
import ErrorView from "@/views/ErrorView.vue";
import SearchView from "@/views/SearchView.vue";
import OtherProfileView from "@/views/OtherProfileView.vue";
import ForumView from "@/views/ForumView.vue";

const routes = [
    {
        path: '/',
        name: 'loginRoute',
        component: LoginView
    },
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
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
    },
    {
        path: '/profile',
        name: 'profileRoute',
        component: ProfileView
    },
    {
        path: '/users/active',
        name: 'searchRoute',
        component: SearchView
    },
    {
        path: '/profile/other',
        name: 'otherProfileRoute',
        component: OtherProfileView
    },
    {
        path: '/forum',
        name: 'forumRoute',
        component: ForumView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

