'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  as?: 'section' | 'div'
}

export function RevealSection({
  children,
  className = '',
  as = 'section',
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)
  const Tag = as

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect() // reveal once, stay revealed
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      // @ts-expect-error -- ref type varies with the polymorphic tag
      ref={ref}
      className={`reveal-section ${revealed ? 'reveal-section--visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}