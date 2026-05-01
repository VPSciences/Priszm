import { User, Calendar, Wrench, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: User,
    title: 'Founder-built, founder-run',
    description: 'Joe builds every system. There\'s no handoff to a junior account manager after you sign up. You\'re working with the person doing the actual work.',
  },
  {
    icon: Calendar,
    title: 'Month to month',
    description: 'No long-term contracts. If it\'s not working, you shouldn\'t have to keep paying for it. We earn your business every month.',
  },
  {
    icon: Wrench,
    title: 'Industry-specific, not generic',
    description: 'We\'ve built systems for pest control, landscaping, HVAC, and roofing. We know your vocabulary, your seasonality, and your customers.',
  },
  {
    icon: BarChart3,
    title: 'Systems, not campaigns',
    description: 'We don\'t run a campaign and disappear. We build infrastructure that keeps generating leads and optimize it month over month.',
  },
]

export function Security() {
  return (
    <section className="py-24 sm:py-32 section-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Why Priszm</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            This isn&apos;t software.
            <br />
            <span className="text-muted-foreground">It&apos;s a service.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            You don&apos;t buy a platform and figure it out yourself. We build and operate everything on your behalf.
          </p>
        </div>

        {/* Features grid */}
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
