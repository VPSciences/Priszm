import Link from 'next/link'
import { Sparkles, Mail, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Security', href: '/security' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-foreground">
                <Sparkles className="w-4 h-4 text-background" />
              </div>
              <span className="text-xl font-bold text-foreground">Priszm</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-powered lead generation for modern sales teams.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get in Touch section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in Touch</h3>
            <div className="mt-4 space-y-4">
              {/* LinkedIn profile card */}
              <Link 
                href="https://www.linkedin.com/in/joseph-barkate/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] text-white">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Joseph Barkate</p>
                  <p className="text-xs text-muted-foreground">Connect on LinkedIn</p>
                </div>
              </Link>

              {/* Twitter */}
              <Link 
                href="https://x.com/joe_barkate" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>@joe_barkate</span>
              </Link>

              {/* Email */}
              <Link 
                href="mailto:joe@priszm.ai"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>joe@priszm.ai</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Priszm. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="https://x.com/joe_barkate" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </Link>
            <Link 
              href="https://www.linkedin.com/in/joseph-barkate/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
