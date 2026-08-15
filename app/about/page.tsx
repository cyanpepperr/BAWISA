import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'
import { StarfieldBackground } from '@/components/starfield-background'

export const metadata: Metadata = {
  title: 'About Us | BAWISA',
  description:
    'How BAWISA started, what we do, where we are, and how to join our community of women and gender minorities in space and aerospace.',
}

const values = [
  {
    title: 'What we do',
    body: 'A quarterly speaker series featuring women doing extraordinary things in aerospace, covering topics like negotiation, founding a startup, data analytics, self-branding, and company features.',
  },
  {
    title: 'Where we are',
    body: 'Hosted at startups and incubators throughout the Bay Area, and virtually.',
  },
]

export default function AboutPage() {
  return (
    <div className="relative isolate">
      {/* Page-wide starfield background */}
      <div className="fixed inset-0 -z-10">
        <StarfieldBackground />
      </div>

      <PageHero
        transparent
        eyebrow="About Us"
        title="Building community among women and gender minorities in aerospace"
        description="BAWISA is a quarterly speaker series connecting and inspiring women and gender minorities in aerospace. Since 2016, we've grown into a network across the Bay Area."
      >
        <ButtonLink href={LINKS.joinForm} external size="lg">
          Join the Community <ArrowRight />
        </ButtonLink>
      </PageHero>

      {/* How it started */}
      <section className="border-y border-border/60 bg-gradient-to-tr from-primary/3 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
            <div>
              <div className="mb-4">
                <h2 className="font-display text-3xl font-bold text-foreground">
                  How it started
                </h2>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Bay Area Womin in Space and Aerospace (BAWISA) was formed 
                  by Jeanette Quinlan in September 2016. Inspired to connect 
                  the incredible women she had met throughout her career in 
                  the male-dominated world of aerospace, Jeanette held the
                  first happy hour in the common room of her condominium 
                  building in downtown San Francisco. The next two happy hours 
                  that year, hosted at Stanford and NASA Ames, brought in 
                  even more of a following. Starting in 2017, happy hours 
                  began to feature women speaking on a variety of 
                  aerospace-related topics.
                </p>
                <p>
                  Today, BAWISA is a quarterly speaker series connecting and
                  inspiring women and gender minorities in aerospace; helping
                  with career opportunities, retention, and community in a historically
                  male-dominated field. Whether you are just starting out or
                  decades into your career, there is a place for you here.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-5"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The person behind BAWISA */}
      <section className="border-t border-border/50 bg-gradient-to-br from-primary/70 to-accent/45 p-6">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[auto_1fr] md:items-center md:px-6 md:py-20">
          <div className="mx-auto w-48 shrink-0 overflow-hidden rounded-2xl border border-border/60 md:w-60">
            <Image
              src="/jeanette.jpg"
              alt="Jeanette Quinlan, founder of BAWISA"
              width={400}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-amethyst-smoke">
              The person behind BAWISA
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-baby-blue-ice">
              Meet Jeanette
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-foreground">
              Jeanette founded BAWISA in 2016 to create the community she
              wished she had earlier in her own career. Passionate about
              mentorship and connection, she leads the group's mission to
              make the Bay Area space and aerospace industry more welcoming,
              visible, and supportive for women and gender minorities.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-foreground">
              Jeanette is so grateful for the support of the women (and men!)
              who make this all possible.
            </p>
            <blockquote className="mt-6 border-l-2 border-accent pl-4 font-display text-lg italic text-foreground">
              &ldquo;some cool quote.&rdquo;
            </blockquote>
            <div className="mt-6">
              <ButtonLink
                href="https://www.linkedin.com/in/jeanettequinlan/"
                external
              >
                Connect with Jeanette on LinkedIn <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}