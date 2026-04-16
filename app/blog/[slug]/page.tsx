import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Footer } from '@/components/footer'

// Sample blog posts data - replace with your CMS or database
const blogPosts: Record<string, {
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  content: string
}> = {
  'ai-lead-generation-2026': {
    title: 'The Future of AI-Powered Lead Generation in 2026',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses find and qualify leads.',
    category: 'Industry Insights',
    author: 'Joseph Barkate',
    date: 'April 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    content: `
      <p>The landscape of B2B lead generation has transformed dramatically over the past few years. With the advent of sophisticated AI technologies, businesses are now able to identify, qualify, and engage potential customers at a scale that was previously unimaginable.</p>
      
      <h2>The Rise of Predictive Analytics</h2>
      <p>One of the most significant advancements in AI-powered lead generation is the use of predictive analytics. By analyzing vast amounts of data from various sources, AI can now predict which companies are most likely to become customers, often before they even know they have a need.</p>
      
      <h2>Automated Outreach at Scale</h2>
      <p>Gone are the days of manually crafting hundreds of emails. AI can now generate personalized outreach messages that resonate with each prospect's specific pain points and interests, dramatically improving response rates while saving countless hours.</p>
      
      <h2>Intent Signal Detection</h2>
      <p>Modern AI systems can detect buying intent signals across the web, identifying when potential customers are researching solutions like yours. This allows sales teams to engage at exactly the right moment in the buyer's journey.</p>
      
      <h2>What This Means for Your Business</h2>
      <p>The businesses that embrace these AI-powered tools will have a significant competitive advantage. They'll be able to reach more qualified prospects, engage them more effectively, and close deals faster than ever before.</p>
    `,
  },
  'automate-outreach-sequences': {
    title: 'How to Automate Your Outreach Without Losing the Human Touch',
    excerpt: 'Learn the best practices for creating automated email and LinkedIn sequences that still feel personal.',
    category: 'Best Practices',
    author: 'Joseph Barkate',
    date: 'April 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    content: `
      <p>Automation is essential for scaling your outreach efforts, but there's a fine line between efficient and robotic. Here's how to maintain authenticity while leveraging the power of automation.</p>
      
      <h2>Start with Deep Personalization</h2>
      <p>The key to effective automated outreach is front-loading the personalization. Use AI to research each prospect and identify genuine connection points before adding them to any sequence.</p>
      
      <h2>Segment Ruthlessly</h2>
      <p>Don't send the same message to everyone. Create highly specific segments based on industry, role, company size, and pain points. The more targeted your segments, the more relevant your messaging can be.</p>
      
      <h2>Build in Human Touchpoints</h2>
      <p>Design your sequences with mandatory human review points. Automated follow-ups are great, but a personalized video message or a genuine LinkedIn comment can make all the difference.</p>
      
      <h2>Test and Iterate</h2>
      <p>Continuously A/B test your messaging, timing, and channels. What works for one segment may not work for another. Let the data guide your optimization efforts.</p>
    `,
  },
  'b2b-sales-data-enrichment': {
    title: 'The Complete Guide to B2B Data Enrichment',
    excerpt: 'Everything you need to know about enriching your lead data to improve targeting and conversions.',
    category: 'Guides',
    author: 'Joseph Barkate',
    date: 'April 5, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    content: `
      <p>Data enrichment is the process of enhancing your existing lead data with additional information from external sources. When done right, it can dramatically improve your sales team's effectiveness.</p>
      
      <h2>What Data Should You Enrich?</h2>
      <p>Focus on data points that directly impact your sales process: company size, revenue, technology stack, recent funding, hiring patterns, and key decision-makers' contact information.</p>
      
      <h2>Choosing Enrichment Sources</h2>
      <p>Not all data providers are created equal. Look for providers with high accuracy rates, regular data updates, and good coverage in your target market segments.</p>
      
      <h2>Maintaining Data Quality</h2>
      <p>Enriched data is only valuable if it's accurate and up-to-date. Implement regular data hygiene processes and validation checks to ensure your database stays clean.</p>
      
      <h2>Putting Enriched Data to Work</h2>
      <p>Use your enriched data to create better lead scoring models, more targeted campaigns, and more informed sales conversations. The ROI of good data enrichment can be substantial.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return { title: 'Post Not Found - Priszm Blog' }
  }
  
  return {
    title: `${post.title} - Priszm Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
          <Link href="/blog" className="mt-4 text-muted-foreground hover:text-foreground">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

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
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </nav>
      </header>

      {/* Article */}
      <article className="py-12 lg:py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Category */}
          <span className="text-sm font-medium px-3 py-1 bg-secondary rounded-full text-muted-foreground">
            {post.category}
          </span>
          
          {/* Title */}
          <h1 className="mt-6 text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            {post.title}
          </h1>
          
          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Featured Image */}
          <div className="mt-8 aspect-[2/1] rounded-xl overflow-hidden bg-secondary">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div 
            className="mt-10 prose prose-neutral max-w-none
              prose-headings:text-foreground prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-foreground prose-a:underline
              prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Card */}
          <div className="mt-16 p-6 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outiside_crop-l8D6iFJWsQLpM7Qm11zqpV0UP76CKh.jpg"
                alt={post.author}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">Founder & CEO at Priszm</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Joseph is the founder of Priszm, helping businesses scale their lead generation with AI-powered automation.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-foreground text-background rounded-xl text-center">
            <h3 className="text-xl font-bold">Ready to transform your lead generation?</h3>
            <p className="mt-2 text-background/70">
              See how Priszm can help you find and convert more qualified leads.
            </p>
            <Link 
              href="/get-started"
              className="mt-4 inline-block px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
