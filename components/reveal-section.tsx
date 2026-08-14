'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
}

export function RevealSection({ children, className = '' }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      console.warn('[RevealSection] ref never attached')
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      console.warn('[RevealSection] no IntersectionObserver support, revealing immediately')
      setRevealed(true)
      return
    }

    console.log('[RevealSection] observing node', node)

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('[RevealSection] intersection event', entry.isIntersecting, entry.intersectionRatio)
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)

    // Safety net: if for any reason the observer never fires, reveal after 4s
    // so the content is never permanently invisible/inaccessible.
    const fallback = setTimeout(() => {
      console.warn('[RevealSection] fallback timeout fired, forcing reveal')
      setRevealed(true)
    }, 4000)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal-section ${revealed ? 'reveal-section--visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}