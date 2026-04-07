import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'
import { ThemeScript } from '@/components/theme-script'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: 'Rudra Edge | AI Solutions That Drive Real Impact',
  description: 'We engineer intelligent automation, machine learning systems, and enterprise software for companies ready to lead. Based in Noida, India.',
  keywords: ['AI solutions', 'machine learning', 'intelligent automation', 'enterprise software', 'cloud architecture', 'AI development', 'Noida'],
  authors: [{ name: 'Rudra Edge' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Rudra Edge | AI Solutions That Drive Real Impact',
    description: 'We engineer intelligent automation and enterprise software for companies ready to lead.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudra Edge | AI Solutions That Drive Real Impact',
    description: 'We engineer intelligent automation and enterprise software for companies ready to lead.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1f2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
