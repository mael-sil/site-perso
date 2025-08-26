<script setup lang="ts">
// Page de contact
</script>

<template>
  <div class="page content-padding contact">
    <div class="contact-header">
      <h1>Contact</h1>
      <p class="subtitle">Travaillons ensemble sur vos projets</p>
    </div>

    <div class="contact-grid">
      <div class="contact-card email-card">
        <div class="card-icon">
          <img src="../assets/email-icon.svg" alt="Email icon" />
        </div>
        <h3>Email</h3>
        <p>Contactez-moi directement</p>
        <a href="mailto:silvestre-siaz.mael@pm.me" class="contact-link">
          silvestre-siaz.mael@pm.me
        </a>
      </div>

      <div class="contact-card linkedin-card">
        <div class="card-icon">
          <img src="../assets/linkedin-icon.svg" alt="LinkedIn icon" />
        </div>
        <h3>LinkedIn</h3>
        <p>Connectons-nous professionnellement</p>
        <a href="www.linkedin.com/in/mael-silvestre-siaz" target="_blank" rel="noopener noreferrer" class="contact-link">
          Voir mon profil
        </a>
      </div>

      <div class="contact-card github-card">
        <div class="card-icon">
          <img src="../assets/github-icon.svg" alt="GitHub icon" />
        </div>
        <h3>GitHub</h3>
        <p>Découvrez mes projets</p>
        <a href="https://github.com/mael-sil" target="_blank" rel="noopener noreferrer" class="contact-link">
          Voir mes repos
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

h1 {
  color: var(--text-secondary);
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.25rem;
  font-weight: 400;
  opacity: 0.8;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 120px;
}

.contact-card {
  border-radius: var(--border-radius);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}


.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.card-icon img {
  width: 40px;
  height: 40px;
}

.card-icon {
  background: linear-gradient(135deg, var(--primary-color) 0%, #667eea 100%);
  color: white;
}

.contact-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.contact-card h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.contact-card p {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  line-height: 1.6;
}

.contact-link {
  display: inline-block;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--text-secondary);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  background: rgba(96, 165, 250, 0.05);
}

.contact-link:hover {
  background: rgba(96, 165, 250, 0.1);
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact {
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-card {
    padding: 2rem 1.5rem;
  }

  .card-icon {
    width: 60px;
    height: 60px;
  }

  .card-icon svg {
    width: 30px;
    height: 30px;
  }
}
</style>
