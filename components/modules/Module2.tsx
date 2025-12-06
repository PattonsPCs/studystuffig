'use client'

import React, { useEffect } from 'react'
import GeometryLab from '../GeometryLab'

export default function Module2() {
  useEffect(() => {
    const renderMath = () => {
      if (typeof window !== 'undefined' && (window as any).renderMathInElement) {
        const target = document.getElementById('mod2-content')
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
    <div className="max-w-5xl mx-auto fade-in" id="mod2-content">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <span className="text-indigo-600 font-mono text-xs font-bold uppercase tracking-widest">Module 02</span>
        <h1 className="text-4xl font-black text-slate-900 mt-2">Lines, Planes & Quadrics</h1>
        <p className="text-slate-600 mt-2">Visualizing linear and quadratic structures in {'$R^3$'}.</p>
      </header>
      
      <GeometryLab />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rigor-box">
          <h3 className="font-bold text-lg text-slate-800 mb-2">Equations of Lines</h3>
          <p className="text-sm text-slate-600 mb-2">Requires Point {'$P_0$'} and Direction Vector {'$\\mathbf{v}$'}.</p>
          <div className="math-block">{'$$ r(t) = r_0 + t\\mathbf{v} $$'}</div>
          <p className="text-sm mt-2"><strong>Parametric:</strong> {'$x=x_0+at, y=y_0+bt, z=z_0+ct$'}</p>
          <p className="text-sm mt-2"><strong>Symmetric:</strong> {'$\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}$'}</p>
        </div>
        <div className="rigor-box">
          <h3 className="font-bold text-lg text-slate-800 mb-2">Equations of Planes</h3>
          <p className="text-sm text-slate-600 mb-2">Requires Point {'$P_0$'} and Normal Vector {'$\\mathbf{n}$'}.</p>
          <div className="math-block">{'$$ a(x-x_0) + b(y-y_0) + c(z-z_0) = 0 $$'}</div>
          <p className="text-sm mt-2">Normal vector {'$\\mathbf{n} = \\langle a, b, c \\rangle$'} sticks straight out of the plane face. To find it, cross product two vectors lying on the plane!</p>
        </div>
      </div>
    </div>
  )
}
