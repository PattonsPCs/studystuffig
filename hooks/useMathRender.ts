import { useEffect } from 'react'

declare global {
  interface Window {
    katex?: any
    renderMathInElement?: (element: HTMLElement, options?: any) => void
  }
}

export function useMathRender(elementId: string) {
  useEffect(() => {
    const loadKaTeX = (): Promise<void> => {
      return new Promise((resolve) => {
        // Check if KaTeX is already loaded
        if (window.katex && window.renderMathInElement) {
          resolve()
          return
        }

        // Check if scripts are already being loaded
        if (document.querySelector('script[src*="katex.min.js"]')) {
          // Wait for it to load
          const checkInterval = setInterval(() => {
            if (window.katex && window.renderMathInElement) {
              clearInterval(checkInterval)
              resolve()
            }
          }, 100)
          return
        }

        // Load KaTeX script
        const katexScript = document.createElement('script')
        katexScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js'
        katexScript.async = true
        katexScript.onload = () => {
          // Load auto-render script
          const autoRenderScript = document.createElement('script')
          autoRenderScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js'
          autoRenderScript.async = true
          autoRenderScript.onload = () => {
            resolve()
          }
          document.head.appendChild(autoRenderScript)
        }
        document.head.appendChild(katexScript)
      })
    }

    const renderMath = async () => {
      await loadKaTeX()
      
      // Wait a bit for DOM to be ready
      setTimeout(() => {
        const target = document.getElementById(elementId)
        if (target && window.renderMathInElement) {
          try {
            window.renderMathInElement(target, {
              delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
              ],
              throwOnError: false,
              errorCallback: (err: any) => {
                console.warn('KaTeX rendering error:', err)
              }
            })
          } catch (error) {
            console.error('Error rendering math:', error)
          }
        }
      }, 100)
    }

    renderMath()
  }, [elementId])
}
