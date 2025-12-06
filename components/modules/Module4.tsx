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
        <h1 className="text-4xl font-black text-slate-900 mt-2">Optimization & Lagrange</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-amber-500 pl-4">Lagrange Multipliers: The &quot;Why&quot;</h2>
        <div className="eli5-box">
          <h3 className="font-bold text-lg text-green-800 mb-2">The Hiking Analogy</h3>
          <p className="text-green-700 mb-2">Imagine you are hiking on a mountain (the function {'$f(x,y)$'}). You want to reach the highest possible altitude, BUT you are forced to stay on a specific trail (the constraint {'$g(x,y)=k$'}).</p>
          <p className="text-green-700">The highest point on your trail occurs when the trail runs <strong>parallel</strong> to the mountain&apos;s contour lines. Since Gradients are perpendicular to contour lines, the gradient of the mountain and the gradient of your trail must be parallel!</p>
        </div>
        <div className="math-block text-center">
          {'$$ \\nabla f = \\lambda \\nabla g $$'}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-blue-500 pl-4">Implicit Function Theorem</h2>
        <div className="rigor-box">
          <p className="mb-2">For a level surface {'$F(x,y,z) = 0$'} where you cannot easily solve for {'$z$'}:</p>
          <div className="text-center font-bold text-lg my-4">
            {'$$ \\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} $$'}
          </div>
          <p className="text-sm"><strong>Memory Trick:</strong> Notice the variables &quot;flip&quot;. Finding {'$z$'} w.r.t {'$x$'}? Put {'$F_x$'} on top and {'$F_z$'} on bottom. Don&apos;t forget the MINUS sign.</p>
        </div>
      </section>
    </div>
  )
}
