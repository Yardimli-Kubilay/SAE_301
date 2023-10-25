<script setup>
import { ref } from 'vue';
import IconLunettebase from '../components/icons/IconLunettebase.vue';
import IconCoeur from '../components/icons/Iconcoeur.vue';
import { defineProps } from 'vue';

const { frameColor, lensColor, branchColor } = defineProps(['frameColor', 'lensColor', 'branchColor']);

const frameColors = [
    { label: 'gris', code: '#B2B2B2' },
    { label: 'rouge', code: '#FF4545' },
    { label: 'blanc', code: '#FFFFFF' },
    { label: 'noir', code: '#2D2D2D' },
    { label: 'bleu', code: '#4899D2' },
    { label: 'vert', code: '#009759' },
    { label: 'beige', code: '#EFE5CE' }
];

const lensColors = [
    { label: 'noir', code: '#1D1D1B' },
    { label: 'rouge', code: '#FF5B5B' },
    { label: 'bleu', code: '#59BBFF' },
    { label: 'vert', code: '#42AF83' }
];

const branchColors = [
    { label: 'gris', code: '#B2B2B2' },
    { label: 'rouge', code: '#FF4545' },
    { label: 'blanc', code: '#FFFFFF' },
    { label: 'noir', code: '#2D2D2D' },
    { label: 'bleu', code: '#4899D2' },
    { label: 'vert', code: '#009759' }
];

const currentFrameColor = ref('#B2B2B2');
const currentLensColor = ref('#1D1D1B');
const currentBranchColor = ref('#B2B2B2');

const changeColor = (type, color) => {
    type.value = color;
};

const colorSections = [
    {
        title: 'PERSONNALISATION DU CADRE',
        colors: frameColors,
        currentColor: currentFrameColor
    },
    {
        title: 'PERSONNALISATION DES VERRES',
        colors: lensColors,
        currentColor: currentLensColor
    },
    {
        title: 'PERSONNALISATION DES BRANCHES',
        colors: branchColors,
        currentColor: currentBranchColor
    }
];
</script>

<template>
    <main class="configurator-container">
        <div class="lunette-container">
            <IconLunettebase :frameColor="currentFrameColor" :lensColor="currentLensColor" :branchColor="currentBranchColor" />
        </div>
        <div class="configurator">
            <div class="info-section">
                <h1>Lunette Classique</h1>
                <h3>TaVue</h3>
                <router-link to="/"><IconCoeur/></router-link>
            </div>
            <div class="color-picker">
                <section v-for="section in colorSections" :key="section.title">
                    <p>{{ section.title }}</p>
                    <div class="color-options">
                        <button 
                            v-for="color in section.colors" 
                            :key="color.label" 
                            :style="{backgroundColor: color.code}" 
                            @click="changeColor(section.currentColor, color.code)"
                        >
                            <span>{{ color.label }}</span>
                        </button>
                    </div>
                </section>
            </div>
            <div class="prix-section">
                <p>549,99€</p>
                <div class="ligne"></div>
                <router-link to="/panier" class="add-to-cart">AJOUTER AU PANIER</router-link>
            </div>
        </div>
    </main>
</template>

<style scoped>
.ligne {
    background: #C2A68B;
    width: 700px;
    height: 1px;
    flex-shrink: 0;
    margin-bottom: 10px;
}
.configurator-container {
    display: flex;
    align-items: flex-start;
}

.lunette-container {
    margin-right: 40px;
    margin-top: 100px;
}

.configurator {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.info-section {
    display: flex;
    flex-direction: column;
    align-items: normal;
    margin-bottom: 20px;
}

.color-picker section {
    margin-bottom: 20px;
}

.color-options {
    display: flex;
    align-items: center;
}

.color-options button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    position: relative;
}

.color-options button span {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
}

.prix-section {
    margin-top: 10px;
    margin-right: 50px;
    font-size: 32px;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.add-to-cart {
    margin-right: 50px;
    margin-bottom: 50px;
    padding: 10px 20px;
    background-color: #EFE5CE;
    border: 1px solid #000;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
}
</style>
