// Utilitaire pour récupérer automatiquement les pages
export interface PageInfo {
  name: string
  path: string
  title: string
}

// Configuration des pages avec leurs informations
export const pages: PageInfo[] = [
  {
    name: 'Accueil',
    path: '/',
    title: 'Accueil'
  },
  {
    name: 'Formation',
    path: '/formation',
    title: 'Formation'
  },
  {
    name: 'Projets',
    path: '/projets',
    title: 'Projets'
  },
  {
    name: 'Contact',
    path: '/contact',
    title: 'Contact'
  }
]

// Fonction pour obtenir l'index d'une page basée sur son chemin
export function getPageIndex(path: string): number {
  return pages.findIndex(page => page.path === path)
}

// Fonction pour obtenir les routes pour le router
export function getRoutes() {
  return pages.map(page => ({
    path: page.path,
    name: page.name,
    component: () => import(`../pages/${page.name}.vue`)
  }))
}
