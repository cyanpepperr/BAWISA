'use client'

import { useEffect, useRef } from 'react'

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let animationId: number

    const STAR_COUNT = 350
    const SPEED = 0.6 // lower = slower drift

    type Star = { x: number; y: number; z: number }
    let stars: Star[] = []

    function initStars() {
      stars = []
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * width,
        })
      }
    }

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initStars()
    }

    resize()
    window.addEventListener('resize', resize)

    function draw() {
      if (!ctx) return

      // deep space blue-to-purple background, redrawn each frame
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
        }

        const k = 128 / star.z
        const sx = star.x * k + cx
        const sy = star.y * k + cy

        if (sx < 0 || sx > width || sy < 0 || sy > height) continue

        const size = (1 - star.z / width) * 2.2
        const opacity = 1 - star.z / width

        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.arc(sx, sy, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}