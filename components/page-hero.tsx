import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
  transparent?: boolean
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
  transparent = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border/60',
        className,
      )}
    >
      {!transparent && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,color-mix(in_oklch,var(--color-primary)_35%,transparent),transparent_55%),radial-gradient(circle_at_85%_10%,color-mix(in_oklch,var(--color-accent)_28%,transparent),transparent_50%)]"
        />
      )}
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}