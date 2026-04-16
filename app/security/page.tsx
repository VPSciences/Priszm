import Link from 'next/link'
import { Sparkles, ArrowLeft, Shield, Lock, Server, Eye, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Security - Priszm',
  description: 'Learn about Priszm security practices and compliance.',
}

const certifications = [
  { name: 'SOC 2 Type II', description: 'Annual third-party security audits' },
  { name: 'GDPR Compliant', description: 'Full compliance with EU data protection' },
  { name: 'CCPA Compliant', description: 'California consumer privacy compliance' },
  { name: 'ISO 27001', description: 'Information security management certified' },
]

const practices = [
  {
    icon: Lock,
    title: 'Encryption',
    description: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We use industry-leading encryption standards.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Our infrastructure is hosted on SOC 2 certified cloud providers with redundancy across multiple availability zones.',
  },
  {
    icon: Eye,
    title: 'Access Controls',
    description: 'Strict role-based access controls, multi-factor authentication, and comprehensive audit logging.',
  },
  {
    icon: Shield,
    title: 'Monitoring',
    description: '24/7 security monitoring, intrusion detection, and automated threat response systems.',
  },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-foreground">
              <Sparkles className="w-4 h-4 text-background" />
            </div>
            <span className="text-xl font-bold text-foreground">Priszm</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6">
            <Shield className="w-8 h-8 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Security at Priszm
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We take the security of your data seriously. Our platform is built with 
            enterprise-grade security from the ground up.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Certifications & Compliance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-6 rounded-xl bg-background border border-border text-center">
                <CheckCircle2 className="w-8 h-8 text-foreground mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">Our Security Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice) => (
              <div key={practice.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <practice.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{practice.title}</h3>
                  <p className="mt-2 text-muted-foreground">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Responsible Disclosure</h2>
          <p className="text-muted-foreground leading-relaxed">
            We appreciate the work of security researchers. If you discover a vulnerability, 
            please report it responsibly to security@priszm.com. We commit to acknowledging 
            your report within 24 hours.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground">Have security questions?</h2>
          <p className="mt-4 text-muted-foreground">
            Our security team is happy to answer any questions about our practices.
          </p>
          <Button size="lg" className="mt-8 bg-foreground text-background hover:bg-foreground/90" asChild>
            <Link href="/contact">Contact Security Team</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
