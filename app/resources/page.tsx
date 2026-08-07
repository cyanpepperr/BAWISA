import type { Metadata } from 'next'
import { Award, Briefcase, ExternalLink, GraduationCap } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { LINKS } from '@/lib/site'
import { StarfieldBackground } from '@/components/starfield-background'

export const metadata: Metadata = {
  title: 'Resources | BAWISA',
  description:
    'Curated job boards, scholarships, and fellowships for women in space and aerospace, including the Brooke Owens Fellowship and Matthew Isakowitz Fellowship.',
}

const jobBoards = [
  {
    name: 'BAWISA Slack #jobs',
    body: 'Fresh openings shared by members across the Bay Area, updated constantly.',
    href: LINKS.slack,
  },
  {
    name: 'Space & Aerospace Job Boards',
    body: 'Explore roles at launch providers, satellite companies, research labs, and startups.',
    href: 'https://www.spacecrew.com/',
  },
  {
    name: 'SpaceCareers / Space Talent',
    body: 'Aggregated listings across the commercial space ecosystem.',
    href: 'https://spacetalent.org/',
  },
]

const scholarships = [
  {
    name: 'Brooke Owens Fellowship',
    body: 'A nationally recognized program offering paid internships and executive mentorship to exceptional undergraduate women and gender minorities in aerospace.',
    href: 'https://www.brookeowensfellowship.org/',
  },
  {
    name: 'Matthew Isakowitz Fellowship',
    body: 'A fellowship for talented college students pursuing careers in commercial spaceflight, pairing internships with mentorship and a national summit.',
    href: 'https://matthewisakowitzfoundation.org/',
  },
]

export default function ResourcesPage() {
  return (
    <div className="relative isolate">
      {/* Page-wide starfield background */}
      <div className="fixed inset-0 -z-10">
        <StarfieldBackground />
      </div>

      <PageHero
        transparent
        eyebrow="Resources"
        title="Tools to help you launch and grow your career"
        description="A curated collection of job boards, scholarships, and fellowships for women in space and aerospace."
      />

      {/* Job boards */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 className="font-display text-3xl font-bold text-foreground">
            Job boards
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {jobBoards.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-6 transition-colors hover:border-primary/60"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <ExternalLink
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Scholarships & fellowships */}
      <section className="border-t border-border/60 bg-gradient-to-br from-secondary/25 via-primary/10 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap
              className="h-6 w-6 text-accent"
              aria-hidden="true"
            />
            <h2 className="font-display text-3xl font-bold text-foreground">
              Scholarships &amp; fellowships
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {scholarships.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-primary/70 to-accent/40 p-8 transition-colors hover:border-accent/60"
              >
                <Award
                  className="mb-4 h-8 w-8 text-accent"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <ExternalLink
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Know a resource we should add? Share it in our{' '}
            <a
              href={LINKS.slack}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              community Slack
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}