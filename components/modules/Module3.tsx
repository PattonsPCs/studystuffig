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
        <h3 className="font-bold text-lg text-green-800 mb-2">ELI5: The Roller Coaster Physics</h3>
        <p className="text-green-700 mb-2">
          Imagine you are in a roller coaster car at night. You can&apos;t see the track, only feel the forces.
        </p>
        <ul className="list-disc pl-5 text-green-700 space-y-2">
          <li><strong>r(t) [Position]:</strong> Your GPS coordinates.</li>
          <li><strong>T (Tangent):</strong> The direction the headlights are pointing. It is PURE direction (length 1), ignoring how fast you are going.</li>
          <li><strong>N (Normal):</strong> The direction you feel &quot;pushed&quot; when you turn. If you turn left, you feel pushed right, but the Force is pulling you Left (inward). N always points <em>inside</em> the turn.</li>
          <li><strong>B (Binormal):</strong> The direction of the &quot;twist&quot;. If the track corkscrews, B changes. It points straight up out of your seat (perpendicular to T and N).</li>
        </ul>
      </div>

      <section className="my-8">
        <h3 className="font-bold text-2xl mb-4 text-slate-800">The Frenet-Serret Frame (TNB)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <strong className="text-teal-600 block mb-2">1. Unit Tangent (T)</strong>
            <p className="text-sm text-slate-600 mb-2">The normalized velocity vector.</p>
            <div className="math-block">{'$$ \\mathbf{T}(t) = \\frac{\\mathbf{r}\'(t)}{|\\mathbf{r}\'(t)|} $$'}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <strong className="text-teal-600 block mb-2">2. Principal Unit Normal (N)</strong>
            <p className="text-sm text-slate-600 mb-2">Direction of the turn. Orthogonal to T.</p>
            <div className="math-block">{'$$ \\mathbf{N}(t) = \\frac{\\mathbf{T}\'(t)}{|\\mathbf{T}\'(t)|} $$'}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <strong className="text-teal-600 block mb-2">3. Binormal Vector (B)</strong>
            <p className="text-sm text-slate-600 mb-2">Orthogonal to both. Defined by Cross Product.</p>
            <div className="math-block">{'$$ \\mathbf{B}(t) = \\mathbf{T}(t) \\times \\mathbf{N}(t) $$'}</div>
          </div>
        </div>
      </section>

      <div className="rigor-box">
        <h3 className="font-bold text-lg text-slate-800 mb-2">Curvature ({'$\\kappa$'})</h3>
        <p className="text-sm text-slate-600 mb-2">How &quot;tight&quot; is the turn? A straight line has Curvature 0. A small circle has high Curvature.</p>
        <div className="math-block">{'$$ \\kappa = \\left| \\frac{d\\mathbf{T}}{ds} \\right| = \\frac{|\\mathbf{r}\'(t) \\times \\mathbf{r}\'\'(t)|}{|\\mathbf{r}\'(t)|^3} $$'}</div>
      </div>
    </div>
  )
}
