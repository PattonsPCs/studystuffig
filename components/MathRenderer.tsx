'use client'

import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface MathRendererProps {
  content: string
  className?: string
}

export default function MathRenderer({ content, className = '' }: MathRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      // Render KaTeX math
      const renderMath = () => {
        const elements = containerRef.current?.querySelectorAll('.math-inline, .math-block')
        elements?.forEach((el) => {
          const text = el.textContent || ''
          try {
            katex.render(text, el as HTMLElement, {
              throwOnError: false,
              displayMode: el.classList.contains('math-block')
            })
          } catch (e) {
            console.error('KaTeX rendering error:', e)
          }
        })
      }

      // Process content with delimiters
      if (containerRef.current) {
        const html = content
          .replace(/\$\$([^$]+)\$\$/g, '<div class="math-block">$1</div>')
          .replace(/\$([^$]+)\$/g, '<span class="math-inline">$1</span>')
        
        containerRef.current.innerHTML = html
        renderMath()
      }
    }
  }, [content])

  return <div ref={containerRef} className={className} dangerouslySetInnerHTML={{ __html: content }} />
}

// Helper function to render math in a string
export function renderMathInString(str: string): string {
  return str
    .replace(/\$\$([^$]+)\$\$/g, (match, formula) => {
      try {
        return katex.renderToString(formula, { displayMode: true, throwOnError: false })
      } catch {
        return match
      }
    })
    .replace(/\$([^$]+)\$/g, (match, formula) => {
      try {
        return katex.renderToString(formula, { displayMode: false, throwOnError: false })
      } catch {
        return match
      }
    })
}

