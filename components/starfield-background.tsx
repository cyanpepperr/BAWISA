'use client'

import { useEffect, useRef } from 'react'

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let animationId: number

    const STAR_COUNT = 400
    const SPEED = 0.8

    // light purple and light blue tones to alternate between
    const COLORS = [
      '186, 166, 255', // light purple
      '166, 210, 255', // light blue
      '255, 255, 255', // white, for variety
    ]

    type Star = { x: number; y: number; z: number; color: string }
    let stars: Star[] = []

    function initStars() {
      stars = []
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * width,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })
      }
    }

    function draw() {
      if (!ctx || width === 0 || height === 0) {
        animationId = requestAnimationFrame(draw)
        return
      }

      ctx.fillStyle = 'magenta'
      ctx.fillRect(0, 0, width, height)

      animationId = requestAnimationFrame(draw)
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width
        height = canvas.height = entry.contentRect.height
        initStars()
      }
    })

    resizeObserver.observe(canvas)
    draw()

    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}