import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/QuestCenter',
    name: 'QuestCenter',
    component: () => import('../views/QuestCenterView.vue')
  },
  {
    path: '/QuestCenter/:id',
    name: 'QuestCenterId',
    component: () => import('../views/QuestMoreInfoView.vue')
  },
  {
    path: '/Battlefield',
    name: 'Battlefield',
    component: () => import('../views/AttackView.vue')
  },
  {
    path: '/Attendance',
    name: 'Attendance',
    component: () => import('../views/AttendanceView.vue')
  },
  {
    path: '/MyQuest',
    name: 'MyQuest',
    component: () => import('../views/MyQuestView.vue')
  },
  {
    path: '/TeamRoles',
    name: 'TeamRoles',
    component: () => import('../views/RolesView.vue')
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
