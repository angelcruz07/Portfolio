import UnitedStates from '@/flags/UnitedStates.astro'
import Mexico from '@/flags/Mexico.astro'

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof Mexico }
> = {
  en: {
    code: 'en',
    name: 'English',
    flag: UnitedStates
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: Mexico
  }
}

export const defaultLang = 'es'
export const showDefaultLang = false

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí'
  },
  en: {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.about': 'About me'
  }
} as const

export const routes = {
  es: {
    home: 'inicio'
  },
  en: {
    home: 'Home'
  }
}
