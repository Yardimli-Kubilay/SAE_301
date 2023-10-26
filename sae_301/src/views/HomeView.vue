<script setup>
import MapOsm from '../components/MapOsm.vue';
import IconLunetteHome from '../components/icons/IconLunetteHome.vue';
import IconPaiement from '../components/icons/IconPaiement.vue';
import IconLivraisonVue from '../components/icons/IconLivraison.vue';
</script>

<template>
  <main>

      <div class="offre">
        <p class="texte-offre">Offre de lancement : -10% offert d’achat pour tout type de lunette</p>
      </div>

      <div class="presentation-lunette">
        <div class="text-container">
          <h1 class="h1-coeur">Notre coup de coeur</h1>
            <p class="p-presentation1">Plongez-vous dans la création,</p>
            <p class="p-presentation1">forgez votre style.</p>
            <p class="p-presentation2">Français, raffiné, épuré.</p>
            <p class="p-presentation1">Pour chaque regard, une histoire à raconter.</p>
            <router-link to="/configurateur" class="more-text1">je personnalise</router-link>
        </div>
        <div class="lunettes-home">
          <IconLunetteHome/>
        </div>
      </div>


      <div>
        <h1>L'Essence de TaVue</h1>
      </div>
      <div class="container-essence">
        <div class="img-lunettes-essence">
          <img class="img-lunettes-essence" src="@/assets/image-lunette_eau.webp" alt="lunette dans l'eau" /> 
        </div>
        <div class="text-container-essence">
          <p>Sublimez chaque regard avec finesse et distinction. Notre mission ?</p>
          <p>Illuminer votre quotidien avec des lunettes sophistiquées, uniques et abordables.</p>
          <p>Laissez-vous captiver par la lumière du luxe à portée de main ! Explorez nos designs, et choisissez les lunettes qui refléteront votre essence.</p>
        </div>
        <div class="img-lunettes-essence">
          <img class="img-lunettes-essence" src="@/assets/image-lunette_poser.webp" alt="lunette posée" /> 
        </div>
    </div>

    <div class="modes">
        <div class="mode-item">
            <IconPaiement/>
            <p>modes de paiement sécurisé</p>
        </div>
        <div class="mode-item">
            <IconLivraisonVue/>
            <p>modes de livraison sécurisé</p>
        </div>
    </div>


    <div class="container-coucher-soleil">
      <div>
        <img class="img-lunette-coucher-soleil" src="@/assets/lunette_coucher_soleil.webp" alt="lunette fond coucher de soleil" /> 
      </div>
      <div class="texte-coucher-soleil">
        <p>TaVue, la finesse éternelle à votre portée.</p>
        <p>Explorez une gamme de lunettes raffinées, accessibles, pensées pour les passionnés d'élégance et de design minimaliste.</p>
      </div>
    </div>


    <div class="container-lunette-plage">
        <img class="img-lunette-plage" src="@/assets/image_lunette_plage.webp" alt="lunette a la plage" /> 
        <router-link to="/configurateur" class="more-text2">je personnalise</router-link>
    </div>

    <div class="maposm">
      <div>
        <h2>Les ophtalmologue à montbeliard</h2>
      </div>
      <MapOsm/>
    </div>
    
  </main>
</template>

<style scoped>

h2 {
margin: 20px;
}
.maposm {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.offre {
  background: #000;
  height: 39px;
  flex-shrink: 0;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;     
}
.texte-offre {
  color: var(--blanc-cadre, #FFF);
  font-family: Inter;
  font-size: 16px;
  margin: 0px;
  text-align: center;
}

.presentation-lunette {
  margin-top: 10px;
  background: linear-gradient(180deg, #D0C29A 21.35%, rgba(158, 157, 130, 0.00) 100%);
  height: 400px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.h1-coeur {
  color: #000;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 50px;
  flex: 1;
}

.text-container {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.lunettes-home {
  width: 750px;
  height: 250px;
}

.p-presentation1,
.p-presentation2 {
  color: #000;
  font-size: 20px;
  margin: 5px 0;
}

.more-text1 {
  margin-top: 20px;
  width: 200px;
  color: black;
  background: var(--beige-cadre, #EFE5CE); 
  padding: 10px 20px; 
  border: 1px solid #000; 
  cursor: pointer; 
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}
.more-text2 {
  position: absolute;
  bottom: 50px; 
  right: 100px; 
  color: black;
  background: var(--beige-cadre, #EFE5CE); 
  padding: 10px 20px; 
  border: 1px solid #000; 
  cursor: pointer; 
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
}

.container-essence {
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin: 10px;
}

.img-lunettes-essence{
  width: 392px;
  height: 410px;
  flex-shrink: 0;
}
.text-container-essence {
  color: #000;
  font-size: 20px;
  margin: 0 20px; /* Ajout d'une marge pour espacer le texte des images */
}
.modes {
  margin-top: 10px;
  background: #F4D5A0;
  display: flex;          
  justify-content: space-around; 
  align-items: center;    
  padding: 30px;          
}

.mode-item {
  display: flex;
  flex-direction: column; 
  align-items: center;   
}

.mode-item p {
  margin-top: 5px;       
  text-align: center;    
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.5px;
  text-transform: uppercase;
}
.container-coucher-soleil {
  display: flex;
  align-items: center; /* Pour aligner verticalement les éléments à l'intérieur */
}

.img-lunette-coucher-soleil {
  margin: 10px;
  width: 593px;
  height: 392px;
  flex-shrink: 0;
}

.texte-coucher-soleil {
  color: #000;
  font-size: 20px;
  margin-left: 20px; /* Pour donner un peu d'espace entre l'image et le texte */
  margin-right: 40px;
}
.container-lunette-plage {
  position: relative;
  width: 100%; 
}

.img-lunette-plage {
  width: 100%; 
  height: auto; 
}

</style>

