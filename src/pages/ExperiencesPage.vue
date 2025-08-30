<script setup lang="ts">
// Page des expériences professionnelles
defineOptions({
  name: 'ExperiencesPage'
})

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'stage' | 'alternance' | 'emploi';
  status: 'completed' | 'in-progress';
  icon: string;
}

const experiences: Experience[] = [
  {
    id: 'stillnetwork / StillDev',
    title: 'Stagiaire développeur fullstack Vue.js / Python',
    company: 'Stillnetwork / StillDev',
    period: 'Juin 2025 - Août 2025',
    duration: '3 mois',
    description: 'Stage de 12 semaines au cours duquel j\'ai contribué au développement d\'une plateforme web B2B avec Vue.js, FastAPI et découverte des pratiques DevOps (Docker, CI/CD, bases de données, etc).',
    achievements: [
      'Analyses SWOT de solutions techniques (bases de données géographiques, services KYC) pour orienter les choix d\'architecture',
      'Données géographiques : implémentation PostgreSQL/PostGIS pour le stockage de points géographiques et le calcul de routes optimales, intégration de cartes interactives avec Leaflet dans Vue.js',
      'Notifications temps réel : création et déploiement d\'un serveur de notification avec système Listen/Notify de PostgreSQL et WebSocket',
      'Déploiement de services conteneurisés avec Docker sur Coolify',
      'API Backend : développement de routes REST et workflows avec FastAPI, Python et Temporal',
      'Interface web : développement de composants et de pages de l\'interface web avec Vue.js'
    ],
    technologies: ['Vue.js', 'FastAPI', 'Python', 'PostgreSQL', 'PostGIS', 'Docker', 'WebSocket', 'Leaflet', 'Temporal'],
    type: 'stage',
    status: 'completed',
    icon: './briefcase.svg'
  }
];
</script>

<template>
  <div class="page experiences">
    <div class="experiences-container">
      <!-- Header Section -->
      <div class="experiences-header">
        <h1>Mes Expériences</h1>
        <p class="experiences-subtitle">Découvrez mon parcours professionnel et mes réalisations en entreprise</p>
      </div>

      <!-- Experiences Grid -->
      <div class="experiences-grid">
        <div
          v-for="experience in experiences"
          :key="experience.id"
          class="experience-card"
          :class="[`experience-${experience.type}`, `status-${experience.status}`]"
        >
          <div class="experience-card-header">
            <!-- Experience Icon -->
            <div class="experience-icon">
              <img :src="experience.icon" :alt="experience.title" />

              <!-- Experience Type Badge -->
              <div class="experience-type-badge" :class="experience.type">
                {{ experience.type === 'stage' ? 'Stage' : experience.type === 'alternance' ? 'Alternance' : 'Emploi' }}
              </div>
            </div>
          </div>

          <!-- Experience Content -->
          <div class="experience-content">
            <div class="experience-content-text">
              <h3 class="experience-title">{{ experience.title }}</h3>
              <div class="experience-meta">
                <span class="experience-company">{{ experience.company }}</span>
                <span class="experience-period">{{ experience.period }}</span>
                <span class="experience-duration">{{ experience.duration }}</span>
              </div>
              <p class="experience-description">{{ experience.description }}</p>

              <!-- Achievements -->
              <div class="experience-achievements">
                <h4>Principales réalisations :</h4>
                <ul>
                  <li v-for="achievement in experience.achievements" :key="achievement">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="experience-content-bottom">
              <!-- Technologies -->
              <div class="experience-technologies">
                <h4>Technologies utilisées :</h4>
                <div class="tech-tags">
                  <span
                    v-for="tech in experience.technologies"
                    :key="tech"
                    class="tag-primary"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section">
        <h2>Vous souhaitez en savoir plus ?</h2>
        <p>N'hésitez pas à me contacter pour discuter de mes expériences !</p>
        <RouterLink to="/contact" class="btn btn-primary">Me contacter</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experiences {
  min-height: 100vh;
  padding-top: 120px;
  background: var(--background-color);
}

.experiences-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header Section */
.experiences-header {
  text-align: center;
  margin-bottom: 4rem;
}

.experiences-header h1 {
  color: var(--text-secondary);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.experiences-subtitle {
  color: var(--text-secondary);
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Experiences Grid */
.experiences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Experience Card */
.experience-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #667eea 100%);
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.experience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--text-secondary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.experience-card:hover::before {
  transform: scaleX(1);
}

.experience-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-dark);
  border: 2px solid var(--text-secondary);
}

.experience-card-header {
  width: 100%;
}

/* Experience Icon */
.experience-icon {
  position: relative;
  text-align: center;
  margin-bottom: 1.5rem;
}

.experience-icon img {
  width: 60px;
  height: 60px;
  filter: var(--icon-filter);
}

.experience-type-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.experience-type-badge.stage {
  background: var(--text-secondary);
  color: var(--background-color);
}

.experience-type-badge.alternance {
  background: var(--primary-color);
  color: var(--text-primary);
  border: 1px solid var(--text-secondary);
}

.experience-type-badge.emploi {
  background: #28a745;
  color: var(--text-primary);
  border: 1px solid var(--text-secondary);
}

/* Experience Content */
.experience-content {
  text-align: left;
}

.experience-content-text {
  margin-bottom: 2rem;
}

.experience-title {
  color: var(--text-primary);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.experience-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.experience-company {
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 1.1rem;
}

.experience-period {
  color: var(--text-secondary);
  font-size: 1rem;
  font-style: italic;
}

.experience-duration {
  background: rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
}

.experience-description {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

/* Achievements */
.experience-achievements {
  margin-bottom: 2rem;
}

.experience-achievements h4 {
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.experience-achievements ul {
  list-style: none;
  padding: 0;
}

.experience-achievements li {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
}

.experience-achievements li::before {
  content: '▸';
  color: var(--text-secondary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Technologies */
.experience-technologies h4 {
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}


/* CTA Section */
.cta-section {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, #667eea 100%);
  border-radius: var(--border-radius);
  margin-top: 2rem;
}

.cta-section h2 {
  color: var(--text-primary);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  color: var(--text-primary);
  border: 2px solid var(--text-primary);
  background: transparent;
}

.btn:hover {
  background: var(--text-primary);
  color: var(--background-color);
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--text-primary);
  color: var(--background-color);
}

.btn-primary:hover {
  background: transparent;
  color: var(--text-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .experiences-header h1 {
    font-size: 2.5rem;
  }

  .experiences-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .experience-card {
    padding: 1.5rem;
  }

  .experience-title {
    font-size: 1.5rem;
  }

  .experience-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .cta-section {
    padding: 2rem 1.5rem;
  }

  .cta-section h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .experiences-container {
    padding: 1rem;
  }

  .experience-card {
    padding: 1rem;
  }

  .tech-tags {
    justify-content: center;
  }
}
</style>
