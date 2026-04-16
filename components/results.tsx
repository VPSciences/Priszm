'use client'

import { useEffect, useState } from 'react'
import { Globe, Activity, TrendingUp } from 'lucide-react'

const regions = [
  { name: 'North America', code: 'US West', latency: '12ms', status: 'active' },
  { name: 'Europe', code: 'EU', latency: '24ms', status: 'active' },
  { name: 'Asia Pacific', code: 'APAC', latency: '32ms', status: 'active' },
  { name: 'Latin America', code: 'LATAM', latency: '38ms', status: 'active' },
  { name: 'Middle East', code: 'MEA', latency: '45ms', status: 'active' },
]

export function Results() {
  const [animatedLeads, setAnimatedLeads] = useState(0)

  useEffect(() => {
    const leadsTarget = 17
    const duration = 2000
    const steps = 60
    const leadsIncrement = leadsTarget / steps
    const interval = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setAnimatedLeads(Math.min(Math.floor(leadsIncrement * currentStep), leadsTarget))
      
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="results" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Infrastructure</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Global by
            <br />
            <span className="text-muted-foreground">default.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Deploy once, run everywhere. Our edge network spans 17 data centers across 6 continents, delivering sub-50ms latency to 99% of the world.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-bold text-foreground">
                {animatedLeads}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">Data centers</div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-bold text-foreground">99.99%</div>
              <div className="mt-2 text-sm text-muted-foreground">Uptime SLA</div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-bold text-foreground">&lt;50ms</div>
              <div className="mt-2 text-sm text-muted-foreground">Global latency</div>
            </div>
          </div>

          {/* Regional breakdown */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Edge Network</h3>
              <span className="flex items-center gap-2 text-sm text-green-600">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                All operational
              </span>
            </div>
            <div className="space-y-3">
              {regions.map((region) => (
                <div key={region.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{region.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">{region.code}</span>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{region.latency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
