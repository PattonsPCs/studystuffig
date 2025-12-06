export interface Module {
  title: string
  icon: string
  content: string
}

export const modules: Record<string, Module> = {
  'mod1': {
    title: '1. Vectors & Coordinates',
    icon: '📐',
    content: 'mod1'
  },
  'mod2': {
    title: '2. Lines, Planes & Surfaces',
    icon: '🏗️',
    content: 'mod2'
  },
  'mod3': {
    title: '3. Vector Functions',
    icon: '🎢',
    content: 'mod3'
  },
  'mod4': {
    title: '4. Optimization & Partials',
    icon: '🏔️',
    content: 'mod4'
  },
  'mod5': {
    title: '5. Multiple Integrals',
    icon: '🥞',
    content: 'mod5'
  },
  'mod6': {
    title: '6/7. Vector Theorems',
    icon: '🌌',
    content: 'mod6'
  }
}

