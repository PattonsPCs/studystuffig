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
        <h1 className="text-4xl font-black text-slate-900 mt-2">Vector Fields & Integral Theorems</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-purple-500 pl-4">1. Line Integrals: Two Flavors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-2">Flavor 1: Scalar Line Integral</h3>
            <div className="math-block">{'$$ \\int_C f(x,y) \\, ds $$'}</div>
            <div className="eli5-box mt-4">
              <strong className="text-green-800">The Curtain Analogy:</strong>
              <p className="text-green-700 text-sm">
                You are walking along a curvy path C on the floor. {'$f(x,y)$'} is the height of a curtain hanging above that path. You are calculating the <strong>Area of the Curtain</strong>.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-2">Flavor 2: Vector Line Integral</h3>
            <div className="math-block">{'$$ \\int_C \\mathbf{F} \\cdot d\\mathbf{r} $$'}</div>
            <div className="eli5-box mt-4">
              <strong className="text-green-800">The Work Analogy:</strong>
              <p className="text-green-700 text-sm">
                You are walking through a wind storm (Vector Field {'$\\mathbf{F}$'}). How much does the wind help you or push against you? You are calculating <strong>Work</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-purple-500 pl-4">2. The Fundamental Theorems</h2>
        <p className="text-slate-600 mb-6">These theorems relate an integral over a <strong>Boundary</strong> to an integral over the <strong>Interior</strong>.</p>

        <div className="space-y-8">
          {/* Green's */}
          <div className="bg-white p-6 border-l-8 border-green-500 rounded shadow-sm">
            <h3 className="font-bold text-2xl mb-1 text-green-700">Green&apos;s Theorem (2D)</h3>
            <p className="text-sm font-mono text-slate-400 uppercase tracking-wide mb-3">Closed Curve {'$\\to$'} Flat Region</p>
            <p className="text-slate-700 mb-4">Relates walking around a garden (Line Integral) to summing the &quot;spin&quot; (Curl) of the flowers inside.</p>
            <div className="math-block">{'$$ \\oint_C P dx + Q dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA $$'}</div>
          </div>

          {/* Stokes' */}
          <div className="bg-white p-6 border-l-8 border-blue-500 rounded shadow-sm">
            <h3 className="font-bold text-2xl mb-1 text-blue-700">Stokes&apos; Theorem (3D)</h3>
            <p className="text-sm font-mono text-slate-400 uppercase tracking-wide mb-3">Closed 3D Curve {'$\\to$'} Surface with a Rim</p>
            <p className="text-slate-700 mb-4">Green&apos;s Theorem in 3D. Relates walking around the rim of a hat to summing the curl over the surface of the hat.</p>
            <div className="math-block">{'$$ \\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S \\text{curl } \\mathbf{F} \\cdot d\\mathbf{S} $$'}</div>
          </div>

          {/* Divergence */}
          <div className="bg-white p-6 border-l-8 border-purple-500 rounded shadow-sm">
            <h3 className="font-bold text-2xl mb-1 text-purple-700">Divergence Theorem</h3>
            <p className="text-sm font-mono text-slate-400 uppercase tracking-wide mb-3">Closed Surface {'$\\to$'} Solid Volume</p>
            <p className="text-slate-700 mb-4">Relates water flowing out of a net (Surface Flux) to the expansion of water sources inside the net (Volume Divergence).</p>
            <div className="math-block">{'$$ \\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_E \\text{div } \\mathbf{F} \\, dV $$'}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
