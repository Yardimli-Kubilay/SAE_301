<script>
import PocketBase from 'pocketbase'
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
pocketbase_ip = "https://tavue.kubilayyardimli.fr:443";
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
var currentUser;
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    async login() {
      await pb
        .collection("users")
        .authWithPassword(
          document.getElementById("email").value,
          document.getElementById("passwd").value
        );

      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "Vous etes maintenant connecté(e)";
        connected = true;
        currentUser = pb.authStore.model;
        document.getElementById("signOut").style.visibility = "hidden";
        document.getElementById("addPoem").style.visibility = "visible";
      }
    },
    //this method allows the already registred user to log in the system.
    async register() {
      currentUser = await pb.collection("users").create({
        email: document.getElementById("email").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: "John Di",
      });
      if (currentUser) {
        document.getElementById("status").innerHTML =
          "Nous vous avons envoyer un mail de vérifictaion ...";
        await pb
          .collection("users")
          .requestVerification(document.getElementById("email").value);
      }
    },
    async loginGithub() {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "Vous êtes maintenant connecté(e) avec Github";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },
},
};


</script>

<template>
<div class="connexion-container">
    <h1 class="text-connexion">Connectez-vous !</h1>
    <div class="input-container">
        <label>Adresse mail: </label>
        <input type="email" required id="email" placeholder="username@domain.com" />
    </div>
    <div class="input-container">
        <label>Mot de passe: </label>
        <input type="password" required id="passwd" placeholder="..." />
    </div>
    <button class="connexion-button" v-on:click="register()">S'inscrire</button>
    <button class="connexion-button" v-on:click="login()">Se connecter</button>
    <div class="logo-container">
        <button class="connexion-button" v-on:click="loginGithub()">
            Se connecter avec Github
            <div class="image-container">
                <img class="logogit" src="@/assets/Github-logo.webp" alt="github Logo" />
            </div>
        </button>
    </div>
    <p><label id="status"> Vous n'êtes pas connectez </label></p>
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
