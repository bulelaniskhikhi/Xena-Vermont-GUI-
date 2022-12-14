import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/products/:id',
    name: 'product',
    component: function () {
    return import('../views/SingleProductView.vue')
    },
    props: true
  },
  {
    path: '/admin/',
    name: 'admin',
    component: function () {
      return import('../views/AdminView.vue')
    },
    props: true 
  },
  
  {
    path: '/products/rating/:esrbRating',
    name: 'rating',
    component: function () {
      return import('../views/EsrbRating.vue')
    } 
  },{
    path: '/user',
    name: 'user',
    component: function () {
      return import('../views/UserView.vue')
    } 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
