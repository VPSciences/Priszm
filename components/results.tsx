'use client'

import { useEffect, useState } from 'react'
import { Globe, Activity, TrendingUp } from 'lucide-react'

const regions = [
  { name: 'North America', leads: '45K', growth: '+23%', status: 'active' },
  { name: 'Europe', leads: '38K', growth: '+18%', status: 'active' },
  { name: 'Asia Pacific', leads: '29K', growth: '+31%', status: 'active' },
  { name: 'Latin America', leads: '12K', growth: '+45%', status: 'active' },
  { name: 'Middle East', leads: '8K', growth: '+27%', status: 'active' },
]

export function Results() {
  const [animatedLeads, setAnimatedLeads] = useState(0)
  const [animatedRevenue, setAnimatedRevenue] = useState(0)

  useEffect(() => {
    const leadsTarget = 132847
    const revenueTarget = 24.7
    const duration = 2000
    const steps = 60
    const leadsIncrement = leadsTarget / steps
    const revenueIncrement = revenueTarget / steps
    const interval = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setAnimatedLeads(Math.min(Math.floor(leadsIncrement * currentStep), leadsTarget))
      setAnimatedRevenue(Math.min(parseFloat((revenueIncrement * currentStep).toFixed(1)), revenueTarget))
      
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="results" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">Results</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Global reach.
            <br />
            <span className="text-muted-foreground">Local precision.</span>
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Total Leads Generated</span>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-foreground">
                {animatedLeads.toLocaleString()}
              </div>
              <div className="mt-2 text-sm text-green-500">+12.5% from last month</div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Active Campaigns</span>
              </div>
              <div className="text-3xl font-bold text-foreground">847</div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Revenue Generated</span>
              </div>
              <div className="text-3xl font-bold text-foreground">${animatedRevenue}M</div>
            </div>
          </div>

          {/* Regional breakdown */}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">Regional Performance</h3>
            <div className="space-y-4">
              {regions.map((region) => (
                <div key={region.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-foreground">{region.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{region.leads} leads</span>
                    <span className="text-sm text-green-500 font-medium">{region.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
