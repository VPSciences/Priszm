import Link from 'next/link'
import { Sparkles, ArrowLeft, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import { generateMetadata as createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Careers',
  description: 'Join the Priszm team and help revolutionize lead generation with AI. Explore open positions and grow your career with us.',
  keywords: ['Priszm careers', 'AI jobs', 'lead generation jobs', 'remote tech jobs'],
})

const openings = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Account Executive',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Growth Marketing Lead',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
  },
]

const benefits = [
  'Competitive salary and equity',
  'Fully remote work',
  'Unlimited PTO',
  'Health, dental, and vision insurance',
  'Home office stipend',
  'Learning and development budget',
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-foreground">
              <Sparkles className="w-4 h-4 text-background" />
            </div>
            <span className="text-xl font-bold text-foreground">Priszm</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Join Our Team
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Help us build the future of AI-powered lead generation. We&apos;re looking for 
            passionate people who want to make an impact.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Why Priszm?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                <div className="w-2 h-2 rounded-full bg-foreground" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div 
                key={job.title} 
                className="p-6 rounded-xl border border-border hover:border-foreground/20 transition-colors group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:underline">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{job.department}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-background">Don&apos;t see your role?</h2>
          <p className="mt-4 text-background/70">
            We&apos;re always looking for talented people. Send us your resume.
          </p>
          <Button size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
