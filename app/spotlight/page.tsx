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

// Past spotlights stay hidden for now
const showCurrentSpotlight = true // set to false to hide the current spotlight
const showPastSpotlights = false // set to true when you have spotlights to show

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
      {showCurrentSpotlight && (
        <RevealSection className="border-y border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 py-16 md:py-20">
          <div className="mx-auto max-w-[120rem] px-6 md:px-10">
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
              <div className="mx-auto w-64 shrink-0 overflow-hidden rounded-2xl border border-border/60 md:w-[26rem]">
                <Image
                  src="/images/spotlight/NogueiraHeadshot.jpeg"
                  alt="Current BAWISA member spotlight"
                  width={800}
                  height={960}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-amethyst-smoke/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amethyst-smoke">
                  Current Spotlight
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold text-baby-blue-ice">
                  Natasha Nogueira
                </h2>
                <p className="mt-1 text-amethyst-smoke">
                  Space Systems Engineer and SmallSat Operations Manager at Planet Labs
                </p>
                <p className="mt-5 leading-relaxed text-foreground">
                  Natasha Nogueira is a space systems engineer and the SmallSat Operations Manager at Planet Labs PBC, where she leads one of the operations teams for one of the world’s largest Earth observation fleets. Over eight years at Planet, she has combined deep on-orbit expertise with a systems-level perspective to lead complex commissioning campaigns and drive structural improvements in reliability, scalability, and time-to-revenue. Starting on Planet’s SkySat mission operations team, Natasha mastered high-resolution satellite operations, from flight software releases and anomaly resolution to establishing baseline procedures still used today. After serving as a SkySat systems optimization team lead, she helped shape operations for Planet’s next-generation SmallSat program, developing early stage software implementations and commissioning processes, and where she now manages the team overseeing the Pelican and Tanager constellations.
                </p>
                <p className="mt-4 leading-relaxed text-foreground">
                  Beyond mission operations, Natasha is deeply committed to outreach and mentorship. At Planet, she leads initiatives for the Wonder Women employee resource group, including an annual Girls Day to inspire the next generation of aerospace talent. She has mentored through TechWomen and contributed to the Space Generation Congress, and currently volunteers with Tech2Empower, IGNITE Worldwide, and the Yosemite Conservancy. Outside of work, she enjoys the outdoors through hiking, biking, swimming, and running, and embraces her love of the arts through painting and singing in a choir.
                </p>
                <blockquote className="mt-6 border-l-2 border-accent pl-4 font-display text-lg italic text-foreground">
                  “Don’t wait for a formal invitation to chase what excites you. In high school, I cold-emailed various professors at the Naval Postgraduate School expressing my interest in doing summer research with them, and the only one who replied was a former NASA astronaut who mentored me for the next four years and even hired me full time during my gap year (after high school). I got the unique opportunity to work in a small satellite lab early on in my educational journey that ultimately launched my career in space.”
                </blockquote>
              </div>
            </div>
          </div>
        </RevealSection>
      )}

      {/* Nominate */}
      <section className="mx-auto max-w-[120rem] px-3 py-16 md:px-4 md:py-24">
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-6 py-12 md:p-10 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
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
      {showPastSpotlights && (
        <section className="mx-auto max-w-[120rem] px-3 py-16 md:px-4 md:py-24">
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
      )}
    </div>
  )
}