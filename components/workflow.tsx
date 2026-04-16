'use client'

import { 
  Globe, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Database, 
  Brain, 
  Target, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Bot,
  BarChart3,
  Handshake
} from 'lucide-react'

const leadSources = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Globe, label: 'Web Scraping' },
  { icon: Mail, label: 'Email Lists' },
  { icon: MessageSquare, label: 'Social Media' },
  { icon: Target, label: 'Paid Ads' },
  { icon: Database, label: 'Databases' },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Multi-Channel Capture',
    description: 'We tap into every lead source available - LinkedIn, Google, paid ads, social media, industry databases, and more.',
    features: ['LinkedIn prospecting', 'Google Maps scraping', 'Social listening', 'Ad campaign leads'],
  },
  {
    step: '02',
    title: 'AI Enrichment & Scoring',
    description: 'Our AI enriches each lead with company data, tech stack, revenue estimates, and scores them against your ideal customer profile.',
    features: ['Company intel', 'Tech stack detection', 'ICP scoring', 'Intent signals'],
  },
  {
    step: '03',
    title: 'Automated Outreach',
    description: 'Personalized multi-channel sequences run 24/7 - email, LinkedIn, SMS - all crafted by AI to maximize response rates.',
    features: ['Hyper-personalization', 'Multi-touch sequences', 'A/B testing', 'Optimal timing'],
  },
  {
    step: '04',
    title: 'AI Qualification',
    description: 'AI agents handle responses, answer questions, and qualify leads in real-time before booking meetings on your calendar.',
    features: ['24/7 response handling', 'Smart qualification', 'Meeting scheduling', 'CRM sync'],
  },
]

const outcomes = [
  { value: '3-5x', label: 'More qualified meetings' },
  { value: '40%', label: 'Lower cost per lead' },
  { value: '24/7', label: 'Autonomous operation' },
  { value: '2 weeks', label: 'To full deployment' },
]

export function Workflow() {
  return (
    <section id="workflow" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Your fully autonomous
            <br />
            <span className="text-muted-foreground">lead generation engine.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We build and operate the entire system for you. From capturing leads across every channel to AI-powered qualification - all running on autopilot.
          </p>
        </div>

        {/* Lead sources marquee */}
        <div className="mb-20">
          <p className="text-center text-sm text-muted-foreground mb-6">We capture leads from everywhere</p>
          <div className="flex flex-wrap justify-center gap-4">
            {leadSources.map((source) => (
              <div 
                key={source.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <source.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{source.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main workflow diagram */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-border via-foreground/20 to-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step card */}
                <div className="p-6 rounded-2xl bg-card border border-border h-full">
                  {/* Step number with icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground hidden lg:block absolute -right-4 top-9 z-10 bg-secondary/30" />
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  
                  {/* Features list */}
                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual flow diagram */}
        <div className="mt-20 p-8 rounded-2xl bg-card border border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Input */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-4">
                <Users className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Your Target Market</h4>
              <p className="text-sm text-muted-foreground">Tell us who your ideal customers are</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center">
              <div className="w-16 h-0.5 bg-border" />
              <Zap className="w-6 h-6 text-foreground mx-2" />
              <div className="w-16 h-0.5 bg-border" />
            </div>
            <div className="lg:hidden flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
            </div>

            {/* Priszm AI */}
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-foreground mb-4">
                <Brain className="w-10 h-10 text-background" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Priszm AI Engine</h4>
              <p className="text-sm text-muted-foreground">Autonomous lead generation system</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Bot className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Always running</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center">
              <div className="w-16 h-0.5 bg-border" />
              <Zap className="w-6 h-6 text-foreground mx-2" />
              <div className="w-16 h-0.5 bg-border" />
            </div>
            <div className="lg:hidden flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
            </div>

            {/* Output */}
            <div className="flex-1 text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-4">
                <Handshake className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Qualified Meetings</h4>
              <p className="text-sm text-muted-foreground">Ready-to-close leads on your calendar</p>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{outcome.value}</div>
              <div className="text-sm text-muted-foreground">{outcome.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
