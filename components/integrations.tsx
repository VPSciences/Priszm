const integrations = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'Marketing' },
  { name: 'Pipedrive', category: 'CRM' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'LinkedIn', category: 'Social' },
  { name: 'Gmail', category: 'Email' },
  { name: 'Outlook', category: 'Email' },
  { name: 'Mailchimp', category: 'Marketing' },
  { name: 'Intercom', category: 'Support' },
  { name: 'Zoom', category: 'Meetings' },
  { name: 'Calendly', category: 'Scheduling' },
]

export function Integrations() {
  return (
    <section id="integrations" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Integrations</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Works with everything
            <br />
            <span className="text-muted-foreground">you already use.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            200+ pre-built integrations. Connect your entire stack in minutes.
          </p>
        </div>

        {/* Integrations marquee */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* First row */}
          <div className="flex animate-marquee mb-4">
            {[...integrations, ...integrations].map((integration, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="text-base font-medium text-foreground">{integration.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{integration.category}</div>
              </div>
            ))}
          </div>

          {/* Second row - reverse direction */}
          <div className="flex animate-marquee-reverse">
            {[...integrations.reverse(), ...integrations].map((integration, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="text-base font-medium text-foreground">{integration.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{integration.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
