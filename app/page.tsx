import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Megaphone,
  Sparkles,
  Users,
} from 'lucide-react'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'
import { StarfieldBackground } from '@/components/starfield-background'

const announcements = [
  {
    date: 'June 2026',
    title: 'Some title',
    body: 'description',
  },
  {
    date: 'May 2026',
    title: 'Another title',
    body: 'description',
  },
  {
    date: 'April 2026',
    title: 'Another title',
    body: 'description',
  },
]

export default function HomePage() {
  return (
    <div className="relative isolate">
      {/* Page-wide starfield background */}
      <div className="fixed inset-0 -z-10">
        <StarfieldBackground />
      </div>

      {/* Hero */}
      <section className="relative min-h-[600px] overflow-hidden md:min-h-[700px]">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-36">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
            Bay Area Women in Space &amp; Aerospace
          </p>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Reaching for the stars, together.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            BAWISA connects, celebrates, and empowers women across the Bay Area
            aerospace community through events, support, and
            shared ambition.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href={LINKS.joinForm} external size="lg">
              Join the Community <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/about" variant="outline" size="lg">
              Learn About Us
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Mission statement band */}
      <section className="border-y border-border/60 bg-card/45">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6">
          <Sparkles
            className="mx-auto mb-5 h-8 w-8 text-accent"
            aria-hidden="true"
          />
          <p className="text-balance font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
            Our mission is to build a thriving network where women in
            aerospace find community, visibility, and the support to 
            pursue their boldest ideas.
          </p>
        </div>
      </section>

      {/* Latest news */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="mb-10 flex items-center gap-3">
            <Megaphone className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              Latest News
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {announcements.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-xl border border-border/60 bg-gradient-to-br from-primary/50 to-accent/20 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {item.date}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Next event */}
      <section className="border-y border-border/60 bg-gradient-to-tr from-primary/10 to-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Next Event
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Stay tuned for our next event!
            </h2>
            <p className="mt-4 text-muted-foreground">
              Details will be announced soon
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              TBD
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <ButtonLink href={LINKS.eventbrite} external>
                Get Tickets on Eventbrite <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/events" variant="ghost">
                See all events
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/20 to-accent/20 p-8">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl font-bold text-foreground">
                TBD
              </span>
              <span className="font-display text-2xl font-medium text-muted-foreground">
                TBD
              </span>
            </div>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" aria-hidden="true" />
                Open to members and newcomers
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                TBD
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays
                  className="h-4 w-4 text-accent"
                  aria-hidden="true"
                />
                TBD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event recap */}
      <section className="bg-gradient-to-r from-background to-accent/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <Image
                src="/images/xona.jpg"
                alt="Women networking at a recent BAWISA aerospace industry event"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Event Recap   |   July 8, 2026
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
                BAWISA Happy Hour with Xona!
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  BAWISA closed out Women&apos;s History Month with a happy hour hosted by Xona Space Systems in Burlingame. Guests got a look inside Xona&apos;s offices, home to the team building Pulsar, the first commercial navigation constellation designed for modern positioning needs.
                </p>
                <p className="leading-relaxed">
                  The evening centered on Collective Wisdom Peer Roundtables, giving attendees space for honest conversation and problem-solving with other women in the industry, alongside plenty of time to mingle over food and drinks provided by Xona.
                </p>
                <p className="leading-relaxed">
                  Thanks to Xona for hosting and to everyone who came out to connect and share the room.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <ButtonLink href="/events">
                  View photos and past events <ArrowRight className="h-4 w-4" />
                </ButtonLink>
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

      {/* Member spotlight teaser */}
      <section className="border-t border-border/70 bg-gradient-to-br from-purple-800/40 via-purple-900/40 to-purple-950/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Member Spotlight
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
                Celebrating the women shaping our industry
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Each month we spotlight a member&apos;s journey, career, and
                advice. Know someone inspiring? Nominate them to be featured
                next.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink href="/spotlight">See current spotlight</ButtonLink>
              <ButtonLink
                href={LINKS.nominateForm}
                external
                variant="outline"
              >
                Nominate a member
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}