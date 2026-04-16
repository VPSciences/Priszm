import { generateMetadata as createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Get Started',
  description: 'Create your Priszm account and start generating qualified leads with AI-powered automation. Free trial available.',
  keywords: ['sign up', 'create account', 'free trial', 'lead generation'],
})

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
