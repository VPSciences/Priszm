import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Priszm - AI-Powered Lead Generation Agency',
  description: 'Transform your business with AI-powered lead generation. Automate prospecting, increase revenue, and scale your growth with Priszm.',
  keywords: ['lead generation', 'AI', 'automation', 'business growth', 'sales automation', 'B2B leads'],
  openGraph: {
    title: 'Priszm - AI-Powered Lead Generation',
    description: 'Transform your business with AI-powered lead generation. Automate prospecting, increase revenue, and scale your growth.',
    url: 'https://priszm.ai',
    siteName: 'Priszm',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Priszm - AI-Powered Lead Generation Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priszm - AI-Powered Lead Generation',
    description: 'Transform your business with AI-powered lead generation. Automate prospecting, increase revenue, and scale your growth.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
