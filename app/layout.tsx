import type { Metadata } from 'next'
import { Bangers, Comic_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

const bangers = Bangers({ weight: '400', subsets: ["latin"], variable: '--font-bangers' });
const comicNeue = Comic_Neue({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-comic' });

export const metadata: Metadata = {
  title: 'Umang Raj Jaiswal | Engineering Student & Builder',
  description: 'Portfolio of Umang Raj Jaiswal — Computer Science student at BIT Mesra, public speaker, competitive programmer, and builder of digital experiences.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bangers.variable} ${comicNeue.variable}`}>
      <body className="font-comic antialiased bg-yellow-50">
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
