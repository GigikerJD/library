<template>
    <NavBar/>
    <div class="main-container">
        <h2>Je suis la page d'accueil !</h2>
    </div>
    <FooterBar/>
</template>

<script>
import NavBar from "./NavBar.vue";
import FooterBar from "./FooterBar.vue"

export default {
  name: 'WelcomeComponent',
  components: {
    NavBar,
    FooterBar
  }
}

</script>

<style scoped>

</style>