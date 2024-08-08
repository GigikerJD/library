import { createRouter, createWebHistory } from "vue-router";
import WelcomeComponent from './components/WelcomeComponent.vue'
import LoginComponent from "./components/LoginComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue"
import AboutMe from "./components/AboutMe.vue";


const routes = [
    {
        path: '/',
        component: WelcomeComponent
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/register',
        component: RegisterComponent
    },
    {
        path: '/about',
        component: AboutMe
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;