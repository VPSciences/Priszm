import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Capabilities } from '@/components/capabilities'
import { Process } from '@/components/process'
import { Results } from '@/components/results'
import { Metrics } from '@/components/metrics'
import { Integrations } from '@/components/integrations'
import { Security } from '@/components/security'
import { Testimonials } from '@/components/testimonials'

import { FAQ } from '@/components/faq'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Capabilities />
      <Process />
      <Results />
      <Metrics />
      <Integrations />
      <Security />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
