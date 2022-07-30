<template>
  <div id="home-page">
    <myCatalogue></myCatalogue>
    <!-- <router-link to="/">CompositionAPI</router-link> | -->
  </div>
  <!-- <router-view /> -->
</template>

<script setup lang="ts">
import myCatalogue from "./components/catalogue.vue";
</script>


<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#home-page {
  height: 100%;
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
