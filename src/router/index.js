import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ChooseYourHero',
    name: 'ChooseYourHero',
    component: () => import('../views/ChooseYourHeroView.vue')
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
    path: '/Attack',
    name: 'Attack',
    component: () => import('../views/AttackView.vue')
  },
  {
    path: '/Attack/:id',
    name: 'AttackId',
    component: () => import('../views/DealPointsView.vue')
  },
  {
    path: '/Defend',
    name: 'Defend',
    component: () => import('../views/DealPointsView.vue')
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
