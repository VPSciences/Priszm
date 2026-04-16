'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Starter',
    number: '01',
    description: 'For individuals and small projects',
    price: { monthly: 0, annual: 0 },
    features: [
      'Up to 3 projects',
      '1GB storage',
      'Community support',
      'Basic analytics',
      'SSL certificates',
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Pro',
    number: '02',
    description: 'For growing teams and businesses',
    price: { monthly: 24, annual: 20 },
    features: [
      'Unlimited projects',
      '100GB storage',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
      'Team collaboration',
      'API access',
    ],
    cta: 'Start trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    number: '03',
    description: 'For large-scale operations',
    price: { monthly: 'Custom', annual: 'Custom' },
    features: [
      'Everything in Pro',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
      'Security audit',
      'Custom contracts',
    ],
    cta: 'Contact sales',
    popular: false,
  },
]

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section id="pricing" className="py-24 sm:py-32 section-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Simple, transparent
            <br />
            <span className="text-muted-foreground">pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              billingCycle === 'monthly'
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2',
              billingCycle === 'annual'
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Annual
            <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs">
              Save 17%
            </span>
          </button>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative p-6 rounded-2xl border transition-all',
                plan.popular
                  ? 'bg-card border-foreground/20 ring-1 ring-foreground/10'
                  : 'bg-card border-border'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-foreground text-background text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">{plan.number}</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                {typeof plan.price[billingCycle] === 'number' ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-foreground">Custom</div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-foreground flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  'w-full',
                  plan.popular
                    ? 'bg-foreground text-background hover:bg-foreground/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
