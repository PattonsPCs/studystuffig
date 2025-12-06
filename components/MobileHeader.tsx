'use client'

import { Module } from '@/data/modules'
import { Quiz } from '@/data/quizzes'
import { Exam } from '@/data/exams'

interface MobileHeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  activeId: string
  setActiveId: (id: string) => void
  modules: Record<string, Module>
  quizData: Record<string, Quiz>
  exams: Exam[]
}

export default function MobileHeader({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeId,
  setActiveId,
  modules,
  quizData,
  exams
}: MobileHeaderProps) {
  return (
    <div className="md:hidden fixed top-0 w-full bg-white z-50 border-b border-slate-200 p-4 flex justify-between items-center shadow-sm">
      <span className="font-bold text-slate-800">MA 261 Suite</span>
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
        className="text-slate-600 text-2xl"
      >
        ☰
      </button>
    </div>
  )
}

