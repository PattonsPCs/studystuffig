'use client'

import { useEffect, useRef } from 'react'

interface MathBlockProps {
  children: string
  display?: boolean
  className?: string
}

export default function MathBlock({ children, display = true, className = '' }: MathBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const renderMath = async () => {
      if (!containerRef.current) return

      // Wait for KaTeX to be available
      const waitForKaTeX = (): Promise<void> => {
        return new Promise((resolve) => {
          if (window.katex) {
            resolve()
            return
          }

          const checkInterval = setInterval(() => {
            if (window.katex) {
              clearInterval(checkInterval)
              resolve()
            }
          }, 50)

          // Timeout after 5 seconds
          setTimeout(() => {
            clearInterval(checkInterval)
            resolve()
          }, 5000)
        })
      }

      await waitForKaTeX()

      if (containerRef.current && window.katex) {
        try {
          // Clear previous content
          const element = containerRef.current
          element.textContent = children

          // Render with KaTeX
          window.katex.render(children, element, {
            displayMode: display,
            throwOnError: false,
            errorColor: '#cc0000'
          })
        } catch (error) {
          console.error('KaTeX rendering error:', error)
          // Fallback: just show the raw text
          if (containerRef.current) {
            containerRef.current.textContent = children
          }
        }
      }
    }

    renderMath()
  }, [children, display])

  return <div ref={containerRef} className={className} />
}

