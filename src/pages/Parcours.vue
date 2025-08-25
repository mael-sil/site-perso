<script setup lang="ts">
import FormationCard from '@/components/FormationCard.vue';

interface FormationStep {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  skills: string[];
  icon: string;
}

const formationSteps: FormationStep[] = [
  {
    id: 'unige',
    title: 'Bachelor en Physique',
    institution: 'Université de Genève',
    period: '2020 - 2023',
    description: 'Formation en physique fondamentale avec acquisition de compétences en programmation C++ et méthodes scientifiques.',
    skills: ['Physique', 'Mathématiques', 'C++', 'Python', 'LaTeX'],
    icon: '/book.svg'
  },
  {
    id: 'epfl',
    title: 'Master 1 en Science et ingénierie quantiques',
    institution: 'EPFL',
    period: '2023 - 2024',
    description: '18 ECTS validés, notamment en machine learning, avant une réorientation vers une formation informatique.',
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'PyTorch'],
    icon: '/atom.svg'
  },
  {
    id: 'iut-lyon1',
    title: 'Bachelor universitaire de technologie en informatique',
    institution: 'IUT Lyon 1',
    period: '2024 - en cours',
    description: 'BUT en année spéciale combinant les deux premières années en une seule.',
    skills: ['Java', 'Vue.js', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'Git', 'Docker', 'Linux'],
    icon: '/computer.svg'
  }
];
</script>

<template>
  <div class="page content-padding parcours">
    <div class="parcours-header">
      <h1>Mon Parcours</h1>
      <p>Découvrez mon parcours académique et professionnel</p>
    </div>
    
    <div class="parcours-container">
      <!-- Route verticale avec scroll -->
      <div class="route-container">
        <div class="route-line"></div>
        
        <!-- Étapes de formation avec route -->
        <div 
          v-for="(step, index) in formationSteps" 
          :key="step.id"
          :class="['formation-step', `step-${index + 1}`]"
          :data-step="step.id"
        >
          <!-- Point de connexion sur la route -->
          <div class="route-point">
            <div class="point-inner"></div>
          </div>
          
          <!-- Carte de formation -->
          <FormationCard :step="step" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parcours {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.parcours-header {
  text-align: center;
  margin-bottom: 3rem;
  z-index: 10;
  position: relative;
}

.parcours-header h1 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.parcours-header p {
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.parcours-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Route verticale avec scroll */
.route-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.route-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--primary-color);
  transform: translateX(-50%);
  z-index: 1;
}

/* Étapes de formation avec route */
.formation-step {
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  min-height: 200px;
}

.formation-step:nth-child(odd) {
  flex-direction: row;
}

.formation-step:nth-child(even) {
  flex-direction: row-reverse;
}

/* Point de connexion sur la route */
.route-point {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 20px;
  height: 20px;
  background: var(--background-color);
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.point-inner {
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: pointPulse 2s ease-in-out infinite;
}

@keyframes pointPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}



/* Animation d'entrée des étapes */
.formation-step {
  animation: stepSlideIn 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(50px);
}

.step-1 { animation-delay: 0.1s; }
.step-2 { animation-delay: 0.3s; }
.step-3 { animation-delay: 0.5s; }

@keyframes stepSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .parcours-header h1 {
    font-size: 2rem;
  }
  
  .formation-step {
    flex-direction: column !important;
    text-align: center;
    margin-bottom: 3rem;
  }
  

  
  .route-line {
    left: 20px;
  }
  
  .route-point {
    left: 20px;
  }
}


</style>
