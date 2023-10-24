import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'  // Importez votre vue

const routes = [
  {
    path: '/',           // Spécifiez le chemin d'accès
    name: 'Home',
    component: HomeView  // Spécifiez le composant à afficher
  }
  // Vous pouvez ajouter d'autres routes ici...
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes                 // Ajoutez la liste des routes ici
})

export default router
