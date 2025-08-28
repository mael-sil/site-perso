import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // État du thème (sombre par défaut)
  const isDarkMode = ref(true);

  // Initialisation depuis le localStorage
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      isDarkMode.value = false;
      document.documentElement.classList.remove('dark-mode');
    } else {
      // Par défaut, utiliser le thème sombre
      isDarkMode.value = true;
      document.documentElement.classList.add('dark-mode');
    }
  };

  // Toggle du thème
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;

    if (isDarkMode.value) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  // Watcher pour synchroniser les changements
  watch(isDarkMode, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  });

  return {
    isDarkMode,
    initTheme,
    toggleTheme
  };
});
