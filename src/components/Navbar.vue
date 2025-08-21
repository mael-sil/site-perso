<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { pages, getPageIndex } from '../utils/pages'

const route = useRoute()
const isDarkMode = ref(false)
const isHovering = ref(false)

// Calculer la position de la cellule glass basée sur la route active
const activeLinkIndex = computed(() => {
  return getPageIndex(route.path)
})

const glassSliderTransform = computed(() => {
  const translateX = activeLinkIndex.value * 100
  const translateY = isHovering.value ? -1 : 0
  return `translate(${translateX}%, ${translateY}px)`
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  updateTheme()
}

const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark-mode')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Récupérer le thème sauvegardé
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    updateTheme()
  }
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="navbar-menu">
        <div 
          v-for="page in pages"
          :key="page.path"
          class="nav-item"
          :class="{ active: $route.path === page.path }"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false"
        >
          <router-link :to="page.path" class="nav-link">
            {{ page.title }}
          </router-link>
        </div>
      </div>
      
      <div class="navbar-actions">
        <button 
          @click="toggleDarkMode" 
          class="theme-toggle"
          :title="isDarkMode ? 'Passer au mode clair' : 'Passer au mode sombre'"
        >
          <i v-if="isDarkMode" class="fas fa-sun icon"></i>
          <i v-else class="fas fa-moon icon"></i>
        </button>
      </div>
      
      <!-- Cellule glass qui slide -->
      <div 
        class="glass-slider"
        :style="{ transform: glassSliderTransform }"
      ></div>
    </div>
  </nav>
</template>

<style scoped>
/* Styles spécifiques au composant Navbar */
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-pill);
  padding: 0.50rem 1rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.navbar-menu {
  display: flex;
  gap: 0;
  position: relative;
}

.nav-item {
  position: relative;
  z-index: 2;
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-pill);
  min-width: 120px;
  text-align: center;
  transition: all 0.3s ease;
}

.nav-item:hover {
  transform: translateY(-1px);
}

.nav-item.active .nav-link {
  color: var(--text-primary);
  font-weight: 600;
}



.nav-item:hover .nav-link {
  color: var(--text-primary);
}

.nav-item.active:hover {
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  display: block;
  width: 100%;
  height: 100%;
}



/* Cellule glass qui slide */
.glass-slider {
  position: absolute;
  left: 0;
  top: 0;
  width: 120px;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-pill);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.theme-toggle {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: var(--text-secondary);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.icon {
  font-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    width: 95%;
    padding: 0.75rem 1rem;
  }
  
  .navbar-menu {
    gap: 0;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
    min-width: 100px;
    font-size: 0.9rem;
  }
  
  .glass-slider {
    width: 100px;
  }
}
</style>
