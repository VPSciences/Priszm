import { MessageSquare, Wrench, Phone, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Tell us about your business',
    description: 'Service area, target customers, what\'s working and what isn\'t. One 30-minute call. We\'ll tell you exactly what we\'d build and what to expect.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'We build your system',
    description: 'Google presence, review automation, lead follow-up, outreach campaigns. We handle all of it. Usually live within two weeks.',
    icon: Wrench,
  },
  {
    number: '03',
    title: 'Leads come in. You book the jobs.',
    description: 'Your phone rings. You close the work. We keep the system running and send you a monthly report on what\'s working.',
    icon: Phone,
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 section-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Three steps.
            <br />
            <span className="text-muted-foreground">You handle the jobs.</span>
          </h2>
        </div>

        {/* Steps visual */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-12 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-muted-foreground/30" />
                </div>
              )}

              <div className="p-8 rounded-2xl bg-card border border-border h-full">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-muted-foreground">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual representation */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-foreground" />
              </div>
              <p className="font-medium text-foreground">Your Business</p>
              <p className="text-sm text-muted-foreground">Service area + goals</p>
            </div>

            <div className="hidden md:block">
              <div className="w-24 h-px bg-border relative">
                <ArrowRight className="absolute -right-3 -top-3 w-6 h-6 text-muted-foreground" />
              </div>
            </div>

            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-foreground flex items-center justify-center">
                <div className="text-2xl font-bold text-background">P</div>
              </div>
              <p className="font-medium text-foreground">Priszm</p>
              <p className="text-sm text-muted-foreground">Builds and runs your system</p>
            </div>

            <div className="hidden md:block">
              <div className="w-24 h-px bg-border relative">
                <ArrowRight className="absolute -right-3 -top-3 w-6 h-6 text-muted-foreground" />
              </div>
            </div>

            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                <Phone className="w-10 h-10 text-foreground" />
              </div>
              <p className="font-medium text-foreground">Booked Jobs</p>
              <p className="text-sm text-muted-foreground">More calls. More revenue.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
