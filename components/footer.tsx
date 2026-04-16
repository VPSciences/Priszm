import Link from 'next/link'
import { Sparkles } from 'lucide-react'

const footerLinks = {
  // Product: [
  //   { name: 'Features', href: '#capabilities' },
  //   { name: 'Pricing', href: '#pricing' },
  //   { name: 'Integrations', href: '#integrations' },
  //   { name: 'API', href: '#' },
  // ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  // Resources: [
  //   { name: 'Documentation', href: '#' },
  //   { name: 'Help Center', href: '#' },
  //   { name: 'Community', href: '#' },
  //   { name: 'Status', href: '#' },
  // ],
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Priszm. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
