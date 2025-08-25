<script setup lang="ts">
// Page d'accueil
</script>

<template>
  <div class="page accueil">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Bienvenue sur mon Portfolio</h1>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <h2>À propos</h2>
      <p>Bienvenue sur mon site CV</p>
    </section>
  </div>
</template>

<style scoped>
.accueil {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  background-color: var(--primary-color);
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  padding-top: 120px;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

/* Main Content */
.main-content {
  padding: 4rem 2rem;
  text-align: center;
  background-color: var(--background-color);
}

.main-content h2 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.main-content p {
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
