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
    if (!node) return

    // Fallback: if IntersectionObserver isn't available for some reason, just show it
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
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