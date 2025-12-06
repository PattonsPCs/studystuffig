'use client'

import React, { useEffect } from 'react'

export default function Module5() {
  useEffect(() => {
    const renderMath = () => {
      if (typeof window !== 'undefined' && (window as any).renderMathInElement) {
        const target = document.getElementById('mod5-content')
        if (target) {
          ;(window as any).renderMathInElement(target, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          })
        }
      }
    }
    const timer = setTimeout(renderMath, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-5xl mx-auto fade-in" id="mod5-content">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <span className="text-red-600 font-mono text-xs font-bold uppercase tracking-widest">Module 05</span>
        <h1 className="text-4xl font-black text-slate-900 mt-2">Integration Mastery</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-red-500 pl-4">1. The &quot;Arrow Technique&quot; for Bounds</h2>
        <div className="eli5-box">
          <h3 className="font-bold text-green-800 mb-2">How to never mess up bounds again</h3>
          <p className="text-green-700 mb-2">Don&apos;t guess. Draw a physical arrow through your 2D region.</p>
          <ol className="list-decimal pl-5 text-green-700 space-y-2">
            <li><strong>Type I (Vertical Simple):</strong> Shoot an arrow straight UP. Enters bottom curve {'$y=g_1(x)$'}, exits top curve {'$y=g_2(x)$'}.</li>
            <li><strong>Type II (Horizontal Simple):</strong> Shoot an arrow to the RIGHT. Enters left curve {'$x=h_1(y)$'}, exits right curve {'$x=h_2(y)$'}.</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-purple-500 pl-4">2. The Jacobian (The Trash Compactor)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rigor-box">
            <h4 className="font-bold mb-2">ELI5 Explanation</h4>
            <p className="text-sm">When you change coordinates (like twisting a grid), the area of the little squares changes. The Jacobian Determinant tells you exactly how much the area scales at that point.</p>
          </div>
          <div className="math-block">
            {'$$ J = \\begin{vmatrix} x_u & x_v \\\\ y_u & y_v \\end{vmatrix} $$'}
            <p className="text-red-600 font-bold mt-2">ALWAYS take the absolute value {'$|J|$'}!</p>
          </div>
        </div>
      </section>
    </div>
  )
}
