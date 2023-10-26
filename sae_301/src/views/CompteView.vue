<script setup>
import { ref } from 'vue';
import PocketBase from 'pocketbase';

const connected = ref(false);
let pocketbase_ip = "";

//if (import.meta.env.MODE === "production")
  pocketbase_ip = "https://tavue.kubilayyardimli.fr:443";
//else pocketbase_ip = "http://127.0.0.1:8090";

const pb = new PocketBase(pocketbase_ip);
const currentUser = ref(null);


const register = async () => {
  currentUser.value = await pb.collection("users").create({
    email: document.getElementById("email").value,
    password: document.getElementById("passwd").value,
    passwordConfirm: document.getElementById("passwd").value,
    username: document.getElementById("username").value,
    name: "John Di",
  });
  
  if (currentUser.value) {
    document.getElementById("status").innerHTML =
      "Nous vous avons envoyer un mail de vérifictaion ...";
    await pb.collection("users").requestVerification(document.getElementById("email").value);
  }
}

const loginGithub = async () => {
  await pb.collection("users").authWithOAuth2({ provider: "github" });

  if (pb.authStore.isValid) {
    document.getElementById("status").innerHTML = "Vous êtes maintenant connecté(e) avec Github";
    connected.value = true;
    currentUser.value = pb.authStore.model;
  }
}
</script>


<template>
<div class="connexion-container">
    <h1 class="text-connexion">Connectez-vous !</h1>
    <div class="input-container">
        <label>Adresse mail : </label>
        <input type="email" required id="email" placeholder="username@domain.com" />
    </div>
    <div class="input-container">
        <label>Mot de passe : </label>
        <input type="password" required id="passwd" placeholder="..."  />
    </div>
    <div class="input-container">
        <label>Nom : </label>
        <input type="text" required id="username" placeholder="nom d'utilisateur" />
    </div>
    <button class="connexion-button" v-on:click="register()">S'inscrire</button>
    <div class="logo-container">
        <button class="connexion-button" v-on:click="loginGithub()">
            Se connecter avec Github
            <div class="image-container">
                <img class="logogit" src="@/assets/Github-logo.webp" alt="github Logo" />
            </div>
        </button>
    </div>
    <p><label id="status"></label></p>
</div>
</template>

<style scoped>
input {
    width: 200px;
    border-style: none;
    border-color: #ffffff;
}
.connexion-container {
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
.text-connexion {
    text-align: center;
    font-size: 24px;
}
.input-container {
    background-color: #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}
.connexion-button {
    padding: 15px;
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center; /* Pour centrer les éléments horizontalement */
}

.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logogit {
    width: 61px;
    height: 56px;
    margin-top: 10px; /* Espace entre le texte et le logo */
}

.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
