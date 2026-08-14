'use client'

import { useEffect, useRef, useState } from 'react'

interface PopOnScrollProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function PopOnScroll({ children, className = '', as = 'h2' }: PopOnScrollProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [animate, setAnimate] = useState(false)
  const Tag = as

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // retrigger even if it was already true, by toggling off then on
          setAnimate(false)
          requestAnimationFrame(() => setAnimate(true))
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} inline-block transition-transform duration-500 ease-out ${
        animate ? 'scale-110' : 'scale-100'
      }`}
      onTransitionEnd={() => setAnimate(false)}
    >
      {children}
    </Tag>
  )
}