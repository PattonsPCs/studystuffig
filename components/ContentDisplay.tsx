'use client'

import { useEffect } from 'react'
import ModuleView from './ModuleView'
import QuizView from './QuizView'
import ExamView from './ExamView'
import { Module } from '@/data/modules'
import { Quiz } from '@/data/quizzes'
import { Exam } from '@/data/exams'

interface ContentDisplayProps {
  activeId: string
  setActiveId: (id: string) => void
  setGlobalScore: (score: number) => void
  modules: Record<string, Module>
  quizData: Record<string, Quiz>
  exams: Exam[]
}

export default function ContentDisplay({
  activeId,
  setActiveId,
  setGlobalScore,
  modules,
  quizData,
  exams
}: ContentDisplayProps) {
  // Determine content type
  const isModule = activeId.startsWith('mod')
  const isQuiz = activeId.startsWith('q')
  const isExam = exams.some(e => e.id === activeId)

  return (
    <div id="content-display" className="flex-1 overflow-y-auto p-4 md:p-10 scroll-smooth">
      {isModule && (
        <ModuleView moduleId={activeId} modules={modules} />
      )}
      {isQuiz && (
        <QuizView quizId={activeId} quizData={quizData} />
      )}
      {isExam && (
        <ExamView 
          examId={activeId} 
          exams={exams}
          setGlobalScore={setGlobalScore}
          setActiveId={setActiveId}
        />
      )}
    </div>
  )
}

