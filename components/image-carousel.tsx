'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Maximize2, Minimize2 } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  altPrefix?: string
}

export function ImageCarousel({ images, altPrefix = 'Event photo' }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [images.length])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!containerRef.current) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      containerRef.current.requestFullscreen()
    }
  }

  if (images.length === 0) return null

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-2xl border border-border/60 ${
        isFullscreen ? 'flex h-full w-full flex-col justify-center bg-black' : ''
      }`}
    >
      <button
        type="button"
        onClick={handleClick}
        className={`relative block w-full cursor-pointer ${
          isFullscreen ? 'h-[90vh]' : 'aspect-[4/3]'
        }`}
        aria-label="View next photo"
      >
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            fill
            priority={i === index}
            className={`${
              isFullscreen ? 'object-contain' : 'object-cover'
            } transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <span
          onClick={toggleFullscreen}
          role="button"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
          className="absolute right-3 top-3 z-10 rounded-full bg-background/60 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          )}
        </span>
      </button>
      <div className="flex justify-center gap-2 bg-background/40 py-3">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? 'bg-accent' : 'bg-muted-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}