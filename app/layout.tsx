import type { Metadata } from 'next'
import { Bangers, Comic_Neue, Fira_Sans_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bangers = Bangers({ weight: '400', subsets: ["latin"], variable: '--font-bangers' });
const comicNeue = Comic_Neue({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-comic' });
const fsC = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira',
});
export const metadata = {
  title: 'Umang Raj Jaiswal | Manifesto',
  description: 'Not your usual manifesto.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} ${comicNeue.variable} ${fsC.className}  antialiased bg-yellow-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
