'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    quote: "Priszm transformed our entire sales pipeline. We went from struggling to find leads to having more qualified prospects than we can handle.",
    author: 'Sarah Chen',
    title: 'VP of Sales, TechScale',
    result: '10x more qualified leads',
    avatar: 'SC',
  },
  {
    quote: "The AI accuracy is incredible. It&apos;s like having a team of researchers working 24/7 to find our ideal customers.",
    author: 'Marcus Johnson',
    title: 'Founder, GrowthLab',
    result: '85% time saved on prospecting',
    avatar: 'MJ',
  },
  {
    quote: "We tried every lead gen tool on the market. Priszm is the only one that actually delivers on its promises.",
    author: 'Emily Rodriguez',
    title: 'Head of Growth, Nexus',
    result: '$2M+ pipeline generated',
    avatar: 'ER',
  },
  {
    quote: "The integration with our existing CRM was seamless. Leads just flow in automatically, enriched and ready to contact.",
    author: 'David Kim',
    title: 'Sales Director, CloudFirst',
    result: '300% ROI in 3 months',
    avatar: 'DK',
  },
]

const companies = [
  'TechScale',
  'GrowthLab',
  'Nexus',
  'CloudFirst',
  'Vertex AI',
  'Quantum Corp',
  'Atlas Digital',
  'Meridian Labs',
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">Testimonials</p>
            <div className="text-sm text-muted-foreground">
              {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-border hover:bg-secondary"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-border hover:bg-secondary"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border">
          <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
          
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed max-w-3xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {current.avatar}
              </div>
              <div>
                <div className="font-medium text-foreground">{current.author}</div>
                <div className="text-sm text-muted-foreground">{current.title}</div>
              </div>
            </div>
            
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Key Result: {current.result}</span>
            </div>
          </div>
        </div>

        {/* Trusted by companies */}
        <div className="mt-16">
          <p className="text-sm text-muted-foreground text-center mb-8">Trusted by forward-thinking teams</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-marquee">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 text-xl font-semibold text-muted-foreground/50"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
