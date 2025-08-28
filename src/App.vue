<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'

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
    <SiteFooter />
  </div>
</template>

<style scoped>
/* Styles spécifiques au composant App si nécessaire */
</style>
