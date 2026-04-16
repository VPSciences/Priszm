import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: 'I',
    title: 'Connect your data',
    description: 'Import your existing customer data and define your ideal customer profile. Our AI learns from your best customers.',
  },
  {
    number: 'II',
    title: 'AI finds leads',
    description: 'Our engine scans the web, social platforms, and proprietary databases to find prospects that match your criteria.',
  },
  {
    number: 'III',
    title: 'Engage & convert',
    description: 'Automated, personalized outreach nurtures leads through your funnel. You close deals, we handle the rest.',
  },
]

const codeSnippet = `import { priszm } from '@priszm/sdk'

// Initialize with your API key
const client = priszm.init({
  apiKey: process.env.PRISZM_API_KEY,
})

// Find leads matching your ICP
const leads = await client.discover({
  industry: 'SaaS',
  revenue: '$1M-$50M',
  intent: 'high',
})

// Returns qualified, enriched leads
console.log(leads) // 127 leads found`

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 section-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Three steps.
            <br />
            <span className="text-muted-foreground">Infinite leads.</span>
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative pl-8 pb-8 last:pb-0">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
                )}
                
                {/* Number circle */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold">
                  {step.number}
                </div>
                
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Code preview */}
          <div className="relative">
            <div className="rounded-xl border border-border overflow-hidden shadow-sm">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground font-mono">leads.ts</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Ready</span>
                </div>
              </div>
              
              {/* Code content */}
              <pre className="p-4 text-sm font-mono code-block overflow-x-auto">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
