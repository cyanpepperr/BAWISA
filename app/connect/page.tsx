import type { Metadata } from 'next'
import { ArrowRight, Briefcase } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ButtonLink } from '@/components/button-link'
import { LINKS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Connect | BAWISA',
  description:
    'Join the BAWISA community and stay in the loop with events, community updates, and career opportunities.',
}

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Join the community"
        description="Become part of the BAWISA community, a group of women supporting women."
      >
        <ButtonLink href={LINKS.joinForm} external size="lg">
          Join the Community <ArrowRight />
        </ButtonLink>
      </PageHero>

      {/* Community sign up */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/15 to-accent/15 p-8 text-center md:p-12">
          <h2 className="text-balance font-display text-3xl font-bold text-foreground">
            Join the community
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Sign up to be added to our community channels. It only takes a
            minute, and it is how we welcome new members.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={LINKS.joinForm} external size="lg">
              Sign up now <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Jobs & opportunities */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-3">
                <Briefcase
                  className="h-6 w-6 text-accent"
                  aria-hidden="true"
                />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Job postings &amp; opportunities
                </h2>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                Members share events, news, job openings, 
                other opportunities in our community.
              </p>
            </div>
            <ButtonLink href={LINKS.joinForm} external>
              Join to see opportunities <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}