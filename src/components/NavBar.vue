<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { pages, getPageIndex } from '../utils/pages'

const route = useRoute()
const themeStore = useThemeStore()
const isHovering = ref(false)
const isMobileMenuOpen = ref(false)

// Calculer la position de la cellule glass basée sur la route active
const activeLinkIndex = computed(() => {
  return getPageIndex(route.path)
})

const glassSliderTransform = computed(() => {
  const translateX = activeLinkIndex.value * 100
  const translateY = isHovering.value ? -1 : 0
  return `translate(${translateX}%, ${translateY}px)`
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  // Initialiser le thème depuis le store
  themeStore.initTheme()
})
</script>

<template>
  <nav class="navbar" :class="{ 'mobile-open': isMobileMenuOpen }">
    <div class="navbar-content">
      <!-- Menu burger pour mobile -->
      <button
        class="mobile-menu-toggle"
        @click="toggleMobileMenu"
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="Menu principal"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>

      <!-- Menu principal (caché sur mobile) -->
      <div class="navbar-menu desktop-menu">
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
          @click="themeStore.toggleTheme"
          class="theme-toggle"
          :title="themeStore.isDarkMode ? 'Passer au mode clair' : 'Passer au mode sombre'"
        >
          <i v-if="themeStore.isDarkMode" class="fas fa-sun icon"></i>
          <i v-else class="fas fa-moon icon"></i>
        </button>
      </div>

      <!-- Menu mobile -->
      <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
        <div class="mobile-menu-content">
          <div
            v-for="page in pages"
            :key="page.path"
            class="mobile-nav-item"
            :class="{ active: $route.path === page.path }"
            @click="closeMobileMenu"
          >
            <router-link :to="page.path" class="mobile-nav-link">
              {{ page.title }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Cellule glass qui slide (cachée sur mobile) -->
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
  transition-property: background, box-shadow, padding;
}

.navbar.mobile-open {
  border-radius: var(--border-radius);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
}

.navbar-menu {
  display: flex;
  gap: 0;
  position: relative;
}

.nav-item {
  position: relative;
  z-index: 2;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
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

/* Synchroniser la box-shadow avec le glass-slider */
.nav-item.active {
  transition: all 0.3s ease;
}

.nav-item.active:hover {
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease, box-shadow 0.3s ease 0.1s;
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
  border-radius: var(--border-radius);
  transition: transform 0.3s ease;
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
  padding: 0.75rem;
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

/* Menu burger pour mobile */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  margin-left: 0.5rem;
}

.burger-line {
  width: 100%;
  height: 3px;
  background: var(--text-secondary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-toggle.active .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active .burger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Menu mobile */
.mobile-menu {
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 0.5rem;
  padding: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  transform: translateY(-10px);
  max-height: 0;
  overflow: hidden;
  order: 3;
  display: none;
}


.mobile-menu.open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
  max-height: 300px;
  display: block;
  padding-bottom: 0.5rem;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-item {
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  text-align: center;
}

.mobile-nav-item.active {
  background: rgba(255, 255, 255, 0.15);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.mobile-nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  display: block;
  width: 100%;
}

.mobile-nav-item.active .mobile-nav-link {
  color: var(--text-primary);
  font-weight: 600;
}

.mobile-nav-item:hover {
  transform: translateY(-1px);
}

.mobile-nav-item:hover .mobile-nav-link {
  color: var(--text-primary);
}

/* Responsive design */
@media (max-width: 800px) {
  .desktop-menu {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .glass-slider {
    display: none;
  }

  .navbar {
    padding: 0.50rem 0.75rem;
  }

  .navbar-content {
    justify-content: space-between;
  }
}

@media (min-width: 801px) {
  .mobile-menu-toggle {
    display: none;
  }

  .mobile-menu {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
