import Link from 'next/link'
import { Sparkles, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Privacy Policy - Priszm',
  description: 'Priszm privacy policy and data handling practices.',
}

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 1, 2026</p>

          <div className="mt-12 prose prose-neutral max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include your name, email address, 
                company information, and payment details.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also automatically collect certain information when you use our platform, including 
                log data, device information, and usage patterns.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send communications, and comply with legal obligations. We do 
                not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share your information with service providers who assist us in operating our 
                platform, with your consent, or as required by law. All third-party providers are 
                contractually obligated to protect your data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your information, including 
                encryption, access controls, and regular security audits. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may 
                also opt out of certain communications. To exercise these rights, please contact us 
                at privacy@priszm.com.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@priszm.com 
                or through our <Link href="/contact" className="text-foreground underline">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
