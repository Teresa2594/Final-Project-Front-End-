// install router: npm add vue-router
import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import Descubre from '../views/Descubre.vue'
import ComerYBeber from '../views/ComerYBeber.vue'
import Situacion from '../views/Situacion.vue'
import DondeDormir from '../views/DondeDormir.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Descubre',
    name: 'Descubre',
    component: Descubre
  },
  {
    path: '/ComerYBeber',
    name: 'ComerYBeber',
    component: ComerYBeber
  },
  {
    path: '/Situacion',
    name: 'Situacion',
    component: Situacion
  },
  {
    path: '/DondeDormir',
    name: 'DondeDormir',
    component: DondeDormir
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;