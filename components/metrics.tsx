'use client'

import { useEffect, useState } from 'react'
import { Activity, Clock, Percent, Users } from 'lucide-react'

export function Metrics() {
  const [time, setTime] = useState(new Date())
  const [leadsToday, setLeadsToday] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
      // Simulate increasing leads
      setLeadsToday(prev => prev + Math.floor(Math.random() * 3))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const metrics = [
    {
      icon: Activity,
      label: 'Leads generated today',
      value: (2847 + leadsToday).toLocaleString(),
      status: 'live',
    },
    {
      icon: Percent,
      label: 'Conversion rate',
      value: '34.7%',
      change: '+2.3%',
    },
    {
      icon: Clock,
      label: 'Avg. response time',
      value: '< 2 min',
    },
    {
      icon: Users,
      label: 'Clients served',
      value: '500+',
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">Live Metrics</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Performance you
            <br />
            <span className="text-muted-foreground">can measure.</span>
          </h2>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-muted-foreground">Live</span>
          <span className="text-muted-foreground">|</span>
          <span className="font-mono text-muted-foreground">
            {time.toLocaleTimeString()}
          </span>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <metric.icon className="w-4 h-4 text-primary" />
                </div>
                {metric.status === 'live' && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                )}
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{metric.label}</span>
                {metric.change && (
                  <span className="text-sm text-green-500 font-medium">{metric.change}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
