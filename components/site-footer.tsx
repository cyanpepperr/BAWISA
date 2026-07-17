import Link from 'next/link'
import Image from 'next/image'
import { Users, MessageSquare, Mail, Linkedin } from 'lucide-react'
import { NAV_LINKS, QUOTES } from '@/lib/site'

export function SiteFooter() {
  const quote = QUOTES[0]
  const joinFormUrl = 'https://forms.gle/dCEazkBewWQZVrru9'

  return (
    <footer className="border-t border-border/60 bg-card/40">
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
                
                  href={joinFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Users className="h-4 w-4" aria-hidden="true" /> Join Us
                </a>
                <ul className="mt-2 ml-6 space-y-2">
                  <li>
                    
                      href={joinFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <MessageSquare className="h-4 w-4" aria-hidden="true" /> Slack
                    </a>
                  </li>
                  <li>
                    
                      href={joinFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" /> Email
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                
                  href="https://www.linkedin.com/company/bay-area-women-in-space-aerospace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
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