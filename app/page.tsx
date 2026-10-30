import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
} from 'lucide-react'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'
import { StarfieldBackground } from '@/components/starfield-background'
import { RevealSection } from '@/components/reveal-section'

const announcements = [
  {
    date: 'Event date',
    title: 'Some title',
    body: 'description',
  },
  {
    date: 'Event date',
    title: 'Another title',
    body: 'description',
  },
  {
    date: 'Event date',
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
            Reaching for the stars, together
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
      <RevealSection className="border-y border-border/60 bg-gradient-to-br from-primary/30 to-accent/10 p-6">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6">
          <p className="text-balance font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
            Our mission is to build an uplifting network where women in
            aerospace find community, visibility, and support.
          </p>
        </div>
      </RevealSection>

      {/* Next event */}
      <section className="border-y border-border/60 bg-gradient-to-tr from-primary/3 to-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-20">
          <div>
            <div className="mb-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Upcoming Event
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              BAWISA Friday Afternoon with Joby!
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join Bay Area Women in Space and Aerospace (BAWISA) for a special afternoon event hosted by Joby Aviation at their Marina facility near Santa Cruz on Friday, November 6! Hear from the women of Joby in a panel, tour their eVTOL composites and integration buildings, and enjoy a happy hour with dinner provided. Guest check-in starts at 3:30pm and an NDA is required, which you can complete online in advance. Wear close-toed shoes and comfortable clothing for walking. RSVP on Eventbrite by Friday, October 30, and feel free to share the invite with anyone who may be interested.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              This event has been filled!
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <ButtonLink href={LINKS.} external>
                Get Tickets on Eventbrite <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/events" variant="ghost">
                See all events
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/60 to-accent/34 p-6">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl font-bold text-foreground">
                06
              </span>
              <span className="font-display text-2xl font-medium text-muted-foreground">
                Nov
              </span>
            </div>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" aria-hidden="true" />
                Open to members and newcomers
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                761 Neeson Rd,Marina, CA
              </p>
              <p className="flex items-center gap-2">
            </div>
          </div>
        </div>
      </section>

      {/* Event recap */}
      <RevealSection className="border-t border-border/50 bg-gradient-to-br from-primary/70 to-accent/45 p-6">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <Image
                src="/images/events/xona/xona.jpg"
                alt="Women networking at a recent BAWISA aerospace industry event"
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
                  BAWISA entered summer with a happy hour hosted by Xona
                  Space Systems and their Women and Gender Diverse ERG,
                  right on the Bay. Guests connected over food, drinks, and
                  honest conversation during our Collective Wisdom Peer
                  Roundtables.
                </p>
                <p className="leading-relaxed">
                  Thank you to Xona for hosting and to everyone who came out
                  to spend the evening with us.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <ButtonLink href="/events">
                  See the full recap and photos <ArrowRight className="h-4 w-4" />
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
      </RevealSection>

      {/* Member spotlight teaser */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
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