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
    }, 6000)
    return () => clearInterval(timer)
  }, [images.length])

  if (images.length === 0) return null

  const goTo = (i: number) => {
    setIndex(((i % images.length) + images.length) % images.length)
  }

  const prevIndex = index === 0 ? images.length - 1 : index - 1
  const nextIndex = index === images.length - 1 ? 0 : index + 1
  const showSides = images.length > 1

  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        {showSides && (
          <button
            type="button"
            onClick={() => goTo(prevIndex)}
            aria-label="View previous photo"
            className="relative aspect-[4/3] w-[23%] shrink-0 cursor-pointer overflow-hidden rounded-xl opacity-50 transition-opacity hover:opacity-80"
          >
            <Image
              src={images[prevIndex]}
              alt={`${altPrefix} ${prevIndex + 1}`}
              fill
              className="object-cover"
            />
          </button>
        )}

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="View next photo"
          className="relative aspect-[4/3] w-[46%] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-border/60"
        >
          <Image
            key={images[index]}
            src={images[index]}
            alt={`${altPrefix} ${index + 1}`}
            fill
            priority
            className="object-cover"
          />
        </button>

        {showSides && (
          <button
            type="button"
            onClick={() => goTo(nextIndex)}
            aria-label="View next photo"
            className="relative aspect-[4/3] w-[23%] shrink-0 cursor-pointer overflow-hidden rounded-xl opacity-50 transition-opacity hover:opacity-80"
          >
            <Image
              src={images[nextIndex]}
              alt={`${altPrefix} ${nextIndex + 1}`}
              fill
              className="object-cover"
            />
          </button>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? 'bg-accent' : 'bg-muted-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}