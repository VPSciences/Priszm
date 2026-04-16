'use client'

import { Twitter } from 'lucide-react'

const testimonials = [
  {
    quote: "Just switched our entire lead gen stack to @priszm. 3 weeks in and we've already booked 40% more demos. The AI actually understands our ICP.",
    author: 'Sarah Chen',
    handle: '@sarahchen_sales',
    avatar: 'SC',
  },
  {
    quote: "Been in sales for 15 years. Never seen anything like @priszm. It found leads we never would have discovered manually. Game changer.",
    author: 'Marcus Johnson',
    handle: '@marcusj_growth',
    avatar: 'MJ',
  },
  {
    quote: "Our SDRs used to spend 70% of their time prospecting. Now they spend 90% of their time actually selling. Thanks @priszm",
    author: 'Emily Rodriguez',
    handle: '@emilyrod_nexus',
    avatar: 'ER',
  },
  {
    quote: "The ROI on @priszm is insane. We're paying 1/10th of what we spent on lead lists and getting 5x better results. Do the math.",
    author: 'David Kim',
    handle: '@davidkim_cf',
    avatar: 'DK',
  },
  {
    quote: "Finally, a lead gen tool that doesn't require a PhD to use. @priszm just works. Connected our CRM, set our ICP, and leads started flowing.",
    author: 'Alex Turner',
    handle: '@alexturner_io',
    avatar: 'AT',
  },
  {
    quote: "Closed our biggest deal ever last month from a lead @priszm found. A company we'd never heard of that was a perfect fit. Magic.",
    author: 'Jessica Park',
    handle: '@jesspark_saas',
    avatar: 'JP',
  },
  {
    quote: "We tried 6 different lead gen tools before @priszm. This is the only one our sales team actually uses every day. Says everything.",
    author: 'Ryan Mitchell',
    handle: '@ryanm_sales',
    avatar: 'RM',
  },
  {
    quote: "The intent signals from @priszm are scary accurate. We're reaching out to companies right when they need us. Perfect timing, every time.",
    author: 'Lisa Wang',
    handle: '@lisawang_rev',
    avatar: 'LW',
  },
]

// Double the testimonials for seamless loop
const doubledTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">What people say</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Loved by sales teams
            <br />
            <span className="text-muted-foreground">everywhere</span>
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
                  <div className="text-xs text-muted-foreground">{testimonial.handle}</div>
                </div>
                <Twitter className="w-4 h-4 text-muted-foreground" />
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
                  <div className="text-xs text-muted-foreground">{testimonial.handle}</div>
                </div>
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-foreground leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
