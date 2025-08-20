<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDarkMode = ref(false)

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
      <div class="navbar-brand">
        <h2>Mon CV</h2>
      </div>
      
      <div class="navbar-menu">
        <router-link to="/" class="nav-link">Accueil</router-link>
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
  max-width: 1200px;
  background: var(--bg-secondary);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-pill);
  padding: 0.75rem 2rem;
  box-shadow: var(--shadow-light);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-tertiary);
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: var(--text-secondary);
}

.theme-toggle:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.icon {
  font-size: 18px;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    width: 95%;
    padding: 0.75rem 1.5rem;
  }
  
  .navbar-menu {
    gap: 1rem;
  }
  
  .navbar-brand h2 {
    font-size: 1.25rem;
  }
}
</style>
