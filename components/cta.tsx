import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-24 sm:py-32 section-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 md:p-12 lg:p-16">
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background leading-tight">
              Ready to stop chasing leads?
            </h2>
            <p className="mt-4 text-lg text-background/70">
              30-minute call. We&apos;ll tell you exactly what we&apos;d build for your business and what results you should expect. No pitch deck. Just straight talk.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-12 px-8" asChild>
                <Link href="mailto:joe@priszm.ai">
                  Let&apos;s talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 border-background/30 text-background bg-transparent hover:bg-background/10" asChild>
                <Link href="#workflow">See how it works</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-background/50">
              Pest control · Landscaping · HVAC · Roofing · Cleaning · Contracting
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
