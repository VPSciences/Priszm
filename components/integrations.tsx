const tools = [
  { name: 'Google Business Profile', category: 'Local SEO' },
  { name: 'GoHighLevel', category: 'Automation' },
  { name: 'Google Ads', category: 'Paid Traffic' },
  { name: 'Twilio', category: 'SMS' },
  { name: 'Make', category: 'Automation' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'Gmail', category: 'Outreach' },
  { name: 'SEMrush', category: 'SEO' },
  { name: 'Zapier', category: 'Connections' },
  { name: 'Google Analytics', category: 'Tracking' },
  { name: 'Mailchimp', category: 'Email' },
  { name: 'Slack', category: 'Reporting' },
]

const reversedTools = [...tools].reverse()

export function Integrations() {
  return (
    <section id="integrations" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">The Stack</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            The tools we build on.
            <br />
            <span className="text-muted-foreground">You don&apos;t need to learn any of them.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We pick the right tools for your business and handle all the setup. You get the results, not the admin work.
          </p>
        </div>

        {/* Tools marquee */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* First row */}
          <div className="flex animate-marquee mb-4">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="text-base font-medium text-foreground">{tool.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{tool.category}</div>
              </div>
            ))}
          </div>

          {/* Second row - reverse direction */}
          <div className="flex animate-marquee-reverse">
            {[...reversedTools, ...reversedTools].map((tool, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="text-base font-medium text-foreground">{tool.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
