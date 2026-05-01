'use client'

const testimonials = [
  {
    quote: "We had 14 Google reviews for three years. Joe's system got us to 61 in six weeks. Phone's ringing more. That's all I needed.",
    author: 'Pest control owner',
    location: 'Tampa, FL',
    avatar: 'PC',
  },
  {
    quote: "I was skeptical. Month two we booked three new recurring lawn accounts from cold email alone. Didn't have to call a single person myself.",
    author: 'Landscaping company',
    location: 'Orlando, FL',
    avatar: 'LC',
  },
  {
    quote: "Every missed call used to just disappear. Now there's an automatic follow-up text. We're closing leads we used to lose without knowing.",
    author: 'HVAC company',
    location: 'Phoenix, AZ',
    avatar: 'HV',
  },
  {
    quote: "Joe built everything. I didn't have to touch a computer once. It just started working.",
    author: 'Cleaning company',
    location: 'Dallas, TX',
    avatar: 'CC',
  },
  {
    quote: "Our slow season this year was the busiest slow season we've ever had. That used to be three months of stress.",
    author: 'Pest control owner',
    location: 'Atlanta, GA',
    avatar: 'PC',
  },
  {
    quote: "Went from two Google reviews to 38 in one month. Competitors can't figure out what happened.",
    author: 'Roofing company',
    location: 'Nashville, TN',
    avatar: 'RC',
  },
  {
    quote: "Tried Facebook ads on our own, burned $2,000. Joe's Google campaign got us 12 calls in the first week.",
    author: 'HVAC company',
    location: 'Charlotte, NC',
    avatar: 'HV',
  },
  {
    quote: "The follow-up system runs while I'm on jobs. I come back and there's a booked estimate waiting. That never happened before.",
    author: 'Landscaping company',
    location: 'Tampa, FL',
    avatar: 'LC',
  },
]

const doubledTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Results</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Real owners.
            <br />
            <span className="text-muted-foreground">Real results.</span>
          </h2>
        </div>
      </div>

      {/* First row - slides left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee-slow">
          {doubledTestimonials.slice(0, 8).map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] mx-3 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground text-sm font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - slides right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee-slow-reverse">
          {doubledTestimonials.slice(8, 16).map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] mx-3 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground text-sm font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
