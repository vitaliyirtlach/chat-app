import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home/Home.vue"
import Chat from "@/views/Home/Chat.vue"
import WelcomeToChat from "@/components/WelcomeToChat.vue"
import Login from "@/views/Auth/Login.vue"
import Register from "@/views/Auth/Register.vue"
import Auth from "@/views/Auth/Auth.vue"
import Settings from "@/views/Settings/Settings.vue"
import UserInfo from "@/views/Settings/UserInfo.vue"
import store from '@/store'

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
        path: "",
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
        name: "Login",
        component: Login
      },
      {
        path: "register",
        name: "Register",
        component: Register
      },
    ]
  },
  {
    path: "/settings",
    component: Settings,
    children: [
      {
        path: "",
        component: UserInfo
      }]
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Register' && to.name !== "Login" && !store.state.isAuth) next({ name: 'Register' })
  else next()
})

export default router
