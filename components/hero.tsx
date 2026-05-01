'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Star, Calendar } from 'lucide-react'

const stats = [
  { value: '61 reviews', label: 'in 6 weeks', company: 'PEST CONTROL · TAMPA' },
  { value: '3 new accounts', label: 'from cold email', company: 'LAWN CARE · FLORIDA' },
  { value: '40% more calls', label: 'month over month', company: 'HVAC · PHOENIX' },
  { value: '2 weeks', label: 'average time to launch', company: 'ALL CLIENTS' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden grid-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            <Phone className="w-4 h-4 text-foreground" />
            <span>Done-for-you lead generation for trades</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="block">Your phone should ring</span>
            <span className="block text-muted-foreground">before your crew shows up.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Most pest control, landscaping, and HVAC companies are invisible online. We fix that — and build the automated follow-up system that turns leads into booked jobs.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base" asChild>
              <Link href="/contact">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base border-border hover:bg-secondary" asChild>
              <Link href="#workflow">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { icon: Phone, label: 'More inbound calls' },
            { icon: Star, label: 'More Google reviews' },
            { icon: Calendar, label: 'More booked jobs' },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground"
            >
              <feature.icon className="w-4 h-4 text-foreground" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats marquee */}
      <div className="mt-20 border-y border-border bg-card">
        <div className="relative overflow-hidden py-6">
          <div className="flex animate-marquee">
            {[...stats, ...stats].map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-8 px-12 border-r border-border"
              >
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
                <div className="text-xs font-medium text-muted-foreground/60 tracking-wider">
                  {stat.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
