import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Footer } from '@/components/footer'

// Sample blog posts - replace with your CMS or database
const blogPosts = [
  {
    slug: 'ai-lead-generation-2026',
    title: 'The Future of AI-Powered Lead Generation in 2026',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses find and qualify leads, and what it means for your sales pipeline.',
    category: 'Industry Insights',
    author: 'Joseph Barkate',
    date: 'April 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
  },
  {
    slug: 'automate-outreach-sequences',
    title: 'How to Automate Your Outreach Without Losing the Human Touch',
    excerpt: 'Learn the best practices for creating automated email and LinkedIn sequences that still feel personal and drive real engagement.',
    category: 'Best Practices',
    author: 'Joseph Barkate',
    date: 'April 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
  },
  {
    slug: 'b2b-sales-data-enrichment',
    title: 'The Complete Guide to B2B Data Enrichment',
    excerpt: 'Everything you need to know about enriching your lead data to improve targeting, personalization, and conversion rates.',
    category: 'Guides',
    author: 'Joseph Barkate',
    date: 'April 5, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
  },
  {
    slug: 'intent-signals-explained',
    title: 'Understanding Buyer Intent Signals: A Deep Dive',
    excerpt: 'What are intent signals, how do you capture them, and how can they transform your lead prioritization strategy?',
    category: 'Industry Insights',
    author: 'Joseph Barkate',
    date: 'March 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
  },
  {
    slug: 'crm-integration-tips',
    title: '5 CRM Integration Mistakes That Are Costing You Leads',
    excerpt: 'Avoid these common pitfalls when connecting your lead generation tools to your CRM and maximize your pipeline efficiency.',
    category: 'Best Practices',
    author: 'Joseph Barkate',
    date: 'March 20, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
  },
  {
    slug: 'scaling-sales-with-ai',
    title: 'Scaling Your Sales Team with AI: A Case Study',
    excerpt: 'How one company 10x their qualified leads while reducing their sales development costs by 40% using AI automation.',
    category: 'Case Studies',
    author: 'Joseph Barkate',
    date: 'March 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
  },
]

import { generateMetadata as createMetadata } from '@/lib/seo'

const categories = ['All', 'Industry Insights', 'Best Practices', 'Guides', 'Case Studies']

export const metadata = createMetadata({
  title: 'Blog',
  description: 'Insights, guides, and best practices for AI-powered lead generation and sales automation. Learn how to grow your pipeline with Priszm.',
  keywords: ['lead generation blog', 'B2B sales tips', 'AI marketing insights', 'sales automation guides'],
})

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/priszm-logo.png"
              alt="Priszm"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-foreground">Priszm</span>
          </Link>
          <Link 
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-16 lg:py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Priszm Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Insights, guides, and best practices for AI-powered lead generation and modern sales teams.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-8 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  category === 'All'
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[2/1] overflow-hidden bg-secondary">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 bg-secondary rounded-full text-muted-foreground">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="text-sm font-medium text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="bg-foreground text-background rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold">Stay Updated</h2>
            <p className="mt-2 text-background/70 max-w-lg mx-auto">
              Get the latest insights on AI lead generation delivered straight to your inbox.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/20"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
