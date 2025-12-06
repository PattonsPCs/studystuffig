'use client'

import React, { useEffect } from 'react'

export default function Module3() {
  useEffect(() => {
    const renderMath = () => {
      if (typeof window !== 'undefined' && (window as any).renderMathInElement) {
        const target = document.getElementById('mod3-content')
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
    <div className="max-w-5xl mx-auto fade-in" id="mod3-content">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <span className="text-teal-600 font-mono text-xs font-bold uppercase tracking-widest">Module 03</span>
        <h1 className="text-4xl font-black text-slate-900 mt-2">Vector Calculus of Curves</h1>
      </header>
      <div className="eli5-box">
        <h3 className="font-bold text-lg text-green-800 mb-2">ELI5: The Roller Coaster</h3>
        <ul className="list-disc pl-5 text-green-700 space-y-2">
          <li><strong>r(t):</strong> Your GPS coordinate on the track at time t.</li>
          <li><strong>r&apos;(t):</strong> The direction your car&apos;s nose is pointing (Velocity).</li>
          <li><strong>T(t):</strong> The &quot;Unit Tangent&quot;. Pure direction, ignoring speed.</li>
          <li><strong>N(t):</strong> The &quot;Unit Normal&quot;. The direction your body gets thrown when you turn a corner (Centripetal force).</li>
          <li><strong>B(t):</strong> The &quot;Binormal&quot;. The vector pointing straight up out of your seat (perpendicular to track and turn).</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg mb-3">TNB Frame Formulas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-slate-50 rounded">
            <strong>Tangent T</strong>
            <div className="math-block">{'$$ \\frac{r\'}{|r\'|} $$'}</div>
          </div>
          <div className="p-3 bg-slate-50 rounded">
            <strong>Normal N</strong>
            <div className="math-block">{'$$ \\frac{T\'}{|T\'|} $$'}</div>
          </div>
          <div className="p-3 bg-slate-50 rounded">
            <strong>Binormal B</strong>
            <div className="math-block">{'$$ T \\times N $$'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
