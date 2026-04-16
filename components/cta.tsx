import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-primary/20 p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px] -z-10" />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Ready to transform your pipeline?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join 500+ companies using Priszm to generate qualified leads on autopilot. 
              Start your free trial today — no credit card required.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 border-border bg-background/50 hover:bg-background">
                Talk to sales
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Free 14-day trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
