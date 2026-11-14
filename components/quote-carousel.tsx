'use client'

import { useEffect, useState } from 'react'

interface Quote {
  quote: string
  author: string
}

interface QuoteCarouselProps {
  quotes: Quote[]
}

export function QuoteCarousel({ quotes }: QuoteCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (quotes.length <= 1) return
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, 6000)
    return () => clearTimeout(timer)
  }, [index, quotes.length])

  if (quotes.length === 0) return null

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {/* All quotes share one grid cell so the height stays fixed to the tallest quote */}
      <div className="grid">
        {quotes.map((q, i) => (
          <figure
            key={q.author}
            aria-hidden={i !== index}
            className={`col-start-1 row-start-1 transition-opacity duration-700 motion-reduce:transition-none ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <blockquote className="font-display text-balance text-xl font-medium text-foreground md:text-2xl">
              &ldquo;{q.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              — {q.author}
            </figcaption>
          </figure>
        ))}
      </div>

      {quotes.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {quotes.map((q, i) => (
            <button
              key={q.author}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show quote ${i + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? 'bg-accent' : 'bg-muted-foreground/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}