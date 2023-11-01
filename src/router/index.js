import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/HomeView.vue'
import SansAlcool from '../views/admin/SansAlcool.vue'
import AvecAlcool from '../views/public/AvecAlcool.vue'
import login from '../views/public/loginVue.vue'
import PublicLayout from "../views/public/LayoutPublic.vue";
import admin from "../views/admin/LayoutAdmin.vue";
const routes = [
  {
    path: '/',
    component: PublicLayout,
    
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/avecalcool',
        name: 'avecalcool',
        component: AvecAlcool
      },
      {
        path: '/login',
        name: 'login',
        component: login
      }
    ]
  },
  {
    path: '/admin',
    component: admin,
    children: [
      {
        path: 'sansalcool',
        component: SansAlcool,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
  
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
