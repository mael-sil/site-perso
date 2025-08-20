<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <main class="main-content">
      <router-view />
    </main>
    <Navbar />
  </div>
</template>

<style scoped>
/* Styles spécifiques au composant App si nécessaire */
</style>
