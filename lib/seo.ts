import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://priszm.ai'
const SITE_NAME = 'Priszm'
const DEFAULT_OG_IMAGE = '/og-image.png'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
  canonical?: string
}

/**
 * Generate consistent metadata for any page
 * Usage: export const metadata = generateMetadata({ title: 'About', description: '...' })
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
  canonical,
}: SEOConfig): Metadata {
  const fullTitle = title === 'Home' ? `${SITE_NAME} - AI-Powered Lead Generation Agency` : `${title} | ${SITE_NAME}`
  
  const defaultKeywords = [
    'lead generation',
    'AI',
    'automation',
    'business growth',
    'sales automation',
    'B2B leads',
    'Priszm',
  ]

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: author ? [{ name: author }] : [{ name: 'Priszm' }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: BASE_URL,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@joe_barkate',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }

  return metadata
}

/**
 * Generate metadata for blog posts
 * Usage: export const metadata = generateBlogMetadata(post)
 */
export function generateBlogMetadata(post: {
  title: string
  excerpt: string
  image?: string
  date: string
  author: string
  category: string
  slug: string
}): Metadata {
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    ogImage: post.image || DEFAULT_OG_IMAGE,
    ogType: 'article',
    publishedTime: post.date,
    author: post.author,
    keywords: [post.category.toLowerCase(), 'lead generation blog', 'sales tips'],
    canonical: `${BASE_URL}/blog/${post.slug}`,
  })
}

/**
 * Structured data for organization (add to layout)
 */
export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/priszm-logo.png`,
  description: 'AI-powered lead generation agency helping businesses automate prospecting and scale growth.',
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      name: 'Joseph Barkate',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/joseph-barkate/',
    'https://x.com/joe_barkate',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'joe@priszm.ai',
    contactType: 'sales',
  },
}

/**
 * Structured data for blog posts
 */
export function generateBlogStructuredData(post: {
  title: string
  excerpt: string
  image?: string
  date: string
  author: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image || `${BASE_URL}${DEFAULT_OG_IMAGE}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://www.linkedin.com/in/joseph-barkate/',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/priszm-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  }
}
