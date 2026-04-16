'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does Priszm find leads?',
    answer: 'Our AI scans millions of data points across the web, social platforms, and proprietary databases to identify prospects that match your ideal customer profile. We analyze company data, buying signals, intent data, and behavioral patterns to surface the most qualified leads.',
  },
  {
    question: 'What integrations do you support?',
    answer: 'We integrate with all major CRMs (Salesforce, HubSpot, Pipedrive), email providers (Gmail, Outlook), communication tools (Slack), and automation platforms (Zapier). We\'re constantly adding new integrations based on customer feedback.',
  },
  {
    question: 'How accurate is the lead data?',
    answer: 'Our AI-powered data enrichment achieves 95%+ accuracy for contact information. We verify email addresses in real-time and continuously update our database to ensure you\'re always working with fresh, accurate data.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you\'ll retain access until the end of your current billing period.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We\'re SOC 2 Type II certified and fully compliant with GDPR and CCPA. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never sell or share your lead data with third parties.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! Our Starter plan is completely free and includes up to 100 leads per month. For Growth plans, we offer a 14-day free trial with full access to all features. No credit card required.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:ring-1 data-[state=open]:ring-primary/20"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
