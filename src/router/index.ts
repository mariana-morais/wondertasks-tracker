import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import BusyTasks from '../views/BusyTasks.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Início' }
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
    meta: { title: 'Tarefas' }
  },
  {
    path: '/busy-tasks',
    name: 'Busy Tasks',
    component: BusyTasks,
    meta: { title: 'Tarefas Atarefadas' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Middleware global para atualizar o título
router.beforeEach((to, _from, next) => {
  const defaultTitle = 'WonderTasks Tracker'
  document.title = (to.meta.title as string) || defaultTitle
  next()
})

export default router