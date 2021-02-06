import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    children: []
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
