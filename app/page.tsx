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
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-space.png"
            alt=""
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-36">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
            Bay Area Women in Space &amp; Aerospace
          </p>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Reaching for the stars, together.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            BAWISA connects, celebrates, and empowers women across the Bay Area
            space and aerospace community through events, support, and
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
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6">
          <Sparkles
            className="mx-auto mb-5 h-8 w-8 text-accent"
            aria-hidden="true"
          />
          <p className="text-balance font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
            Our mission is to build a thriving network where women in space and
            aerospace find community, visibility, and the support to launch
            their boldest ideas.
          </p>
        </div>
      </section>

      {/* Latest news */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
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
              className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
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
      </section>

      {/* Next event */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Next Event
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Summer Networking Night &amp; Speaker Panel
            </h2>
            <p className="mt-4 text-muted-foreground">
              Thursday, July 23, 2026 · 6:00 PM · South Bay
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Join us for an evening of connection with a panel of leaders
              across launch, satellites, and mission operations. Grab your
              ticket on Eventbrite.
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
                23
              </span>
              <span className="font-display text-2xl font-medium text-muted-foreground">
                July
              </span>
            </div>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" aria-hidden="true" />
                Open to members and newcomers
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                Panel + open networking
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays
                  className="h-4 w-4 text-accent"
                  aria-hidden="true"
                />
                Doors at 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event recap */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-border/60">
            <Image
              src="/images/event-recap.png"
              alt="Women networking at a recent BAWISA aerospace industry event"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Event Recap
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
              Spring Mixer at the Innovation Hub
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              More than 120 members gathered for an evening of lightning talks,
              hands-on demos, and connection. Highlights included a fireside
              chat with a mission director and the launch of our new mentorship
              circles.
            </p>
            <Link
              href="/events"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View photos and past events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Member spotlight teaser */}
      <section className="border-t border-border/60 bg-gradient-to-br from-secondary/40 to-background">
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
    </>
  )
}
