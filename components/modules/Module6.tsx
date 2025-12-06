'use client'

import React, { useEffect } from 'react'

export default function Module6() {
  useEffect(() => {
    const renderMath = () => {
      if (typeof window !== 'undefined' && (window as any).renderMathInElement) {
        const target = document.getElementById('mod6-content')
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
    <div className="max-w-5xl mx-auto fade-in" id="mod6-content">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <span className="text-purple-600 font-mono text-xs font-bold uppercase tracking-widest">Module 06 & 07</span>
        <h1 className="text-4xl font-black text-slate-900 mt-2">Integral Theorems</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="eli5-box">
          <h3 className="font-bold text-green-800">Pizza (D) vs Crust (C)</h3>
          <p className="text-green-700 text-sm mt-2"><strong>Green&apos;s Theorem</strong> relates summing the &quot;curl&quot; on the pepperoni (Region D) to walking around the crust (Boundary C).</p>
        </div>
        <div className="rigor-box">
          <h3 className="font-bold text-slate-800">Surface Integrals</h3>
          <p className="text-sm text-slate-600 mb-2"><strong>Scalar ({'$dS$'}):</strong> &quot;Weighing the balloon skin.&quot; Mass/Area.<br />Formula: {'$|r_u \\times r_v| dA$'}.</p>
          <p className="text-sm text-slate-600"><strong>Flux ({'$d\\mathbf{S}$'}):</strong> &quot;Water flowing through the net.&quot;<br />Formula: {'$(r_u \\times r_v) dA$'}. Note it&apos;s a vector.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 border-l-8 border-green-500 rounded shadow-sm">
          <h3 className="font-bold text-2xl mb-2">Green&apos;s (2D)</h3>
          <p className="italic text-slate-600 mb-2">Boundary line integral to Region double integral.</p>
          <div className="math-block">{'$$ \\oint_C P dx + Q dy = \\iint_D (Q_x - P_y) dA $$'}</div>
        </div>
        <div className="bg-white p-6 border-l-8 border-blue-500 rounded shadow-sm">
          <h3 className="font-bold text-2xl mb-2">Stokes&apos; (3D Surface)</h3>
          <p className="italic text-slate-600 mb-2">Boundary circulation to Surface curl flux.</p>
          <div className="math-block">{'$$ \\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S \\text{curl } \\mathbf{F} \\cdot d\\mathbf{S} $$'}</div>
        </div>
        <div className="bg-white p-6 border-l-8 border-purple-500 rounded shadow-sm">
          <h3 className="font-bold text-2xl mb-2">Divergence (3D Solid)</h3>
          <p className="italic text-slate-600 mb-2">Surface flux to Volume divergence.</p>
          <div className="math-block">{'$$ \\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_E \\text{div } \\mathbf{F} dV $$'}</div>
        </div>
      </div>
    </div>
  )
}
