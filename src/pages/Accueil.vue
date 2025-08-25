<script setup lang="ts">
// Page d'accueil
</script>

<template>
  <div class="page accueil">
    <!-- Hero Section -->
    <section class="hero">
      <!-- Bubble Background -->
      <div class="bubbles">
        <div class="bubble" v-for="n in 20" :key="n" :style="{ 
          '--index': n, 
          '--total': 20,
          '--size': `${Math.random() * 60 + 30}px`,
          '--offset': `${Math.random() * 40 - 20}%`
        }"></div>
      </div>
      
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
  background: linear-gradient(135deg, var(--primary-color) 0%, #667eea 100%);
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  padding-top: 120px;
  position: relative;
  overflow: hidden;
}

/* Bubble Background - Generic System with Randomness */
.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bubble {
  position: absolute;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  animation: float 12s ease-in-out infinite;
  width: var(--size);
  height: var(--size);
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  
  /* Generic positioning with random offset */
  left: calc((var(--index) - 1) * (100% / var(--total)) + var(--offset));
  animation-delay: calc((var(--index) - 1) * (12s / var(--total)));
  /* Ensure bubbles start off-screen at bottom */
  transform: translateY(100vh) scale(0.8);
  opacity: 0;
}

@keyframes float {
  0% {
    transform: translateY(100vh) scale(0.8);
    opacity: 0;
  }
  10% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-100px) scale(1.2);
    opacity: 0;
  }
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  
  .bubble {
    width: calc(var(--size) * 0.8);
    height: calc(var(--size) * 0.8);
  }
}
</style>
