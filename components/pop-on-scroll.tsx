'use client'

import { useEffect, useRef, useState } from 'react'

interface PopOnScrollProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

// Deterministic pseudo-random so server/client render match (no hydration mismatch)
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9973) * 10000
  return x - Math.floor(x)
}

export function PopOnScroll({ children, className = '', as = 'h2' }: PopOnScrollProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [playCount, setPlayCount] = useState(0)
  const Tag = as

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayCount((c) => c + 1)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Before the first trigger, render plain text (avoids a pre-scroll flash)
  if (playCount === 0) {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    )
  }

  const characters = children.split('')
  const total = characters.length
  // Cap total stagger window so long titles still finish in a reasonable time
  const staggerStep = total > 1 ? Math.min(40, 500 / total) : 0

  return (
    <Tag ref={ref} className={`${className} inline-block`}>
      <span key={playCount} aria-hidden="true" className="inline-block">
        {characters.map((char, i) => {
          const angle = seededRandom(i + 1) * Math.PI * 2
          const radius = 14 + seededRandom(i + 31) * 26
          const tx = Math.cos(angle) * radius
          const ty = Math.sin(angle) * radius
          return (
            <span
              key={i}
              className="star-char inline-block"
              style={
                {
                  animationDelay: `${i * staggerStep}ms`,
                  '--tx': `${tx}px`,
                  '--ty': `${ty}px`,
                } as React.CSSProperties
              }
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )
        })}
      </span>
      <span className="sr-only">{children}</span>
    </Tag>
  )
}