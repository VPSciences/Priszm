import { generateMetadata as createMetadata } from '@/lib/seo'

export const metadata = createMetadata({
  title: 'Login',
  description: 'Sign in to your Priszm account to access AI-powered lead generation tools and manage your campaigns.',
  keywords: ['login', 'sign in', 'Priszm account'],
  noIndex: true,
})

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
