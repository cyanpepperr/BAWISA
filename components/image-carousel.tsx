'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  altPrefix?: string
}

interface FadeStackProps {
  images: string[]
  activeIndex: number
  altPrefix: string
  sizes: string
  priorityFirst?: boolean
}

// Renders every image stacked in the same spot and fades the active one in.
function FadeStack({
  images,
  activeIndex,
  altPrefix,
  sizes,
  priorityFirst = false,
}: FadeStackProps) {
  return (
    <>
      {images.map((src, i) => (
        <Image
          key={`${src}-${i}`}
          src={src}
          alt={`${altPrefix} ${i + 1}`}
          aria-hidden={i !== activeIndex}
          fill
          sizes={sizes}
          priority={priorityFirst && i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  )
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
            className="relative hidden aspect-[4/3] w-[23%] shrink-0 cursor-pointer overflow-hidden rounded-xl opacity-50 transition-opacity hover:opacity-80 md:block"
          >
            <FadeStack
              images={images}
              activeIndex={prevIndex}
              altPrefix={altPrefix}
              sizes="23vw"
            />
          </button>
        )}

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="View next photo"
          className="relative aspect-[4/3] w-full shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-border/60 md:w-[60%]"
        >
          <FadeStack
            images={images}
            activeIndex={index}
            altPrefix={altPrefix}
            sizes="(min-width: 768px) 60vw, 100vw"
            priorityFirst
          />
        </button>

        {showSides && (
          <button
            type="button"
            onClick={() => goTo(nextIndex)}
            aria-label="View next photo"
            className="relative hidden aspect-[4/3] w-[23%] shrink-0 cursor-pointer overflow-hidden rounded-xl opacity-50 transition-opacity hover:opacity-80 md:block"
          >
            <FadeStack
              images={images}
              activeIndex={nextIndex}
              altPrefix={altPrefix}
              sizes="23vw"
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