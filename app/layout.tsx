import type { Metadata } from 'next'
import { fonts } from '@/styles/fonts'
import { sharedMetadata } from '@/config/metadata'
import { ThemeProvider } from '@/components/theme/provider'
import '@/styles/globals.css'
import { Analytics } from '@/components/Analytics'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts} flex min-h-screen flex-col font-sans`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
