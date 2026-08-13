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
    'Upcoming BAWISA events, hosting sign-ups for companies, and recaps from past gatherings.',
}

const upcoming = [
  {
    date: 'Date TBD',
    title: 'Event title',
    location: 'Location TBD',
    body: 'Details for our next event are coming soon — check back or join our list to be the first to know.',
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
        title="Bringing together women in space and aerospace"
        description="From networking nights to facility tours, we organize quarterly events hosted by volunteering companies to bring our community together across the Bay Area space and aerospace industry."
      />

      {/* Upcoming events */}
      <section className="border-y border-border/60 bg-gradient-to-tr from-primary/3 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Host sign up */}
      <section className="bg-gradient-to-tr from-primary/10 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-8 md:p-12">
            <Building2 className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="text-balance font-display text-3xl font-bold text-foreground">
              Companies: host a BAWISA event
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              BAWISA is a quarterly speaker series featuring women doing
              extraordinary things in aerospace, covering topics like
              negotiation, founding a startup, data analytics, self-branding,
              and company features.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Interested in hosting a networking night, tour, or workshop for
              our community? We would love to partner with you.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We&apos;ll work with you to figure out the specific details —
              this form is just to gauge interest, so we can move forward
              together.
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
      <section className="border-t border-border/50 bg-gradient-to-br from-primary/70 to-accent/45 p-6">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="mb-10 font-display text-3xl font-bold text-foreground">
            Past events
          </h2>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <Image
                src="/images/events/xona/xona.jpg"
                alt="Women networking at the BAWISA happy hour hosted by Xona Space Systems"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-amethyst-smoke">
                Event Recap    |    July 8, 2026
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-baby-blue-ice">
                BAWISA Happy Hour with Xona!
              </h2>
              <div className="mt-4 space-y-4 text-foreground">
                <p className="leading-relaxed">
                  BAWISA closed out Women&apos;s History Month with a happy
                  hour hosted by Xona Space Systems at their office at 828
                  Airport Blvd in Burlingame. Guests got a look inside
                  Xona&apos;s offices, home to the team building Pulsar, the
                  first commercial navigation constellation designed
                  specifically for the modern era — built to deliver
                  stronger, more precise, and more resilient positioning to
                  devices worldwide, without requiring new hardware.
                </p>
                <p className="leading-relaxed">
                  The evening ran from mix-and-mingle through Collective
                  Wisdom Peer Roundtables, giving attendees space for honest
                  conversation and problem-solving, with time to connect over
                  food and drinks generously provided by Xona.
                </p>
                <p className="leading-relaxed">
                  Thank you to Xona for hosting and to everyone who came out
                  to connect.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <ButtonLink
                  href="https://www.xonaspace.com/"
                  external
                  variant="outline"
                >
                  Visit Xona Space Systems <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}