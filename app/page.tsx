'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import MobileHeader from '@/components/MobileHeader'
import ContentDisplay from '@/components/ContentDisplay'
import { modules } from '@/data/modules'
import { quizData } from '@/data/quizzes'
import { exams } from '@/data/exams'

export default function Home() {
  const [activeId, setActiveId] = useState<string>('mod1')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [globalScore, setGlobalScore] = useState(0)

  useEffect(() => {
    // Load initial module
    setActiveId('mod1')
  }, [])

  return (
    <div className="flex h-screen overflow-hidden text-slate-900">
      <Sidebar 
        activeId={activeId} 
        setActiveId={setActiveId}
        globalScore={globalScore}
        modules={modules}
        quizData={quizData}
        exams={exams}
      />
      <MobileHeader 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeId={activeId}
        setActiveId={setActiveId}
        modules={modules}
        quizData={quizData}
        exams={exams}
      />
      <main className="flex-1 flex flex-col h-full relative bg-slate-50 pt-16 md:pt-0 overflow-hidden">
        <div 
          className={`fixed inset-0 bg-slate-900/50 z-40 ${mobileMenuOpen ? '' : 'hidden'}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white w-3/4 h-full p-4 overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Deep Dive Modules</h3>
                {Object.keys(modules).map((k) => (
                  <button
                    key={k}
                    className={`w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded flex items-center transition-colors nav-item ${activeId === k ? 'active' : ''}`}
                    onClick={() => {
                      setActiveId(k)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <span className="mr-3 text-lg">{modules[k].icon}</span>
                    <span className="font-medium">{modules[k].title}</span>
                  </button>
                ))}
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Practice Quizzes (Untimed)</h3>
                {Object.keys(quizData).map((k) => (
                  <button
                    key={k}
                    className={`w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded flex items-center transition-colors nav-item ${activeId === k ? 'active' : ''}`}
                    onClick={() => {
                      setActiveId(k)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <span className="mr-3 text-lg">📝</span>
                    <span className="font-medium">{quizData[k].title}</span>
                  </button>
                ))}
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Exam Simulator (Timed)</h3>
                {exams.map((exam) => (
                  <button
                    key={exam.id}
                    className={`w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded flex items-center transition-colors nav-item ${activeId === exam.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveId(exam.id)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <span className="mr-3 text-lg">⏱️</span>
                    <span className="font-medium">{exam.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ContentDisplay 
          activeId={activeId}
          setActiveId={setActiveId}
          setGlobalScore={setGlobalScore}
          modules={modules}
          quizData={quizData}
          exams={exams}
        />
      </main>
    </div>
  )
}

