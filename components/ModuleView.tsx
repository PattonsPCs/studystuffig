'use client'

import { useEffect, useRef } from 'react'
import { Module } from '@/data/modules'
import Module1 from './modules/Module1'
import Module2 from './modules/Module2'
import Module3 from './modules/Module3'
import Module4 from './modules/Module4'
import Module5 from './modules/Module5'
import Module6 from './modules/Module6'

interface ModuleViewProps {
  moduleId: string
  modules: Record<string, Module>
}

export default function ModuleView({ moduleId, modules }: ModuleViewProps) {
  const moduleComponents: Record<string, React.ComponentType> = {
    'mod1': Module1,
    'mod2': Module2,
    'mod3': Module3,
    'mod4': Module4,
    'mod5': Module5,
    'mod6': Module6,
  }

  const Component = moduleComponents[moduleId]

  if (!Component) {
    return <div>Module not found</div>
  }

  return <Component />
}

