import type { Metadata } from 'next'
import { fonts } from '@/styles/fonts'
import { sharedMetadata } from '@/config/metadata'
import '@/styles/globals.css'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    template: '%s | Lingo App',
    default: 'Lingo - Best language learning app',
  },
  description: 'The most popular language learning app. Learn languages with ease.',
  keywords: ['Duolingo', 'Language', 'Learn Languages'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${fonts} font-sans`}>{children}</body>
    </html>
  )
}
