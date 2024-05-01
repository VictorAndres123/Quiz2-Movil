import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import RolComponent from '@/components/RolComponent.vue';
import ModuloComponent from '@/components/ModuloComponent.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
{
  path: '/rol',
  name: 'Rol',
  component: RolComponent
},
{
  path: '/modulo',
  name: 'Modulo',
  component: ModuloComponent
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
