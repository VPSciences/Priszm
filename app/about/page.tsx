import Link from 'next/link'
import { Sparkles, ArrowLeft, Target, Zap, Users, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import { generateMetadata as createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'About',
  description: 'Learn about Priszm and our mission to revolutionize lead generation with AI. Discover our story, values, and the team behind the platform.',
  keywords: ['about Priszm', 'lead generation company', 'AI sales team'],
})

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by the qualified meetings we deliver, not vanity metrics.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We leverage cutting-edge AI to stay ahead of the curve and deliver exceptional results.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, aligned with your goals and growth.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    description: 'Clear communication, honest reporting, and no hidden fees or surprises.',
  },
]

export default function AboutPage() {
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
            About Priszm
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We&apos;re on a mission to help businesses grow by delivering qualified leads 
            through AI-powered automation. No more cold calling into the void.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Priszm was founded with a simple observation: most businesses waste countless hours 
              on manual lead generation that yields inconsistent results. Sales teams spend more 
              time researching and reaching out than actually selling.
            </p>
            <p>
              We built Priszm to change that. By combining multi-channel outreach with advanced 
              AI qualification, we help businesses focus on what they do best—closing deals and 
              serving customers—while we handle the pipeline.
            </p>
            <p>
              Today, we work with companies of all sizes, from ambitious startups to established 
              enterprises, delivering thousands of qualified meetings every month.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-background">Ready to grow your pipeline?</h2>
          <p className="mt-4 text-background/70">
            Let&apos;s talk about how Priszm can help your business.
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
