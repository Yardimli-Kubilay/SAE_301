<script setup>

</script>

<template>
    <main>
        <div class="produit-wrapper">
            <div class="lunette-image">
                <img class="lunettes-produit" src="@/components/icons/Lunette_produit.svg" alt="lunettes"/>
            </div>
            <div class="texte-wrapper">
                <h1>TaVue LUNETTE CLASSIQUE</h1>
            <div class="texte-lunette-produit">
                <p>Chez TaVue, nous croyons que chaque regard est unique et mérite d'être mis en valeur par un accessoire à son image. </p>
                <p>S'adressant à un marché unisexe âgé de 25 à 50 ans, notre plateforme vous invite à participer activement à la conception de vos lunettes, vous garantissant ainsi une pièce qui reflète véritablement votre personnalité. </p>
                <p>Fièrement fabriquées en France, nos lunettes incarnent un style raffiné, minimaliste et épuré. L'identité visuelle de chaque modèle est soigneusement pensée pour être en parfaite harmonie avec les valeurs de la marque. </p>
                <p>Avec TaVue, vivez une expérience d'achat originale et personnalisez un produit qui deviendra bien plus qu'un simple accessoire : le reflet de votre essence.</p>
            </div>
                <router-link to="/configurateur" class="more-text1">je personnalise</router-link>
            </div>
        </div>

        
        <div class="lunette-produit-p">
            <img class="lunettes-produit-plage" src="@/assets/img-lunette-plage-long.webp" alt="lunettes plage"/>
            <img class="lunettes-produit-poser" src="@/assets/img-lunette-poser-long.webp" alt="lunettes poser"/>
        </div>

        <p class="text">Les lunettes, bien plus que de simples accessoires, sont des compagnons de notre quotidien qui améliorent notre vision et façonnent notre identité. Chaque élément d'une paire de lunettes a été conçu avec une intention précise, du cadre au verre. Laissez-nous vous guider à travers ces composants essentiels.</p>
        
        <div class="produit-container">
            <div class="lunette-image">
                <img class="lunettes-jaune-poser" src="@/assets/img-lunette-jaune.webp" alt="lunettes jaune poser"/>
            </div>
            <div class="texte-lunette-jaune">
                <p>Les Verres : </p>
                <p>Au cœur de toute paire de lunettes se trouvent les verres. Ce sont eux qui corrigent votre vision, qu'elle soit myope, hypermétrope, astigmate ou presbyte. Les verres peuvent être unifocaux, destinés à corriger une seule distance, ou progressifs, adaptés pour voir nettement à différentes distances. </p>
                <p>De nos jours, de nombreux verres sont également traités pour offrir une protection contre les rayons UV, la lumière bleue des écrans, ou pour réduire les reflets, garantissant ainsi une vision optimale dans toutes les situations. </p>
                <p>Ils peuvent être fins, épais, teintés, polarisés ou même photochromiques, s'adaptant à la luminosité extérieure. Chaque verre est taillé et poli avec précision pour s'adapter parfaitement à la forme du cadre choisi et à la prescription de l'utilisateur.</p>
            </div>
        </div>


        <div class="produit-container">
            <div class="lunette-image">
                <img class="lunettes-deux-poser" src="@/assets/img-deux-lunettes.webp" alt="deux lunettes poser"/>
            </div>
            <div class="texte-lunette-deux">
                <p>Le Cadre : </p>
                <p>Le cadre est bien plus qu'un simple support pour les verres. C'est lui qui donne à vos lunettes leur style, leur caractère et leur confort. </p>
                <p>Fabriqué dans une variété de matériaux, du plastique léger à l'acier inoxydable en passant par l'acétate chic, chaque cadre est conçu pour épouser la forme de votre visage tout en reflétant votre personnalité. </p>
                <p>Les montures peuvent être pleines, demi-cerclées ou même sans cerclage pour un look minimaliste. Le choix du cadre dépend non seulement de la forme de votre visage, mais aussi de vos goûts personnels, de votre mode de vie et de vos besoins en matière de vision. </p>
                <p>De plus, les charnières, les plaquettes de nez et les branches jouent tous un rôle crucial pour garantir un ajustement confortable et stable.</p>
            </div>
        </div>

        <p class="text">
            Chez TaVue, nous comprenons l'importance d'une paire de lunettes adaptée à chaque individu. 
            C'est pourquoi nous nous efforçons d'offrir une large gamme de verres et de cadres de qualité, tout en vous impliquant dans la création de votre modèle. 
            Embarquez dans cette aventure où technologie, style et fonctionnalité se fusionnent pour vous offrir une vision parfaite.
        </p>
    </main>
</template>

<style scoped>
.produit-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px; /* Optionnel : pour donner de l'espace autour du contenu */
}

.lunette-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px; /* Espace entre l'image et le texte */
}

.texte-wrapper {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 40px;
}

.lunettes-produit {
    max-width: 100%; /* Pour que l'image s'adapte à la largeur de sa div parent */
    height: auto;
}

.texte-lunette-produit p {
    margin-bottom: 20px; /* Pour donner de l'espace entre chaque paragraphe */
}

.more-text1 {
  left: 10px; 
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
.lunettes-produit-plage {
    width: 542px;
    height: 265px;
    flex-shrink: 0;
    align-items: top;
    justify-content: space-between;
    margin: 10px;
}
.lunettes-produit-poser {
    width: 542px;
    height: 265px;
    flex-shrink: 0;
    align-items: top;
    justify-content: space-between;
    margin: 10px;
}
.lunette-produit-p {
    padding: 20px;
    text-align: center;
}
.text {
    padding-left: 20px;
    padding-right: 20px;
}
/* Styles communs */
.produit-container {
    display: flex;
    width: 100%;
    padding: 20px;
}

.lunette-image {
    flex: 1;
    margin-right: 30px;
}

.lunettes-deux-poser, .lunettes-jaune-poser {
    max-width: 100%;
    height: auto;
}

/* Styles spécifiques pour le "texte-lunette-deux" */
.produit-container.texte-deux {
    align-items: flex-start;
}

.texte-lunette-deux {
    flex: 2;
}

.texte-lunette-deux p {
    margin-bottom: 20px;
}

/* Styles spécifiques pour le "texte-lunette-jaune" */
.produit-container.texte-jaune {
    justify-content: space-between;
    align-items: center;
}

.lunette-image.texte-jaune {
    display: flex;
    justify-content: center;
    align-items: center;
}

.texte-lunette-jaune {
    flex: 2;
}

.texte-lunette-jaune p {
    margin-bottom: 20px;
}
</style>