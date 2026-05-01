import { MapPin, Star, MessageSquare, Search, Megaphone, FileText } from 'lucide-react'

const capabilities = [
  {
    number: '01',
    icon: MapPin,
    title: 'Google Maps Rankings',
    description: 'Most service businesses don\'t show up when locals search. We optimize your Google Business Profile and get you into the map pack where the calls come from.',
  },
  {
    number: '02',
    icon: Star,
    title: 'Review Generation',
    description: 'Reviews are your online word of mouth. We build the automated system that asks every customer at the right time — and actually gets responses.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Lead Follow-Up',
    description: 'Most leads don\'t book on the first contact. We build automated follow-up — text and email — that runs while you\'re on the job.',
  },
  {
    number: '04',
    icon: Search,
    title: 'Cold Outreach',
    description: 'We find homeowners and property managers who need your service and put you in front of them before they call your competitor.',
  },
  {
    number: '05',
    icon: Megaphone,
    title: 'Google Ads',
    description: 'Paid campaigns built and managed for your trade and service area. No wasted budget on the wrong searches or the wrong zip codes.',
  },
  {
    number: '06',
    icon: FileText,
    title: 'Local Content',
    description: 'Google posts and social content that builds trust with locals. Consistent presence without you having to think about it.',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Six things we do.
            <br />
            <span className="text-muted-foreground">All of them get you more jobs.</span>
          </h2>
        </div>

        {/* Capabilities grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">{capability.number}</span>
                <div className="p-2 rounded-lg bg-secondary text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
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
