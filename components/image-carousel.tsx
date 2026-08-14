'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  altPrefix?: string
}

export function ImageCarousel({ images, altPrefix = 'Event photo' }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  if (images.length === 0) return null

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60">
      <button
        type="button"
        onClick={handleClick}
        className="block w-full cursor-pointer"
        aria-label="View next photo"
      >
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${altPrefix} ${index + 1}`}
          width={800}
          height={600}
          className="h-64 w-full object-cover transition-opacity duration-500 md:h-72"
        />
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