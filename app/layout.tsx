import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme/provider"
import { Analytics } from "@/components/Analytics"
import { ClerkProvider } from "@clerk/nextjs"

import { sharedMetadata } from "@/config/metadata"

import { fonts } from "@/styles/fonts"
import "@/styles/globals.css"

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    template: "%s | Lingo App",
    default: "Lingo - Best language learning app",
  },
  description: "The most popular language learning app. Learn languages with ease.",
  keywords: ["Duolingo", "Language", "Learn Languages"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          fontSize: "0.875rem",
          borderRadius: "0.5rem",
          colorPrimary: "hsl(142, 71%, 45%)",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${fonts} flex min-h-screen flex-col font-sans`}>
          <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
