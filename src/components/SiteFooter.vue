<script setup lang="ts">
// Composant Footer
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <span class="footer-text">
        <div class="footer-left">
          Icônes: <a href="https://fontawesome.com/" target="_blank" rel="noopener">FontAwesome</a> •
          Emojis: <a href="https://openmoji.org/" target="_blank" rel="noopener">OpenMoji</a>
        </div>
        <div class="footer-right">
          {{ currentYear }} | Mael Silvestre-Siaz
        </div>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: transparent;
  padding-top: 5rem;
  margin-top: auto;
}

.footer-content {
  width: 100%;
  margin: 0 auto;
  padding: 0 0.5rem;
  text-align: center;
}

.footer-text {
  width: 100%;
  color: var(--text-secondary);
  font-size: 0.9rem;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-text a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-text a:hover {
  color: var(--text-secondary);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
  }

  .footer-text {
    font-size: 0.8rem;
  }
}
</style>
