import { Brain, Mail, BarChart3, Shield, Zap, Database } from 'lucide-react'

const capabilities = [
  {
    number: '01',
    icon: Brain,
    title: 'AI Lead Discovery',
    description: 'Our AI scans millions of data points to identify prospects that match your ideal customer profile with 95% accuracy.',
  },
  {
    number: '02',
    icon: Mail,
    title: 'Automated Outreach',
    description: 'Personalized email sequences that adapt in real-time based on engagement, increasing response rates by 3x.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Know which leads are most likely to convert before you even reach out. Focus on what matters.',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Data Enrichment',
    description: 'Automatically enrich your leads with verified contact info, company data, and buying signals.',
  },
  {
    number: '05',
    icon: Zap,
    title: 'Intent Signals',
    description: 'Detect when prospects are actively researching solutions like yours and strike while interest is high.',
  },
  {
    number: '06',
    icon: Database,
    title: 'CRM Integration',
    description: 'Seamlessly sync with your existing tools. Salesforce, HubSpot, Pipedrive — we integrate with them all.',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing you don&apos;t.</span>
          </h2>
        </div>

        {/* Capabilities grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">{capability.number}</span>
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <capability.icon className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
