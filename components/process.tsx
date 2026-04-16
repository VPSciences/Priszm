import { Users, Target, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Connect your data',
    description: 'Import your existing customer data and define your ideal customer profile. Our AI learns from your best customers.',
    icon: Users,
  },
  {
    number: '02',
    title: 'AI finds leads',
    description: 'Our engine scans the web, social platforms, and proprietary databases to find prospects that match your criteria.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Engage & convert',
    description: 'Automated, personalized outreach nurtures leads through your funnel. You close deals, we handle the rest.',
    icon: TrendingUp,
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
            <span className="text-muted-foreground">Infinite leads.</span>
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
            {/* Your Data */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                <Users className="w-10 h-10 text-foreground" />
              </div>
              <p className="font-medium text-foreground">Your Data</p>
              <p className="text-sm text-muted-foreground">Customer profiles</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <div className="w-24 h-px bg-border relative">
                <ArrowRight className="absolute -right-3 -top-3 w-6 h-6 text-muted-foreground" />
              </div>
            </div>

            {/* AI Engine */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-foreground flex items-center justify-center">
                <div className="text-2xl font-bold text-background">AI</div>
              </div>
              <p className="font-medium text-foreground">Priszm AI</p>
              <p className="text-sm text-muted-foreground">Intelligent matching</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <div className="w-24 h-px bg-border relative">
                <ArrowRight className="absolute -right-3 -top-3 w-6 h-6 text-muted-foreground" />
              </div>
            </div>

            {/* Qualified Leads */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                <Target className="w-10 h-10 text-foreground" />
              </div>
              <p className="font-medium text-foreground">Qualified Leads</p>
              <p className="text-sm text-muted-foreground">Ready to convert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
