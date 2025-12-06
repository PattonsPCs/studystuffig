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
        <h1 className="text-4xl font-black text-slate-900 mt-2">Multiple Integration Mastery</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-red-500 pl-4">1. What are we actually finding?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="eli5-box">
            <h3 className="font-bold text-green-800 mb-2">Double Integrals: The Tent</h3>
            <p className="text-green-700 text-sm mb-2">
              Imagine a region {'$D$'} on the floor (the domain). The function {'$f(x,y)$'} is the height of the tent ceiling above the floor.
            </p>
            <ul className="list-disc pl-5 text-green-800 text-sm">
              <li><strong>Volume:</strong> {'$\\iint_D f(x,y) dA$'} gives the volume inside the tent.</li>
              <li><strong>Area:</strong> If {'$f(x,y) = 1$'}, the volume equals the Area of the base {'$D$'}.</li>
              <li><strong>Mass:</strong> If {'$D$'} is a flat metal plate and {'$f$'} is density, the integral gives Total Mass.</li>
            </ul>
          </div>
          <div className="eli5-box">
            <h3 className="font-bold text-green-800 mb-2">Triple Integrals: The Cloud</h3>
            <p className="text-green-700 text-sm mb-2">
              Now the domain {'$E$'} is a 3D solid (like a cloud).
            </p>
            <ul className="list-disc pl-5 text-green-800 text-sm">
              <li><strong>Volume:</strong> {'$\\iiint_E 1 dV$'} calculates the volume of the cloud shape itself.</li>
              <li><strong>Mass:</strong> If {'$f(x,y,z)$'} is the density at a point inside the cloud, the integral gives Total Mass.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-red-500 pl-4">2. The Coordinate Systems (Cheat Sheet)</h2>
        <p className="text-slate-600 mb-6">Choosing the right system makes impossible integrals easy. Don&apos;t forget the Jacobian (the extra term you multiply by)!</p>
        
        <div className="space-y-6">
          {/* Rectangular */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Rectangular (Cartesian)</h3>
              <span className="bg-slate-100 px-3 py-1 rounded text-xs font-mono">Jacobian: 1</span>
            </div>
            <p className="text-sm text-slate-600">Best for: Boxes, regions bound by planes.</p>
            <div className="math-block">{'$$ dV = dz dy dx $$'}</div>
          </div>

          {/* Cylindrical */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-blue-600">Cylindrical Coordinates</h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-mono font-bold">Jacobian: r</span>
            </div>
            <p className="text-sm text-slate-600 mb-2">Best for: Cylinders, Cones, Paraboloids (things with a circle shadow).</p>
            <ul className="text-sm text-slate-500 mb-4 list-disc pl-5">
              <li>{'$x = r\\cos\\theta$'}</li>
              <li>{'$y = r\\sin\\theta$'}</li>
              <li>{'$z = z$'}</li>
            </ul>
            <div className="math-block">{'$$ \\iiint f(r,\\theta,z) \\cdot r \\, dz dr d\\theta $$'}</div>
          </div>

          {/* Spherical */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-purple-600">Spherical Coordinates</h3>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-xs font-mono font-bold">Jacobian: {'$\\rho^2\\sin\\phi$'}</span>
            </div>
            <p className="text-sm text-slate-600 mb-2">Best for: Spheres, Cones, &quot;Ice Cream Cones&quot;.</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 mb-4">
              <ul className="list-disc pl-5">
                <li>{'$\\rho$'} (Rho): Distance from origin</li>
                <li>{'$\\theta$'} (Theta): Angle in xy-plane (0 to {'$2\\pi$'})</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>{'$\\phi$'} (Phi): Angle from +z axis (0 to {'$\\pi$'})</li>
                <li><strong>Note:</strong> {'$\\phi=0$'} is up, {'$\\phi=\\pi/2$'} is horizon.</li>
              </ul>
            </div>
            <div className="math-block">{'$$ \\iiint f(\\rho,\\theta,\\phi) \\cdot \\rho^2\\sin\\phi \\, d\\rho d\\phi d\\theta $$'}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
