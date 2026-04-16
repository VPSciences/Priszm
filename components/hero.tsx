'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Zap, Target, TrendingUp, Users } from 'lucide-react'

const stats = [
  { value: '10x', label: 'More leads', company: 'SALESFORCE' },
  { value: '85%', label: 'Time saved', company: 'HUBSPOT' },
  { value: '300%', label: 'ROI increase', company: 'STRIPE' },
  { value: '$2M+', label: 'Revenue generated', company: 'NOTION' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden grid-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-foreground" />
            <span>AI-Powered Lead Generation Platform</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="block">The platform to</span>
            <span className="block text-muted-foreground">generate leads</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your toolkit to stop cold calling and start converting. Securely discover, qualify, and engage leads at scale.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8 text-base">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base border-border hover:bg-secondary">
              <Play className="mr-2 h-4 w-4" />
              Watch demo
            </Button>
          </div>
        </div>

        {/* Feature pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            { icon: Target, label: 'Precision targeting' },
            { icon: TrendingUp, label: 'Revenue growth' },
            { icon: Users, label: 'Quality leads' },
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
