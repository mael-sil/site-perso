<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import NavBar from './components/NavBar.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div id="app">
    <main class="main-content">
      <router-view />
    </main>
    <NavBar />
  </div>
</template>

<style scoped>
/* Styles spécifiques au composant App si nécessaire */
</style>
