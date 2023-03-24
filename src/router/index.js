import { createRouter, createWebHistory } from 'vue-router'
import ScannerView from '../views/ScannerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ScannerView
    },
   {
      path: '/ScannerHistory',
      name: 'scannerhistroy',
      component: () => import('../views/ScannerHistory.vue')
    }
  ]
})

export default router
