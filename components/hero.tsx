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
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span>AI-Powered Lead Generation Platform</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            <span className="block">Generate leads on</span>
            <span className="block gradient-text">autopilot with AI</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop wasting time on manual prospecting. Our AI identifies, qualifies, and delivers 
            high-intent leads directly to your pipeline — 24/7.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
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
              <feature.icon className="w-4 h-4 text-primary" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats marquee */}
      <div className="mt-20 border-y border-border bg-card/30">
        <div className="relative overflow-hidden py-6">
          <div className="flex animate-marquee">
            {[...stats, ...stats].map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-8 px-12 border-r border-border"
              >
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
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
