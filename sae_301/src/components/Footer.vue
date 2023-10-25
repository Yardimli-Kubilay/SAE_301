<script setup>
import IconFacebook from '../components/icons/Iconfacebook.vue'
import IconX from '../components/icons/Iconx.vue'
import IconPaypal from './icons/IconPaypal.vue';
import IconVisa from './icons/IconVisa.vue';
import IconMastercard from './icons/IconMastercard.vue';
import IconCb from './icons/IconCb.vue';
import IconChronopost from './icons/IconChronopost.vue';
import IconMondialRelay from './icons/IconMondialRelay.vue';
import IconBanquePostale from './icons/IconBanquePostale.vue';
</script>

<template>
  <footer style="background-color: #C1B488; height: auto;">
    <div class="footer-container">
      <!-- Catégories Section -->
      <div class="footer-section">
        <h3>CATÉGORIES</h3>
        <ul>
          <li><router-link to="/">ACCUEIL</router-link></li>
          <li><router-link to="/personnalisation">PERSONNALISATION</router-link></li>
          <li><router-link to="/lunette">LUNETTE</router-link></li>
        </ul>
      </div>

      <!-- Suivez-nous Section -->
      <div class="footer-section">
        <h3>Suivez-nous</h3>
        <ul class="social-icons">
          <li><IconFacebook/></li>
          <li><IconX/></li>
        </ul>
      </div>

      <!-- Votre Compte Section -->
      <div class="footer-section">
        <h3>Votre Compte</h3>
        <ul>
          <li><router-link to="/info-perso">INFORMATION PERSONNELLES</router-link></li>
          <li><router-link to="/commandes">COMMANDES</router-link></li>
          <li><router-link to="/suivi-commande">SUIVI DE COMMANDE</router-link></li>
        </ul>
      </div>

      <!-- Ligne de séparation -->
      <div class="line-separation"></div>

      <!-- Modes de paiement sécurisé Section -->
      <div class="footer-section">
        <h3>MODES DE PAIEMENT SÉCURISÉ</h3>
        <ul class="payment-icons">
          <li><IconPaypal/></li>
          <li><IconVisa/></li>
          <li><IconMastercard/></li>
          <li><IconCb/></li>
        </ul>
      </div>

      <!-- Modes de livraison Section -->
      <div class="footer-section">
        <h3>MODES DE LIVRAISON</h3>
        <ul class="delivery-icons">
          <li><IconChronopost/></li>
          <li><IconMondialRelay/></li>
          <li><IconBanquePostale/></li>
        </ul>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <span>© 2023 - tavue.fr</span>
        <ul>
          <li><router-link to="/politique-confidentialite">Politique de confidentialité</router-link></li>
          <li><router-link to="/mentions-legales">Mentions légales</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centrage horizontal */
  align-items: top;     /* Centrage vertical */
  padding: 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  padding: 10px;
  text-align: center; /* Centrage du texte à l'intérieur des sections */
}

.footer-section h3 {
  margin-bottom: 20px;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto; /* Centrage horizontal de la liste */
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  text-decoration: none; /* Suppression du soulignement des liens */
  color: inherit;        /* Utilisation de la couleur héritée pour les liens */
}

.social-icons, .payment-icons, .delivery-icons {
  display: flex;
  gap: 10px;
  justify-content: center; /* Centrage horizontal des icônes */
}

.line-separation {
  flex-basis: 100%;
  height: 1px;
  background-color: #000;
  margin: 20px 0;
}

.footer-bottom {
  display: flex;
  justify-content: center; /* Centrage du footer-bottom */
  align-items: center;
  border-top: 1px solid #000;
  padding-top: 20px;
  width: 100%;
}

.footer-bottom span, .footer-bottom ul {
  margin: 0 20px; /* Espacement entre le copyright et les liens */
}

.footer-bottom ul {
  display: flex; /* Affichage des éléments de la liste l'un à côté de l'autre */
  gap: 20px;  
     /* Espacement entre les liens */
  list-style-type: none;  /* Supprime les puces des éléments de liste */
  padding: 0;
  margin: 0 auto;
}
.footer-bottom a {
  text-decoration: none; /* Suppression du soulignement des liens */
  color: inherit;        /* Utilisation de la couleur héritée pour les liens */
}
</style>