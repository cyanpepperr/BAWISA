import Link from 'next/link'
import Image from 'next/image'
import { Users, MessageSquare, Mail } from 'lucide-react'
import { NAV_LINKS, QUOTES } from '@/lib/site'
import { StarfieldBackground } from '@/components/starfield-background'

export function SiteFooter() {
  const quote = QUOTES[0]
  const joinFormUrl = 'https://forms.gle/dCEazkBewWQZVrru9'

  return (
    <footer className="relative isolate overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 -z-10">
        <StarfieldBackground />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <figure className="mx-auto mb-12 max-w-2xl text-center">
          <blockquote className="font-display text-balance text-xl font-medium text-foreground md:text-2xl">
            &ldquo;{quote.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            — {quote.author}
          </figcaption>
        </figure>

        <div className="grid gap-8 border-t border-border/60 pt-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex flex-col items-start gap-2 text-left">
              <Image
                src="/logo.png"
                alt="BAWISA logo"
                width={100}
                height={100}
                className="rounded-md"
              />
              <span className="font-display text-lg font-bold text-foreground">
                BAWISA
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground text-left">
              Bay Area Women in Space and Aerospace — connecting, celebrating,
              and empowering women across the industry.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={joinFormUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  Join Us
                </a>
                <ul className="mt-2 ml-6 space-y-2">
                  <li>
                    <a href={joinFormUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      Slack
                    </a>
                  </li>
                  <li>
                    <a href={joinFormUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Email
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/bay-area-women-in-space-aerospace" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bay Area Women in Space and Aerospace.
          All rights reserved.
        </div>
      </div>
    </footer>
  )
}