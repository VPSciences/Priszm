'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Is this right for my type of business?',
    answer: 'We work with owner-operators in pest control, landscaping, HVAC, cleaning, roofing, and general contracting. If you run crews, manage routes, and rely on inbound calls and referrals — this is built for you. If you\'re not sure, get on a call with us. We\'ll tell you honestly.',
  },
  {
    question: 'What exactly is included?',
    answer: 'Depends on what you need. We typically build: Google Business Profile optimization, automated review requests, lead follow-up sequences (email + SMS), and targeted outreach campaigns. We\'ll tell you specifically what we\'d build for your business on the intro call — no generic packages.',
  },
  {
    question: 'How fast can we get started?',
    answer: 'Usually 1–2 weeks from our first call to launch. We handle all the setup. You don\'t need to install software, learn new tools, or manage a dashboard. We send you a monthly report and you focus on the jobs.',
  },
  {
    question: 'What does it cost?',
    answer: 'We don\'t publish pricing because every business is different. Service area size, what systems you already have, and what you\'re trying to accomplish all affect scope. Get on a call with us — we\'ll be straight with you about what makes sense.',
  },
  {
    question: 'Do I have to learn any software?',
    answer: 'No. That\'s the whole point. We build and operate the systems. You get more calls and book more jobs. You\'ll get a simple monthly report showing what\'s working — that\'s it.',
  },
  {
    question: 'What if it doesn\'t work?',
    answer: 'We fix it. This is a done-for-you service, not a software subscription. If the system isn\'t performing, we\'re the ones responsible for figuring out why and making changes. Your success is how we stay in business.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Questions we get asked
          </h2>
        </div>

        {/* FAQ accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:ring-1 data-[state=open]:ring-foreground/10"
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
