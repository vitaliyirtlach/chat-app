import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home/Home.vue"
import Chat from "@/views/Home/Chat.vue"
import WelcomeToChat from "@/components/WelcomeToChat.vue"
import Login from "@/views/Auth/Login.vue"
import Register from "@/views/Auth/Register.vue"
import Auth from "@/views/Auth/Auth.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/",
        component: WelcomeToChat
      },
      {
        path: "/t/:id",
        component: Chat
      },
    ]
  },
  {
    path: "/auth",
    component: Auth,
    redirect: "/auth/register",
    children: [
      {
        path: "login",
        component: Login
      },
      {
        path: "register",
        component: Register
      },
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
