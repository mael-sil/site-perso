<script setup lang="ts">
// Composant section À propos

const skillsData = {
  "categories": [
    {
      "id": "frontend",
      "title": "Frontend",
      "skills": [
        "Vue.js",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "WebSocket"
      ]
    },
    {
      "id": "backend",
      "title": "Backend",
      "skills": [
        "Node.js",
        "Express.js",
        "Socket.io",
        "FastAPI",
        "PHP",
        "Java",
        "Python",
        "C++"
      ]
    },
    {
      "id": "devops",
      "title": "DevOps & Outils",
      "skills": [
        "Docker",
        "Git",
        "GitHub",
        "GitLab",
        "CI/CD",
        "SQL",
        "MySQL",
        "UML"
      ]
    },
    {
      "id": "scientific",
      "title": "Programmation Scientifique",
      "skills": [
        "NumPy",
        "Matplotlib",
        "Pandas",
        "PyTorch",
        "Matlab",
        "Machine Learning"
      ]
    }
  ]
}
</script>

<template>
  <section class="about-section">
    <div class="about-container">
      <h2>À propos de moi</h2>

            <div class="about-content">
        <div class="about-text">
          <p class="about-intro">
            Étudiant passionné en informatique, je suis actuellement en BUT informatique à l'IUT
            Lyon 1 après un parcours enrichissant en physique.
          </p>

          <p>
            Mon parcours varié m'a permis de développer une approche analytique et rigoureuse.
            De la physique à l'informatique, j'ai acquis une
            solide base en programmation scientifique (Python, C++) avant de me spécialiser dans le
            développement web fullstack.
          </p>

          <p>
            Je suis particulièrement intéressé par le développement fullstack, le DevOps et
            l'intelligence artificielle.
          </p>
          <p>
            Mon expérience en tant que stagiaire développeur fullstack
            chez StillDev m'a permis de découvrir le développement informatique en entreprise au
            sein d'une équipe de 3 développeurs. Dans ce cadre, j'ai travaillé avec Vue.js et
            FastAPI, tout en découvrant les pratiques DevOps modernes.
          </p>
        </div>

        <div class="about-highlights">
          <div class="highlight-card search-card">
            <h3>
              <img src="/bullseye.svg" alt="bullseye" width="25" height="25">
              Alternance
            </h3>
            <p>
              <strong>Actuellement en recherche d'une alternance d'un an</strong> à partir de
              septembre 2025 dans le domaine du développement fullstack, avec un rythme d'une
              semaine en entreprise pour une semaine en formation.
            </p>
          </div>

          <div class="highlight-card experience-card">
            <h3>
              <img src="/briefcase.svg" alt="briefcase" width="25" height="25">
              Expérience Professionnelle
            </h3>
            <ul>
              <li><strong>StillDev (2025, 3 mois) :</strong> Stage développeur fullstack - Vue.js, FastAPI, Docker</li>
              <li><strong>Freelance (Depuis 2025) :</strong> Développement web et applications notamment pour StillDev</li>
            </ul>
            <router-link to="/experiences" class="btn btn-primary">Plus d'informations</router-link>
          </div>
        </div>
      </div>

      <div class="skills-overview">
        <h3>Compétences techniques</h3>
        <div class="skills-grid">
          <div
            v-for="category in skillsData.categories"
            :key="category.id"
            class="skill-category"
          >
            <h4>{{ category.title }}</h4>
            <div class="skill-tags">
              <span
                v-for="skill in category.skills"
                :key="skill"
                class="tag-primary"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
}

.experience-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.experience-card h3, .experience-card p, .experience-card ul {
  width: 100%;
}

.experience-card .btn {
  max-width: 200px;
  margin-top: 0.5rem;
}

.about-section {
  padding: 4rem 2rem;
  background-color: var(--background-color);
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-section h2 {
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
}

.about-content {
  display: flex;
  gap: 4rem;
  margin-bottom: 3rem;
}

.about-text {
  flex: 5;
}

.about-highlights {
  flex: 3;
}

.about-text {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5rem;
}

.about-intro {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--primary-color);
  line-height: 1.6;
}

.about-text p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
}



.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.highlight-icon {
  font-size: 1.1rem;
  margin-right: 0.2rem;
  display: inline-block;
}

.highlight-card {
  background: var(--surface-color);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dark-mode .highlight-card {
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
}

.search-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #667eea 100%);
  color: white;
  border: none;
}

.search-card h3,
.search-card p {
  color: var(--text-primary) !important;
}

.highlight-card h3 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlight-card p,
.highlight-card ul {
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

.highlight-card ul {
  padding-left: 1.2rem;
}

.highlight-card li {
  margin-bottom: 0.5rem;
}

.skills-overview {
  margin-top: 3rem;
}

.skills-overview h3 {
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.skill-category {
  background: linear-gradient(135deg, var(--primary-color) 0%, #667eea 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: none;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.skill-category h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

@media (max-width: 1030px) and (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    gap: 2rem;
  }

  .about-text {
    order: 2;
  }

  .about-highlights {
    order: 1;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .about-text p {
    font-size: 1rem;
  }

  .about-intro {
    font-size: 1.2rem;
  }
}
</style>
