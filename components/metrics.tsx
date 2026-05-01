import { Star, Phone, Calendar, Zap } from 'lucide-react'

const metrics = [
  {
    icon: Star,
    label: 'Average new reviews, first 60 days',
    value: '47',
  },
  {
    icon: Phone,
    label: 'Increase in inbound calls by month 2',
    value: '3x',
  },
  {
    icon: Calendar,
    label: 'Average days to launch',
    value: '12',
  },
  {
    icon: Zap,
    label: 'Done for you',
    value: '100%',
  },
]

export function Metrics() {
  return (
    <section className="py-24 sm:py-32 section-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Results</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            What it looks like
            <br />
            <span className="text-muted-foreground">when the system works.</span>
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary">
                  <metric.icon className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <span className="text-sm text-muted-foreground">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
