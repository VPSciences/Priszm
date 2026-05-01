import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { generateMetadata as createMetadata, organizationStructuredData } from '@/lib/seo'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = createMetadata({
  title: 'Home',
  description: 'Priszm helps pest control, landscaping, HVAC, and roofing companies get more booked jobs. Done-for-you lead generation, review automation, and Google optimization.',
  keywords: ['pest control marketing', 'landscaping lead generation', 'HVAC leads', 'roofing leads', 'blue-collar marketing agency', 'done-for-you lead generation'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
