import type { Metadata } from 'next'
import { Bangers, Comic_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bangers = Bangers({ weight: '400', subsets: ["latin"], variable: '--font-bangers' });
const comicNeue = Comic_Neue({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-comic' });

export const metadata: Metadata = {
  title: 'Batman × Spider-Man Comic Portfolio',
  description: 'A vintage 1970s comic book portfolio celebrating two iconic superheroes',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
