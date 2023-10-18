import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SansAlcool from '../views/SansAlcool.vue'
import AvecAlcool from '../views/AvecAlcool.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sansalcool',
    name: 'sansalcool',
    component: SansAlcool
  },
  {
    path: '/avecalcool',
    name: 'avecalcool',
    component: AvecAlcool
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
