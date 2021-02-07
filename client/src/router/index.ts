import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue"
import Chat from "@/views/Chat.vue"
import WelcomeToChat from "@/components/WelcomeToChat.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    children: [
    {
      path: "/",
      component: WelcomeToChat
    },
    {
      path: "/t/:id",
      component: Chat
    }
  ]
  },
  // {
  //   path: "/settings",
  //   component: Settings,
  //   children: []
  // },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
