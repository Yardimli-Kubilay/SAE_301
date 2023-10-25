<script setup>
import IconBuste from './icons/Iconbuste.vue';
import IconCoeur from './icons/Iconcoeur.vue';
</script>

<template>
  <header class="app-header">
    <!-- Logo -->
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/Logo_tavue.webp" alt="TaVue Logo" />
      </router-link>
    </div>

    <!-- Navigation -->
    <nav class="nav-menu">
      <router-link to="/">ACCUEIL</router-link>
      <router-link to="/configurateur">PERSONNALISATION</router-link>
      <router-link to="/produit">LUNETTE</router-link>
    </nav>

    <!-- Icons -->
    <div class="icons">
      <router-link to="/compte">
        <IconBuste/>
      </router-link>
      <router-link to="/">
        <IconCoeur/>
      </router-link>
    </div>
    
  </header>
</template>


<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #C1B488;
  padding: 10px 20px;
  height: 100px;
}

.logo img {
  height: 80px; /* Ajustez selon la taille de votre logo */
}

.nav-menu {
  display: flex;
  gap: 30px; /* Espace entre les éléments */
}

.nav-menu a {
  text-decoration: none;
  color: inherit;
  font-size: 24px;
}

.icons {
  display: flex;
  gap: 15px; /* Espace entre les icônes */
}

.icons img {
  height: 24px; /* Ajustez selon la taille de vos SVG */
}


</style>
