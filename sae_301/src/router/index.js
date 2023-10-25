import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'          // Import de la vue HomeView
import ProduitView from '@/views/ProduitView.vue'    // Import de la vue ProduitView
import CompteView from '@/views/CompteView.vue'
import ConfigurateurView from '@/views/ConfigurateurView.vue'
import PanierView from '@/views/PanierView.vue'

const routes = [
  {
    path: '/',            // Chemin d'accès pour la page d'accueil
    name: 'Home',
    component: HomeView   // Spécifiez le composant à afficher pour la page d'accueil
  },
  {
    path: '/produit',     // Chemin d'accès pour la page produit
    name: 'Produit',
    component: ProduitView // Spécifiez le composant à afficher pour la page produit
  },
  {
    path: '/compte',      // Chemin d'accès pour la page compte
    name: 'Compte',
    component: CompteView  // Spécifiez le composant à afficher pour la page compte
  },
  {
    path: '/configurateur', // Chemin d'accès pour la page configurateur
    name: 'Configurateur',
    component: ConfigurateurView // Spécifiez le composant à afficher pour la page configurateur
  },
  {
    path: '/panier',      // Chemin d'accès pour la page panier
    name: 'Panier',
    component: PanierView  // Spécifiez le composant à afficher pour la page panier
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes                 // Ajoutez la liste des routes ici
})

export default router
