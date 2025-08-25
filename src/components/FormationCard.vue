<script setup lang="ts">
interface FormationStep {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  skills: string[];
  icon: string;
}

interface Props {
  step: FormationStep;
}

defineProps<Props>();
</script>

<template>
  <div class="formation-card">
    <div class="card-icon">
      <img :src="step.icon" :alt="step.title" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ step.title }}</h3>
      <h4 class="card-institution">{{ step.institution }}</h4>
      <p class="card-period">{{ step.period }}</p>
      <p class="card-description">{{ step.description }}</p>
      <div class="card-skills">
        <span 
          v-for="skill in step.skills" 
          :key="skill" 
          class="skill-tag"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.formation-card {
  background: var(--background-color);
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 45%;
  margin: 0 2.5%;
}

.formation-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.formation-card:hover::before {
  transform: scaleX(1);
}

.formation-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-dark);
  border-color: var(--secondary-color);
}

.card-icon {
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-icon img {
  width: 60px;
  height: 60px;
  filter: var(--icon-filter);
}

.card-content {
  text-align: left;
}

.card-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.card-institution {
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-period {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1rem;
  font-style: italic;
}

.card-description {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--primary-color);
  color: var(--text-primary);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid var(--tertiary-color);
}

/* Mode sombre */
.dark-mode .formation-card {
  background: var(--secondary-color);
  border-color: var(--primary-color);
}

.dark-mode .skill-tag {
  background: var(--primary-color);
  color: var(--text-inverse);
  border-color: var(--tertiary-color);
}

.dark-mode .card-icon img {
  filter: brightness(0.7);
}

/* Responsive design */
@media (max-width: 768px) {
  .formation-card {
    width: 90%;
    margin: 1rem auto;
    padding: 1.5rem;
  }
}
</style>
