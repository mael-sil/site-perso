<script setup lang="ts">
// Page d'accueil
import AboutSection from '@/components/AboutSection.vue'
</script>

<template>
  <div class="page accueil">
    <!-- Hero Section -->
    <section class="hero">
      <!-- Bubble Background -->
      <div class="bubbles">
        <div class="bubble" v-for="n in 30" :key="n" :style="{
          '--index': n,
          '--total': 30,
          '--size': `${Math.random() * 60 + 30}px`,
          '--offset': `${Math.random() * 40 - 20}%`,
          '--delay': `${Math.random() * 15 + 2}s`
        }"></div>
      </div>

      <div class="hero-content">
        <div class="hero-top">
          <p class="hero-subtitle">Salut, moi c'est</p>
          <h1 class="hero-title">Mael Silvestre-Siaz</h1>
          <p class="hero-subtitle">Étudiant en Informatique — Développeur fullstack</p>
        </div>
      </div>
      <div class="hero-bottom">
            <div class="hero-actions">
              <RouterLink to="/projets" class="btn btn-primary">Voir mes projets</RouterLink>
              <RouterLink to="/contact" class="btn btn-secondary">Me contacter</RouterLink>
              <a class="btn btn-ghost" href="https://github.com/mael-sil" target="_blank" rel="noopener">GitHub</a>
            </div>
            <ul class="hero-tags">
              <li>Vue.js</li>
              <li>Node.js</li>
              <li>FastAPI</li>

            </ul>
            <ul class="hero-tags">
              <li>Docker</li>
              <li>SQL</li>
              <li>...</li>
            </ul>
          </div>
    </section>

    <!-- Main Content -->
    <AboutSection />
  </div>
</template>

<style scoped>
.accueil {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary-color) 0%, #667eea 100%);
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4rem 2rem;
  padding-top: 120px;
  position: relative;
  overflow: hidden;
  flex-direction: column;
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
  animation-delay: calc(var(--delay) * -1);
  width: var(--size);
  height: var(--size);
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

  /* Generic positioning with random offset */
  left: calc((var(--index) - 1) * (100% / var(--total)) + var(--offset));
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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-secondary);
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  color: var(--text-secondary);
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 1rem;
}

.hero-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-text-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hero-text {
  color: var(--text-primary);
  max-width: 820px;
  margin: 0 auto 1.75rem auto;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.hero-actions .btn {
  z-index: 2;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.15s ease, filter 0.15s ease, background 0.15s ease;
  color: #ffffff;
}

.btn:hover { transform: translateY(-2px); filter: brightness(1.05); }

.btn-primary { background: #111827; }
.btn-secondary { background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.35); }
.btn-ghost { background: transparent; border: 1px dashed rgba(255, 255, 255, 0.4); }

.hero-tags {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.25rem;
}

.hero-tags li {
  list-style: none;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.dark-mode .hero-tags li {
  color: var(--text-primary);
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
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-left {
    align-items: center;
  }

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
