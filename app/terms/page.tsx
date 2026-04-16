import Link from 'next/link'
import { Sparkles, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Terms of Service - Priszm',
  description: 'Priszm terms of service and usage agreement.',
}

export default function TermsPage() {
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

      <div className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 1, 2026</p>

          <div className="mt-12 prose prose-neutral max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Priszm&apos;s services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Priszm provides AI-powered lead generation services, including but not limited to lead 
                identification, data enrichment, automated outreach, and lead qualification. Service 
                specifics are outlined in your individual agreement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use our services in compliance with all applicable laws and regulations, 
                including anti-spam laws and data protection regulations. You are responsible for 
                maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms are specified in your service agreement. All fees are non-refundable 
                unless otherwise stated. We reserve the right to modify pricing with 30 days notice.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our services are owned by Priszm and are 
                protected by intellectual property laws. You may not copy, modify, or distribute our 
                proprietary technology without permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Priszm shall not be liable for any indirect, incidental, or consequential damages 
                arising from your use of our services. Our total liability shall not exceed the 
                amount paid by you in the preceding 12 months.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate the agreement with 30 days written notice. We may suspend 
                or terminate your access immediately if you violate these terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, please contact us at legal@priszm.com or through 
                our <Link href="/contact" className="text-foreground underline">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
