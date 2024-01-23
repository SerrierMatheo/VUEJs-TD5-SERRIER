import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Cagnottes',
      component: () => import('../views/Cagnottes.vue'),
    },
    {
      path: '/cagnottes/new',
      name: 'Cagnottes:new',
      component: () => import('../views/CagnotteForm.vue'),
    },
    {
      path: '/cagnottes/:id/infos',
      name: 'Cagnottes:id',
      component: () => import('../views/Cagnotte.vue'),
    }
  ]
})

export default router
