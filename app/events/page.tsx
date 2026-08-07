import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, Building2, CalendarDays, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'
import { StarfieldBackground } from '@/components/starfield-background'

export const metadata: Metadata = {
  title: 'Events | BAWISA',
  description:
    'Upcoming BAWISA events on Eventbrite, hosting sign-ups for companies, and recaps from past gatherings.',
}

const upcoming = [
  {
    date: 'July 23, 2026',
    title: 'Summer Networking Night & Speaker Panel',
    location: 'South Bay',
    body: 'An evening panel with leaders across launch, satellites, and mission operations, followed by open networking.',
  },
  {
    date: 'August 14, 2026',
    title: 'Facility Tour & Meet the Team',
    location: 'Peninsula',
    body: 'A behind-the-scenes tour hosted by one of our partner companies, with time to connect with their engineering teams.',
  },
  {
    date: 'September 9, 2026',
    title: 'Mentorship Circles Kickoff',
    location: 'San Francisco',
    body: 'Launch of our fall mentorship circles — meet your group and set goals for the season ahead.',
  },
]

const past = [
  {
    title: 'Spring Mixer at the Innovation Hub',
    stat: '120+ attendees',
  },
  {
    title: 'Women in Launch Fireside Chat',
    stat: '85 attendees',
  },
  {
    title: 'Career Paths in Aerospace Workshop',
    stat: '60 attendees',
  },
]

export default function EventsPage() {
  return (
    <div className="relative isolate">
      {/* Page-wide starfield background */}
      <div className="fixed inset-0 -z-10">
        <StarfieldBackground />
      </div>

      <PageHero
        transparent
        eyebrow="Events"
        title="Gather, learn, and connect with the community"
        description="From networking nights to facility tours, our events bring together women across the Bay Area space and aerospace industry."
      >
        <ButtonLink href={LINKS.eventbrite} external size="lg">
          View all on Eventbrite <ArrowRight />
        </ButtonLink>
      </PageHero>

      {/* Upcoming events */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="mb-10 font-display text-3xl font-bold text-foreground">
          Upcoming events
        </h2>
        <div className="space-y-4">
          {upcoming.map((event) => (
            <article
              key={event.title}
              className="flex flex-col gap-4 rounded-xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-semibold text-accent">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {event.location}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {event.body}
                </p>
              </div>
              <div className="shrink-0">
                <ButtonLink href={LINKS.eventbrite} external variant="outline">
                  Get tickets
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Host sign up */}
      <section className="border-y border-border/60 bg-gradient-to-tr from-primary/10 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-8 md:p-12">
            <Building2 className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="max-w-2xl text-balance font-display text-3xl font-bold text-foreground">
              Companies: host a BAWISA event
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Interested in hosting a networking night, tour, or workshop for
              our community? We would love to partner with you. Sign up and our
              team will be in touch.
            </p>
            <div className="mt-7">
              <ButtonLink href={LINKS.hostForm} external size="lg">
                Sign up to host <ArrowRight />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h2 className="mb-10 font-display text-3xl font-bold text-foreground">
          Past events
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {past.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40"
            >
              <div className="relative h-44">
                <Image
                  src="/images/event-recap.png"
                  alt={`Photos from ${event.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-accent">{event.stat}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}