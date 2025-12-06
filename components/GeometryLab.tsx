'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

interface VizItem {
  name: string
  eq: string
  desc: string
  type: string
}

interface VizMode {
  label: string
  items: VizItem[]
}

export default function GeometryLab() {
  const [currentMode, setCurrentMode] = useState<'Linear' | 'Quadric'>('Linear')
  const [selectedItem, setSelectedItem] = useState<VizItem | null>(null)
  const eqRef = useRef<HTMLDivElement>(null)

  const modes: Record<'Linear' | 'Quadric', VizMode> = {
    'Linear': {
      label: 'Lines & Planes',
      items: [
        { name: 'Line in 3D', eq: '$$ r(t) = r_0 + t\\mathbf{v} $$', desc: 'A line is defined by a point and a direction vector.', type: 'line' },
        { name: 'Plane in 3D', eq: '$$ \\mathbf{n} \\cdot (r - r_0) = 0 $$', desc: 'A plane is defined by a point and a normal vector.', type: 'plane' }
      ]
    },
    'Quadric': {
      label: 'Quadric Surfaces',
      items: [
        { name: 'Paraboloid (Cup)', eq: '$$ z = x^2 + y^2 $$', desc: 'Elliptic Paraboloid. Traces are circles/parabolas.', type: 'paraboloid_cup' },
        { name: 'Paraboloid (Saddle)', eq: '$$ z = x^2 - y^2 $$', desc: 'Hyperbolic Paraboloid. Traces are hyperbolas/parabolas.', type: 'paraboloid_saddle' },
        { name: 'Ellipsoid', eq: '$$ \\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1 $$', desc: 'Football shape. All traces are ellipses.', type: 'ellipsoid' },
        { name: 'Cone', eq: '$$ z^2 = x^2 + y^2 $$', desc: 'Linear traces through origin.', type: 'cone' },
        { name: 'Hyperboloid (1 Sheet)', eq: '$$ x^2 + y^2 - z^2 = 1 $$', desc: 'Nuclear cooling tower. One minus sign.', type: 'hyp1' },
        { name: 'Hyperboloid (2 Sheets)', eq: '$$ -x^2 - y^2 + z^2 = 1 $$', desc: 'Two disconnected cups. Two minus signs.', type: 'hyp2' }
      ]
    }
  }

  useEffect(() => {
    if (modes[currentMode].items.length > 0) {
      setSelectedItem(modes[currentMode].items[0])
    }
  }, [currentMode])

  // Render math equation when selectedItem changes
  useEffect(() => {
    if (!selectedItem || !eqRef.current) return

    const renderMath = async () => {
      // Wait for KaTeX
      const waitForKaTeX = (): Promise<void> => {
        return new Promise((resolve) => {
          if (window.renderMathInElement) {
            resolve()
            return
          }
          const checkInterval = setInterval(() => {
            if (window.renderMathInElement) {
              clearInterval(checkInterval)
              resolve()
            }
          }, 50)
          setTimeout(() => {
            clearInterval(checkInterval)
            resolve()
          }, 3000)
        })
      }

      await waitForKaTeX()

      if (eqRef.current && window.renderMathInElement) {
        eqRef.current.textContent = selectedItem.eq
        try {
          window.renderMathInElement(eqRef.current, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          })
        } catch (error) {
          console.error('Math rendering error:', error)
        }
      }
    }

    renderMath()
  }, [selectedItem])

  const generatePlotData = (item: VizItem) => {
    const data: any[] = []
    const layout = {
      margin: { t: 0, b: 0, l: 0, r: 0 },
      paper_bgcolor: 'black',
      scene: {
        xaxis: { range: [-3, 3], showgrid: true, gridcolor: '#333' },
        yaxis: { range: [-3, 3], showgrid: true, gridcolor: '#333' },
        zaxis: { range: [-3, 3], showgrid: true, gridcolor: '#333' },
        bgcolor: 'black',
        aspectmode: 'cube' as const
      }
    }

    if (item.type === 'line') {
      data.push({
        type: 'scatter3d',
        mode: 'lines',
        x: [-3, 3],
        y: [-3, 3],
        z: [-3, 3],
        line: { width: 8, color: '#3b82f6' },
        name: 'Line'
      })
      data.push({
        type: 'scatter3d',
        mode: 'lines+markers',
        x: [0, 1],
        y: [0, 1],
        z: [0, 1],
        line: { width: 4, color: 'white' },
        marker: { size: 4 },
        name: 'Vector v'
      })
    } else if (item.type === 'plane') {
      data.push({
        type: 'mesh3d',
        x: [-2, 2, 2, -2],
        y: [-2, -2, 2, 2],
        z: [0, 0, 0, 0],
        color: '#3b82f6',
        opacity: 0.5,
        name: 'Plane'
      })
      data.push({
        type: 'scatter3d',
        mode: 'lines+markers',
        x: [0, 0],
        y: [0, 0],
        z: [0, 2],
        line: { width: 6, color: 'red' },
        marker: { size: 4 },
        name: 'Normal n'
      })
    } else if (item.type.includes('paraboloid')) {
      const isSad = item.type.includes('saddle')
      const x: number[] = []
      const y: number[] = []
      const z: number[][] = []
      
      for (let i = -2; i <= 2; i += 0.1) {
        x.push(i)
        y.push(i)
      }
      
      for (let j = 0; j < y.length; j++) {
        const row: number[] = []
        for (let k = 0; k < x.length; k++) {
          row.push(isSad ? (x[k] ** 2 - y[j] ** 2) / 2 : (x[k] ** 2 + y[j] ** 2) / 2)
        }
        z.push(row)
      }
      
      data.push({
        type: 'surface',
        z,
        x,
        y,
        colorscale: isSad ? 'Reds' : 'Viridis',
        showscale: false
      })
    } else if (item.type === 'ellipsoid') {
      const x: number[] = []
      const y: number[] = []
      const z: number[] = []
      
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const theta = (i / 19) * Math.PI
          const phi = (j / 19) * 2 * Math.PI
          x.push(2 * Math.sin(theta) * Math.cos(phi))
          y.push(1.5 * Math.sin(theta) * Math.sin(phi))
          z.push(1 * Math.cos(theta))
        }
      }
      
      data.push({
        type: 'mesh3d',
        x,
        y,
        z,
        alphahull: 0,
        opacity: 0.8,
        color: '#f59e0b'
      })
    } else if (item.type === 'cone') {
      const x: number[] = []
      const y: number[] = []
      const z: number[][] = []
      
      for (let i = -2; i <= 2; i += 0.1) {
        x.push(i)
        y.push(i)
      }
      
      for (let j = 0; j < y.length; j++) {
        const row: number[] = []
        for (let k = 0; k < x.length; k++) {
          row.push(Math.sqrt(x[k] ** 2 + y[j] ** 2))
        }
        z.push(row)
      }
      
      const z2 = z.map(r => r.map(v => -v))
      
      data.push({
        type: 'surface',
        z,
        x,
        y,
        colorscale: 'Greys',
        showscale: false
      })
      data.push({
        type: 'surface',
        z: z2,
        x,
        y,
        colorscale: 'Greys',
        showscale: false
      })
    } else if (item.type === 'hyp1') {
      const xS: number[] = []
      const yS: number[] = []
      const zS: number[] = []
      
      for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 10; j++) {
          const u = (i / 29) * 2 * Math.PI
          const v = (j / 9) * 4 - 2
          const r = Math.sqrt(1 + v * v)
          xS.push(r * Math.cos(u))
          yS.push(r * Math.sin(u))
          zS.push(v)
        }
      }
      
      data.push({
        type: 'mesh3d',
        x: xS,
        y: yS,
        z: zS,
        alphahull: 0,
        opacity: 0.8,
        color: '#06b6d4'
      })
    } else if (item.type === 'hyp2') {
      const xS: number[] = []
      const yS: number[] = []
      const zS: number[][] = []
      
      for (let i = -2; i <= 2; i += 0.15) {
        xS.push(i)
        yS.push(i)
      }
      
      for (let j = 0; j < yS.length; j++) {
        const row: number[] = []
        for (let k = 0; k < xS.length; k++) {
          const val = 1 + xS[k] ** 2 + yS[j] ** 2
          row.push(Math.sqrt(val))
        }
        zS.push(row)
      }
      
      const zS2 = zS.map(r => r.map(v => -v))
      
      data.push({
        type: 'surface',
        z: zS,
        x: xS,
        y: yS,
        colorscale: 'Blues',
        showscale: false
      })
      data.push({
        type: 'surface',
        z: zS2,
        x: xS,
        y: yS,
        colorscale: 'Reds',
        showscale: false
      })
    }

    return { data, layout }
  }

  if (!selectedItem) return null

  const { data, layout } = generatePlotData(selectedItem)

  return (
    <section className="mb-12 bg-slate-900 rounded-2xl shadow-xl border border-slate-700 overflow-hidden text-white">
      <div className="p-4 bg-slate-800 border-b border-slate-700 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="font-bold text-xl">Interactive Geometry Lab</h3>
          <p className="text-xs text-slate-400">Switch between Lines, Planes, and all Quadric Surfaces.</p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          {(['Linear', 'Quadric'] as const).map((mode) => (
            <button
              key={mode}
              className={`px-4 py-2 rounded text-sm font-bold transition-colors viz-tab ${
                currentMode === mode ? 'active' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
              }`}
              onClick={() => setCurrentMode(mode)}
            >
              {modes[mode].label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 h-[600px]">
        <div className="lg:col-span-3 bg-slate-800 p-6 border-r border-slate-700 flex flex-col">
          <h4 className="text-2xl font-bold text-blue-400 mb-2">{selectedItem.name}</h4>
          <div
            ref={eqRef}
            className="bg-slate-900 p-4 rounded mb-6 font-mono text-sm border border-slate-600 min-h-[80px] flex items-center justify-center text-center"
          />
          <div className="flex-1 overflow-y-auto space-y-2">
            {modes[currentMode].items.map((item, idx) => (
              <button
                key={idx}
                className={`w-full text-left px-3 py-2 rounded text-sm font-bold transition-colors viz-subtab ${
                  selectedItem === item
                    ? 'active'
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-400 italic">{selectedItem.desc}</div>
        </div>

        <div className="lg:col-span-9 bg-black relative">
          <Plot
            data={data}
            layout={layout}
            config={{ responsive: true, displayModeBar: false }}
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute bottom-4 right-4 bg-black/50 p-2 rounded text-xs text-white pointer-events-none">
            Drag to Rotate • Scroll to Zoom
          </div>
        </div>
      </div>
    </section>
  )
}

