'use client'

import { useEffect, useState } from 'react'
import { Activity, Clock, Percent, Globe } from 'lucide-react'

export function Metrics() {
  const [time, setTime] = useState(new Date())
  const [requests, setRequests] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
      // Simulate increasing requests
      setRequests(prev => prev + Math.floor(Math.random() * 50))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const metrics = [
    {
      icon: Activity,
      label: 'API requests today',
      value: (847293 + requests).toLocaleString(),
      status: 'live',
    },
    {
      icon: Percent,
      label: 'Uptime this quarter',
      value: '99.99%',
    },
    {
      icon: Clock,
      label: 'Average response time',
      value: '23ms',
    },
    {
      icon: Globe,
      label: 'Countries served',
      value: '142',
    },
  ]

  return (
    <section className="py-24 sm:py-32 section-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Live metrics</p>
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
                <div className="p-2 rounded-lg bg-secondary">
                  <metric.icon className="w-4 h-4 text-foreground" />
                </div>
                {metric.status === 'live' && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                )}
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <span className="text-sm text-muted-foreground">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
