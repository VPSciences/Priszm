import { Shield, Lock, Eye, FileCheck } from 'lucide-react'

const badges = ['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'CCPA']

const features = [
  {
    icon: Shield,
    title: 'SOC 2 Type II',
    description: 'Independently audited security controls with continuous monitoring.',
  },
  {
    icon: Lock,
    title: 'End-to-end encryption',
    description: 'AES-256 encryption for data at rest and TLS 1.3 in transit.',
  },
  {
    icon: Eye,
    title: 'Zero-trust architecture',
    description: 'Every request is authenticated and authorized. No exceptions.',
  },
  {
    icon: FileCheck,
    title: 'GDPR & HIPAA',
    description: 'Full compliance with data protection and healthcare regulations.',
  },
]

export function Security() {
  return (
    <section className="py-24 sm:py-32 section-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Security</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Trust is
            <br />
            <span className="text-muted-foreground">non-negotiable.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Enterprise-grade security isn&apos;t optional. It&apos;s built into every layer of our platform, from infrastructure to application.
          </p>
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap gap-3 mb-16">
          {badges.map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground"
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary text-foreground flex-shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
