import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'
import { StarfieldBackground } from '@/components/starfield-background'
import { RevealSection } from '@/components/reveal-section'

export const metadata: Metadata = {
  title: 'Member Spotlight | BAWISA',
  description:
    'Meet the women shaping space and aerospace. Read our current member spotlight, nominate someone inspiring, and browse past features.',
}

const pastSpotlights = [
  {
    name: 'Name',
    role: 'Job title/career',
    quote: 'One sentence from their career bio/journey/advice',
    image: '/images/spotlight/galaxy.jpg',
  },
  {
    name: 'Name',
    role: 'Job title/career',
    quote: 'One sentence from their career bio/journey/advice',
    image: '/images/spotlight/galaxy.jpg',
  },
  {
    name: 'Name',
    role: 'Job title/career',
    quote: 'One sentence from their career bio/journey/advice',
    image: '/images/spotlight/galaxy.jpg',
  },
  {
    name: 'Name',
    role: 'Job title/career',
    quote: 'One sentence from their career bio/journey/advice',
    image: '/images/spotlight/galaxy.jpg',
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
        description="Each month we feature a member's journey, career, and advice, as well as invite the community to nominate the next spotlight."
      />

      {/* Current spotlight */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 rounded-2xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-10">
          <div className="mx-auto w-56 shrink-0 overflow-hidden rounded-2xl border border-border/60 md:w-72">
            <Image
              src="/images/spotlight/galaxy.jpg"
              alt="Current BAWISA member spotlight"
              width={500}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center rounded-full bg-amethyst-smoke/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amethyst-smoke">
              Current Spotlight
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-baby-blue-ice">
              Name 
            </h2>
            <p className="mt-1 text-amethyst-smoke">
              Job title/role
            </p>
            <p className="mt-5 leading-relaxed text-foreground">
              Career bio/life journey. Hobbies, interests, fun facts. 
            </p>
            <blockquote className="mt-6 border-l-2 border-accent pl-4 font-display text-lg italic text-foreground">
              "Advice from their career journey, or a quote that inspires them"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Nominate */}
      <section className="border-y border-border/60 bg-gradient-to-br from-primary/70 to-accent/40">
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
              <div className="mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border/60">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-center font-display text-lg font-semibold text-foreground">
                {person.name}
              </h3>
              <p className="text-center text-sm text-primary">{person.role}</p>
              <p className="mt-3 text-center text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;{person.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
