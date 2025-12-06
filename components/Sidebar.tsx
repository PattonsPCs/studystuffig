'use client'

import { Module } from '@/data/modules'
import { Quiz } from '@/data/quizzes'
import { Exam } from '@/data/exams'

interface SidebarProps {
  activeId: string
  setActiveId: (id: string) => void
  globalScore: number
  modules: Record<string, Module>
  quizData: Record<string, Quiz>
  exams: Exam[]
}

export default function Sidebar({ 
  activeId, 
  setActiveId, 
  globalScore,
  modules,
  quizData,
  exams 
}: SidebarProps) {
  return (
    <aside className="w-80 bg-white border-r border-slate-200 flex flex-col z-20 shadow-xl hidden md:flex">
      <div className="p-6 border-b border-slate-100 bg-slate-50">
        <h1 className="text-xl font-black text-slate-800 tracking-tighter">
          VECTOR<span className="text-blue-600">MASTER</span>
        </h1>
        <p className="text-xs text-slate-500 font-mono mt-1">Ultimate Study Suite</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 space-y-6 px-4">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
            Deep Dive Modules
          </h3>
          <div className="space-y-1">
            {Object.keys(modules).map((k) => (
              <button
                key={k}
                className={`w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded flex items-center transition-colors nav-item ${activeId === k ? 'active' : ''}`}
                onClick={() => setActiveId(k)}
              >
                <span className="mr-3 text-lg">{modules[k].icon}</span>
                <span className="font-medium">{modules[k].title}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
            Practice Quizzes (Untimed)
          </h3>
          <div className="space-y-1">
            {Object.keys(quizData).map((k) => (
              <button
                key={k}
                className={`w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded flex items-center transition-colors nav-item ${activeId === k ? 'active' : ''}`}
                onClick={() => setActiveId(k)}
              >
                <span className="mr-3 text-lg">📝</span>
                <span className="font-medium">{quizData[k].title}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
            Exam Simulator (Timed)
          </h3>
          <div className="space-y-1">
            {exams.map((exam) => (
              <button
                key={exam.id}
                className={`w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded flex items-center transition-colors nav-item ${activeId === exam.id ? 'active' : ''}`}
                onClick={() => setActiveId(exam.id)}
              >
                <span className="mr-3 text-lg">⏱️</span>
                <span className="font-medium">{exam.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200 bg-slate-50">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold text-slate-600">Mastery Index</span>
          <span className="text-xs font-mono font-bold text-blue-600">{globalScore}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-700" 
            style={{ width: `${globalScore}%` }}
          ></div>
        </div>
      </div>
    </aside>
  )
}

