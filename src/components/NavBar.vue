<template>
    <nav id="navigation">
        <div class="nav-flex website-title">
            <h3>Librairie de l'EFREI</h3>
        </div>
        <div class="nav-flex nav-links">
            <ul>
                <li class="item"><router-link to="/about">Aperçu</router-link></li>
                <li class="item">Matières</li>
                <li class="item"><router-link to="/register">Inscription</router-link></li>
                <li class="item"><router-link to="/login">Connexion à votre espace</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
//import RegisterComponent from './RegisterComponent.vue';
//import LoginComponent from './LoginComponent.vue';
export default{
    name: "NavBar"
}

</script>

<style scoped>

</style>