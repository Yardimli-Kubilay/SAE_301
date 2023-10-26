<script setup>
import { ref } from 'vue';
import IconLunettebaseVue from '../components/icons/IconLunettebase.vue';
import IconTrashVue from '../components/icons/IconeTrash.vue'
import IconChevronDownVue from '../components/icons/IconChevronDown.vue'
import IconPaypal from '../components/icons/IconPaypal.vue';
import IconVisa from '../components/icons/IconVisa.vue';
import IconMastercard from '../components/icons/IconMastercard.vue';
import IconCb from '../components/icons/IconCb.vue';
</script>


<template>
    <main>
      <h1 class="titre-panier">VOTRE PANIER</h1>
      <div class="main-container">
        <div class="container-panier-lunette">
          <IconLunettebaseVue class="lunette-icon" />
          <div class="lunette-details">
            <p>LUNETTE CLASSIQUE</p>
            <p>TaVue</p>
          </div>
          <div class="lunette-price">
            <p>549,99€</p>
          </div>
          <div class="trash-icon">
            <IconTrashVue />
          </div>
        </div>
  
        <div class="panier-container">
          <h2>Total</h2>
          <div class="ligne-panier"></div>
          <div class="price-detail">
            <p>Sous-total</p>
            <p>549,99€</p>
          </div>
          <div class="delivery">
            <p>Livraison</p>
            <button class="btn-livraison">Livraison à domicile ou point relais <IconChevronDownVue /></button>
          </div>
          <div class="ligne-panier"></div>
          <button class="btn-commander">PAIEMENT</button>
          <p>NOUS ACCEPTONS :</p>
          <ul class="payment-icons">
            <li><IconPaypal /></li>
            <li><IconVisa /></li>
            <li><IconMastercard /></li>
            <li><IconCb /></li>
          </ul>
        </div>
      </div>
    </main>
  </template>
  
  <style scoped>
  .titre-panier {
    margin-left: 20px;
  }
  .main-container {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 30px;
  }
  
  .container-panier-lunette {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #C2A68B;
    padding: 20px;
    width: 634px;
    height: auto;
  }
  
  .lunette-icon {
    width: auto;
    height: 100%;
  }
  
  .lunette-details, .lunette-price {
    flex-grow: 1;
    text-align: center;
  }
  
  .trash-icon {
    margin-left: 20px;
  }
  
  .panier-container {
    background-color: #F8E8C9;
    padding: 50px;
    border-radius: 25px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .price-detail, .delivery {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .payment-icons {
    display: flex;
    gap: 10px;
    list-style-type: none;
    padding: 0;
  }
  .container-panier-lunette {
    background-color: #C2A68B;
    width: 634px;
    height: 172px;
    flex-shrink: 0;
  }

  .btn-livraison {
    border: 1px solid black;
    border-radius: 17px;
    background: #F8F8F8;
    color: #6F6F6F;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
 .btn-commander {
  margin-top: 20px;
  width: auto;
  color: black;
  background-color: white; 
  padding: 10px 20px; 
  border: 1px solid #000; 
  cursor: pointer; 
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}
  .ligne-panier {
    background: #44423D;
    width: auto;
    height: 1px;
    flex-shrink: 0;
    margin-bottom: 10px;
}
  .panier-container {
    background-color: #F8E8C9;
    padding: 50px;
    border-radius: 25px;
    width: 400px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
  
  </style>
  

