'use client'

import {
  Globe,
  Star,
  Mail,
  MessageSquare,
  Search,
  Phone,
  ArrowRight,
  CheckCircle2,
  Wrench,
  BarChart3,
  Handshake
} from 'lucide-react'

const leadSources = [
  { icon: Search, label: 'Google Maps' },
  { icon: Globe, label: 'Google Ads' },
  { icon: Mail, label: 'Cold Email' },
  { icon: Star, label: 'Review Platforms' },
  { icon: MessageSquare, label: 'SMS Follow-up' },
  { icon: Phone, label: 'Local SEO' },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Audit & Strategy',
    description: 'We look at your Google presence, reviews, competition, and current lead flow. We tell you exactly what\'s broken and what we\'d fix first.',
    features: ['Google Business Profile audit', 'Competitor review analysis', 'Current lead flow review', 'Prioritized action plan'],
  },
  {
    step: '02',
    title: 'System Build',
    description: 'We set up review automation, lead follow-up sequences, Google presence, and outreach campaigns. Usually live in two weeks.',
    features: ['Review request automation', 'SMS + email follow-up', 'Google profile optimization', 'Outreach campaign setup'],
  },
  {
    step: '03',
    title: 'Outreach & Inbound',
    description: 'Automated systems find new customers and follow up with every inbound inquiry. No lead goes cold. No callback falls through the cracks.',
    features: ['Cold outreach running', 'Auto follow-up active', 'Review requests sending', 'Inbound response automation'],
  },
  {
    step: '04',
    title: 'Ongoing Management',
    description: 'We watch the numbers, test what\'s working, and keep improving. You get a monthly report. We do the work.',
    features: ['Monthly results report', 'Campaign optimization', 'New opportunities flagged', 'Direct access to Joe'],
  },
]

const outcomes = [
  { value: 'More jobs', label: 'booked week over week' },
  { value: 'Zero', label: 'cold calling by you' },
  { value: '2 weeks', label: 'average time to launch' },
  { value: '100%', label: 'done for you' },
]

export function Workflow() {
  return (
    <section id="workflow" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Your fully automated
            <br />
            <span className="text-muted-foreground">lead system.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We build and run it. You answer the phone and book the jobs.
          </p>
        </div>

        {/* Lead sources */}
        <div className="mb-20">
          <p className="text-center text-sm text-muted-foreground mb-6">We build across all of these channels</p>
          <div className="flex flex-wrap justify-center gap-4">
            {leadSources.map((source) => (
              <div
                key={source.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <source.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{source.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main workflow diagram */}
        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-border via-foreground/20 to-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="p-6 rounded-2xl bg-card border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground hidden lg:block absolute -right-4 top-9 z-10 bg-secondary/30" />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual flow diagram */}
        <div className="mt-20 p-8 rounded-2xl bg-card border border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-4">
                <Search className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Your Service Area</h4>
              <p className="text-sm text-muted-foreground">Tell us who you want to reach</p>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="w-16 h-0.5 bg-border" />
              <Wrench className="w-6 h-6 text-foreground mx-2" />
              <div className="w-16 h-0.5 bg-border" />
            </div>
            <div className="lg:hidden flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
            </div>

            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-foreground mb-4">
                <div className="text-2xl font-bold text-background">P</div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Priszm Builds It</h4>
              <p className="text-sm text-muted-foreground">Done-for-you system, running 24/7</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <BarChart3 className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Monthly reporting included</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="w-16 h-0.5 bg-border" />
              <Wrench className="w-6 h-6 text-foreground mx-2" />
              <div className="w-16 h-0.5 bg-border" />
            </div>
            <div className="lg:hidden flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
            </div>

            <div className="flex-1 text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-4">
                <Handshake className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Booked Jobs</h4>
              <p className="text-sm text-muted-foreground">You close the work. We handle the rest.</p>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{outcome.value}</div>
              <div className="text-sm text-muted-foreground">{outcome.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
