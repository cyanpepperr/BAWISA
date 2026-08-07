import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Quote, Star } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'
import { StarfieldBackground } from '@/components/starfield-background'

export const metadata: Metadata = {
  title: 'Member Spotlight | BAWISA',
  description:
    'Meet the women shaping space and aerospace. Read our current member spotlight, nominate someone inspiring, and browse past features.',
}

const pastSpotlights = [
  {
    name: 'Dr. Amara Okafor',
    role: 'Propulsion Engineer',
    quote: 'Curiosity is the fuel; persistence is the engine.',
  },
  {
    name: 'Sofia Reyes',
    role: 'Mission Operations Lead',
    quote: 'Every mission is a team of people who refused to give up.',
  },
  {
    name: 'Hana Kim',
    role: 'Satellite Systems Architect',
    quote: 'Design for the impossible, then make it reliable.',
  },
  {
    name: 'Priya Nair',
    role: 'GNC Software Engineer',
    quote: 'Precision is a form of care.',
  },
]

export default function SpotlightPage() {
  return (
    <div className="relative isolate">
      {/* Page-wide starfield background */}
      <div className="fixed inset-0 -z-10">
        <StarfieldBackground />
      </div>

      <PageHero
        transparent
        eyebrow="Member Spotlight"
        title="Celebrating the women shaping space and aerospace"
        description="Each month we feature a member's journey, career, and advice — and invite the community to nominate the next person to shine."
      />

      {/* Current spotlight */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 rounded-2xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-10">
          <div className="mx-auto w-56 shrink-0 overflow-hidden rounded-2xl border border-border/60 md:w-72">
            <Image
              src="/images/spotlight-current.png"
              alt="Current BAWISA member spotlight"
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              <Star className="h-3.5 w-3.5" aria-hidden="true" /> Current
              Spotlight
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
              Dr. Elena Vasquez
            </h2>
            <p className="mt-1 text-primary">
              Senior Systems Engineer · Launch Vehicles
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Elena has spent over a decade working on launch vehicle systems,
              contributing to missions that have carried scientific payloads to
              orbit. She is a passionate mentor and advocate for bringing more
              women into engineering leadership roles across the industry.
            </p>
            <blockquote className="mt-6 flex gap-3 rounded-xl bg-secondary/40 p-5">
              <Quote
                className="h-6 w-6 shrink-0 text-accent"
                aria-hidden="true"
              />
              <p className="font-display text-lg italic text-foreground">
                Do not wait for permission to take up space. Your perspective is
                exactly what this industry needs.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Nominate */}
      <section className="border-y border-border/60 bg-gradient-to-tr from-primary/10 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-xl rounded-2xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Nominate a member
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Know someone inspiring in space or aerospace? Nominate them to
              be featured in an upcoming spotlight.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink href={LINKS.nominateForm} external>
                Submit a nomination <ArrowRight />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Past spotlights */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="mb-10 font-display text-3xl font-bold text-foreground">
          Past spotlights
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pastSpotlights.map((person) => (
            <article
              key={person.name}
              className="flex flex-col rounded-xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 font-display text-lg font-bold text-foreground">
                {person.name
                  .split(' ')
                  .slice(-2)
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {person.name}
              </h3>
              <p className="text-sm text-primary">{person.role}</p>
              <p className="mt-3 text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;{person.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}