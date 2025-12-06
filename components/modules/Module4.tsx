'use client'

import React, { useEffect } from 'react'

export default function Module4() {
  useEffect(() => {
    const renderMath = () => {
      if (typeof window !== 'undefined' && (window as any).renderMathInElement) {
        const target = document.getElementById('mod4-content')
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
    <div className="max-w-5xl mx-auto fade-in" id="mod4-content">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest">Module 04</span>
        <h1 className="text-4xl font-black text-slate-900 mt-2">Partials, Gradients & Optimization</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-amber-500 pl-4">1. Partial Derivatives: Slicing the Surface</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <strong className="text-lg text-amber-700">{'$$ f_x(x,y) $$'}</strong>
            <p className="text-sm text-slate-600 mt-2">
              Treat {'$y$'} as a constant number. You are slicing the mountain with a plane running East-West. This is the slope of that slice.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <strong className="text-lg text-amber-700">{'$$ f_y(x,y) $$'}</strong>
            <p className="text-sm text-slate-600 mt-2">
              Treat {'$x$'} as a constant number. You are slicing the mountain with a plane running North-South.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-amber-500 pl-4">2. The Gradient Vector ({'$\\nabla f$'})</h2>
        <div className="eli5-box">
          <h3 className="font-bold text-lg text-green-800 mb-2">The Compass of Calculus</h3>
          <p className="text-green-700">
            If you are standing on a hill, the Gradient is a compass arrow on your map that points to the <strong>Steepest Ascent</strong>.
          </p>
          <ul className="list-disc pl-5 mt-2 text-green-800 text-sm">
            <li>It points uphill (Steepest Ascent).</li>
            <li>The magnitude {'$|\\nabla f|$'} is the <strong>Rate</strong> of that ascent.</li>
            <li>It is ALWAYS perpendicular (normal) to the contour lines (Level Curves).</li>
          </ul>
        </div>
        <div className="math-block text-center">
          {'$$ \\nabla f(x,y) = \\langle f_x, f_y \\rangle = f_x \\mathbf{i} + f_y \\mathbf{j} $$'}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-amber-500 pl-4">3. Optimization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rigor-box">
            <h4 className="font-bold mb-2">Local Extrema</h4>
            <p className="text-sm mb-2">Find Critical Points where {'$\\nabla f = \\langle 0,0 \\rangle$'}. Then use the <strong>Second Derivative Test</strong> (D).</p>
            <div className="math-block">{'$$ D = f_{xx}f_{yy} - (f_{xy})^2 $$'}</div>
          </div>
          <div className="rigor-box">
            <h4 className="font-bold mb-2">Lagrange Multipliers</h4>
            <p className="text-sm mb-2">Optimizing {'$f$'} subject to constraint {'$g=k$'}. The gradients must be parallel.</p>
            <div className="math-block">{'$$ \\nabla f = \\lambda \\nabla g $$'}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
