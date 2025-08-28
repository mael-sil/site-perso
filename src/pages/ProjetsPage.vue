<script setup lang="ts">
// Page de projets
defineOptions({
  name: 'ProjetsPage'
})
interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  link: string;
  technologies: string[];
  type: 'group' | 'personal';
  status: 'in-progress' | 'completed';
  icon: string;
}

const projects: Project[] = [
  {
    id: 'sudonano',
    title: 'SudoNano',
    description: 'Développement d\'un jeu de sudoku multijoueur compétitif en temps réel, avec un système d\'attaque entre joueurs.',
    period: 'Février 2025 - En cours',
    link: 'https://forge.univ-lyon1.fr/sudonano/sudonano',
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'JavaScript', 'HTML/CSS'],
    type: 'group',
    status: 'in-progress',
    icon: './alien.svg'
  },
  {
    id: 'jemultiplie',
    title: 'JeMultiplie',
    description: 'Développement d\'un site d\'entraînement au calcul mental.',
    period: 'Avril 2025 - En cours',
    link: 'https://github.com/mael-sil/JeMultiplie',
    technologies: ['Vue.js', 'JavaScript', 'HTML/CSS', 'GitHub'],
    type: 'personal',
    status: 'in-progress',
    icon: './cross.svg'
  }
];
</script>

<template>
  <div class="page projets">
    <div class="projets-container">
      <!-- Header Section -->
      <div class="projets-header">
        <h1>Mes Projets</h1>
        <p class="projets-subtitle">Découvrez mes réalisations et projets en développement</p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card"
          :class="[`project-${project.type}`, `status-${project.status}`]"
        >
          <div class="project-card-header">
            <!-- Project Icon -->
            <div class="project-icon">
              <img :src="project.icon" :alt="project.title" />

              <!-- Project Type Badge -->
              <div class="project-type-badge" :class="project.type">
                {{ project.type === 'group' ? 'Groupe' : 'Personnel' }}
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="project-content">
            <div class="project-content-text">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-period">{{ project.period }}</p>
              <p class="project-description">{{ project.description }}</p>
            </div>
            <div class="project-content-bottom">
              <!-- Technologies -->
              <div class="project-technologies">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tag-primary"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Project Link -->
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                Voir le projet
                <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section">
        <h2>Vous avez un projet en tête ?</h2>
        <p>N'hésitez pas à me contacter pour discuter de vos idées !</p>
        <RouterLink to="/contact" class="btn btn-primary">Me contacter</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projets {
  min-height: 100vh;
  padding-top: 120px;
  background: var(--background-color);
}

.projets-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header Section */
.projets-header {
  text-align: center;
  margin-bottom: 4rem;
}

.projets-header h1 {
  color: var(--text-secondary);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.projets-subtitle {
  color: var(--text-secondary);
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Project Card */
.project-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #667eea 100%);
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-card::before {
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

.project-card:hover::before {
  transform: scaleX(1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-dark);
  border: 2px solid var(--text-secondary);
}

.project-card-header {
  width: 100%;
}

/* Project Icon */
.project-icon {
  position: relative;
  text-align: center;
  margin-bottom: 1.5rem;
}

.project-icon img {
  width: 60px;
  height: 60px;
  filter: var(--icon-filter);
}

.project-type-badge {
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

.project-type-badge.group {
  background: var(--text-secondary);
  color: var(--background-color);
}

.project-type-badge.personal {
  background: var(--primary-color);
  color: var(--text-primary);
  border: 1px solid var(--text-secondary);
}

/* Project Content */
.project-content {
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.project-content-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.project-content-bottom {
  width: 100%;
}

.project-title {
  color: var(--text-primary);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.project-period {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
  font-style: italic;
}

.project-description {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

/* Technologies */
.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

/* Status Badge */
.project-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.project-status.in-progress {
  background: rgba(255, 193, 7, 0.2);
  color: #856404;
  border: 1px solid rgba(255, 193, 7, 0.3);
}

.project-status.completed {
  background: rgba(40, 167, 69, 0.2);
  color: #155724;
  border: 1px solid rgba(40, 167, 69, 0.3);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: statusPulse 2s ease-in-out infinite;
}

.status-in-progress .status-dot {
  background: #ffc107;
}

.status-completed .status-dot {
  background: #28a745;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Project Link */
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--text-secondary);
  border-radius: 25px;
  transition: all 0.3s ease;
  background: transparent;
}

.project-link:hover {
  background: var(--text-secondary);
  color: var(--background-color);
  transform: translateY(-2px);
}

.link-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.project-link:hover .link-arrow {
  transform: translateX(3px) translateY(-3px);
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
  .projets-header h1 {
    font-size: 2.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  .cta-section {
    padding: 2rem 1.5rem;
  }

  .cta-section h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .projets-container {
    padding: 1rem;
  }

  .project-card {
    padding: 1rem;
  }

  .project-technologies {
    justify-content: center;
  }
}
</style>
