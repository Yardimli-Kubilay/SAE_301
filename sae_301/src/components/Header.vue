<script setup>
import IconBuste from './icons/Iconbuste.vue';
import IconCoeur from './icons/Iconcoeur.vue';
import PocketBase from 'pocketbase'


// Import éléments de vue
import { ref, onMounted } from 'vue';
// Import éléments de routage
import { useRouter } from 'vue-router';
const router = useRouter()

var pocketbase_ip = "";
  //if (import.meta.env.MODE === "production")
pocketbase_ip = "https://tavue.kubilayyardimli.fr:443";

  //else pocketbase_ip = "http://127.0.0.1:8090/";
const pb = new PocketBase(pocketbase_ip);


// user connecté ? au départ faux
let isConnected = ref(false)

// Element de connexion
let user = ref('')
let psw = ref('')

// User connecté
let currentUser = ref(null)
let avatar = ref(null)

// Au montage du composant
onMounted(async () => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = () => {
  if (pb.authStore.isValid) {
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      + currentUser.value.collectionId     // Id ou name de la collection concernée
      + "/"
      + currentUser.value.id               // Id de l'utilisateur connecté
      + "/"
      + currentUser.value.avatar           // Nom fichier image pocketbase
      + "?thumb=100x100"                   // Taille par défaut

    //      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(user.value, psw.value)
    //    console.log("connecté : ",authData)
    refresh()
  } catch (error) {
    //    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = () => {
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value = false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({ name: "HomeView" })
}
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

    <div class="ml-auto" style="padding-left: 5px;">
      <span v-if="isConnected" style="justify-content: flex-end;">
        <button class="btn-login">
          <i>{{ currentUser.username }}</i>
        </button>
        <button class="btn-login" type="button" @click="deconnect" style="margin-left: 10px;">
          <i class="fa fa-sign-out">Déconnecter</i>
        </button>
      </span>

      <form v-else class="login-form">
        <input placeholder="Login" v-model="user" class="login-input">
        <input placeholder="Password" type="password" v-model="psw" class="login-input">
        <button type="button" class="btn-login" @click.prevent="connect">
          <i class="fa fa-power-off"></i> Connexion
        </button>
      </form>
    </div>

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
.btn-login {
  margin-top: 20px;
  width: auto;
  color: black;
  background-color: white; 
  padding: 10px 20px; 
  border: 1px solid #000; 
  cursor: pointer; 
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}
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
