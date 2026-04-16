import Link from 'next/link'
import { Sparkles, ArrowLeft, Mail, MessageSquare, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const metadata = {
  title: 'Contact - Priszm',
  description: 'Get in touch with the Priszm team.',
}

export default function ContactPage() {
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

      <div className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left side - Info */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have questions about Priszm? Want to see how we can help grow your pipeline? 
                We&apos;d love to hear from you.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="mt-1 text-muted-foreground">hello@priszm.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Live Chat</h3>
                    <p className="mt-1 text-muted-foreground">Available Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                    <p className="mt-1 text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input id="company" placeholder="Acme Inc" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your lead generation needs..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
