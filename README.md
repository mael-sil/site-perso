# 🚀 Site Personnel - Maël Silvestre-Siaz

Un site web moderne et responsive développé avec Vue.js 3, TypeScript et Vite pour présenter mon portfolio, mes compétences et mes projets.

## ✨ Fonctionnalités

- **Design moderne** avec animations fluides et interface utilisateur intuitive
- **Thème adaptatif** (clair/sombre) avec persistance des préférences
- **Responsive design** optimisé pour tous les appareils
- **Navigation fluide** avec Vue Router
- **Animations CSS** avec système de bulles dynamiques
- **Performance optimisée** grâce à Vite et Vue 3

## 🛠️ Technologies utilisées

### Frontend
- **Vue.js 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique pour un code plus robuste
- **Vue Router 4** - Gestion des routes et navigation
- **Pinia** - Gestion d'état moderne pour Vue
- **CSS3** - Animations, gradients et design moderne

### Outils de développement
- **Vite** - Build tool ultra-rapide
- **ESLint** - Linting du code
- **Prettier** - Formatage automatique du code
- **Vue DevTools** - Outils de développement Vue

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── AboutSection.vue
│   ├── FormationCard.vue
│   ├── NavBar.vue
│   └── SiteFooter.vue
├── pages/              # Pages de l'application
│   ├── AccueilPage.vue
│   ├── ContactPage.vue
│   ├── ExperiencesPage.vue
│   ├── FormationPage.vue
│   └── ProjetsPage.vue
├── stores/             # Gestion d'état Pinia
│   └── theme.ts
├── styles/             # Styles CSS globaux
│   ├── main.css
│   ├── variables.css
│   └── index.css
├── utils/              # Utilitaires et helpers
│   └── pages.ts
├── App.vue             # Composant racine
├── main.ts             # Point d'entrée
└── router/             # Configuration des routes
    └── index.ts
```

## 📱 Pages disponibles

- **Accueil** (`/`) - Présentation et section "À propos"
- **Formation** (`/formation`) - Parcours académique et certifications
- **Projets** (`/projets`) - Portfolio des projets réalisés
- **Expériences** (`/experiences`) - Expériences professionnelles
- **Contact** (`/contact`) - Formulaire de contact et informations

## 🌟 Fonctionnalités techniques

### Animations CSS
- **Système de bulles** dynamiques sur la page d'accueil
- **Transitions fluides** entre les pages
- **Animations d'entrée** pour les composants
- **Effets de hover** interactifs

### Responsive Design
- **Mobile-first** approach
- **Breakpoints** optimisés pour tous les écrans
- **Navigation adaptative** selon la taille d'écran
- **Images et contenus** qui s'adaptent automatiquement

### Performance
- **Lazy loading** des composants de pages
- **Optimisation Vite** pour un build rapide
- **Code splitting** automatique
- **Assets optimisés** et compressés
