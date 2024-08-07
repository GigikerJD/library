<template>
  <WelcomePage/>
  <router-view></router-view>
</template>

<script>
import WelcomePage from "./components/WelcomeComponent.vue"

export default {
  name: 'App',
  components: {
    WelcomePage
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  background-color: rgba(219, 230, 234, 0.855);
}
</style>
