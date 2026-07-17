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

      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#0a0620')
      gradient.addColorStop(1, '#1a0f3d')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2

      for (const star of stars) {
        star.z -= SPEED

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width
          star.y = (Math.random() - 0.5) * height
          star.z = width
          star.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        }

        const k = 128 / star.z
        const sx = star.x * k + cx
        const sy = star.y * k + cy

        if (sx < 0 || sx > width || sy < 0 || sy > height) continue

        const depthRatio = 1 - star.z / width
        const size = depthRatio * 2.8 + 0.4
        const opacity = Math.min(1, depthRatio * 1.3 + 0.25) // floor so stars are always visible

        ctx.beginPath()
        ctx.fillStyle = `rgba(${star.color}, ${opacity})`
        ctx.arc(sx, sy, size, 0, Math.PI * 2)
        ctx.fill()
      }

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