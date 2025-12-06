'use client'

import React, { useEffect } from 'react'

export default function Module1() {
  useEffect(() => {
    const renderMath = () => {
      if (typeof window !== 'undefined' && (window as any).renderMathInElement) {
        const target = document.getElementById('mod1-content')
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
    <div className="max-w-5xl mx-auto fade-in" id="mod1-content">
      <header className="mb-10 border-b border-slate-200 pb-6">
        <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">Module 01</span>
        <h1 className="text-4xl font-black text-slate-900 mt-2">Space, Vectors & Operations</h1>
      </header>
      <div className="eli5-box">
        <h3 className="font-bold text-lg text-green-800 mb-2">Concept: What is a Vector?</h3>
        <p className="text-green-700">Imagine you are a pilot. &quot;Speed&quot; is just how fast you are going (Scalar). But &quot;Velocity&quot; is how fast AND which way you are pointing (Vector). Vectors are just arrows in space. We do math on the arrows to find out where they land.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg mb-3">Dot Product (The &quot;Alignment&quot; Check)</h3>
          <p className="text-sm mb-2">Tells you how much two vectors point in the same direction.</p>
          <div className="math-block">{'$$ \\mathbf{u} \\cdot \\mathbf{v} = |u||v|\\cos\\theta $$'}</div>
          <ul className="list-disc pl-5 text-sm mt-2 text-slate-600">
            <li>Result is a <strong>NUMBER</strong> (Scalar).</li>
            <li>If 0, they are <strong>Orthogonal</strong> (90 degrees).</li>
            <li>If &gt; 0, angle is Acute. If &lt; 0, angle is Obtuse.</li>
          </ul>
        </section>
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg mb-3">Cross Product (The &quot;Normal&quot; Maker)</h3>
          <p className="text-sm mb-2">Creates a new vector perpendicular to the first two.</p>
          <div className="math-block">{'$$ \\mathbf{u} \\times \\mathbf{v} = \\text{Vector } \\mathbf{n} $$'}</div>
          <ul className="list-disc pl-5 text-sm mt-2 text-slate-600">
            <li>Result is a <strong>VECTOR</strong>.</li>
            <li>Magnitude = Area of the parallelogram they form.</li>
            <li>Order matters! {'$u \\times v = -(v \\times u)$'}.</li>
          </ul>
        </section>
      </div>
      <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg mb-4">Projections (The &quot;Shadow&quot;)</h3>
        <p className="text-sm text-slate-600 mb-4">Imagine shining a light straight down on vector <strong>a</strong>. Its shadow on the floor (vector <strong>b</strong>) is the projection.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <strong className="text-blue-600">Scalar Projection (Length of shadow)</strong>
            <div className="math-block">{'$$ \\text{Comp}_b a = \\frac{a \\cdot b}{|b|} $$'}</div>
          </div>
          <div>
            <strong className="text-blue-600">Vector Projection (The shadow itself)</strong>
            <div className="math-block">{'$$ \\text{Proj}_b a = \\left(\\frac{a \\cdot b}{|b|^2}\\right) \\mathbf{b} $$'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
