'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
}

// Deterministic pseudo-random so server/client render match (no hydration mismatch)
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9973) * 10000
  return x - Math.floor(x)
}

// Generate stars biased toward the right (leading) edge of the band
function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const xRand = seededRandom(i * 2 + 1)
    // pow < 1 skews values higher, clustering stars toward the right side
    const x = Math.pow(xRand, 0.45) * 100
    const y = seededRandom(i * 2 + 2) * 100
    const size = 2 + seededRandom(i * 3 + 7) * 3
    const delay = seededRandom(i * 5 + 11) * 300
    return { x, y, size, delay, id: i }
  })
}

const STARS = generateStars(35)

export function RevealSection({ children, className = '' }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      console.warn('[RevealSection] ref never attached')
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          setShowStars(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)

    const fallback = setTimeout(() => {
      setRevealed(true)
      setShowStars(true)
    }, 4000)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  // Clean up the star overlay after the sweep finishes so it doesn't sit in the DOM forever
  useEffect(() => {
    if (!showStars) return
    const timer = setTimeout(() => setShowStars(false), 1400)
    return () => clearTimeout(timer)
  }, [showStars])

  return (
    <div
      ref={ref}
      className={`reveal-section ${revealed ? 'reveal-section--visible' : ''} ${className}`}
    >
      {children}
      {showStars && (
        <div className="reveal-stars-band" aria-hidden="true">
          {STARS.map((star) => (
            <span
              key={star.id}
              className="reveal-star"
              style={
                {
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: `${star.delay}ms`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}