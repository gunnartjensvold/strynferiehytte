import '@/app/globals.css'
import Navbar from '@/app/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { siteDescription, siteName, siteUrl } from '@/app/utils/site'

const inter = Inter({ subsets: ['latin'] })

const shareImage = {
  url: '/images/og.jpg',
  width: 1200,
  height: 630,
  alt: 'Yellow wooden holiday cabin in Stryn with a garden and green mountains behind'
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `Holiday cabin for rent in Stryn, Norway | ${siteName}`,
  description: siteDescription,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName,
    title: `${siteName} – holiday cabin in Stryn, Norway`,
    description: siteDescription,
    locale: 'en_US',
    images: [shareImage]
  },
  twitter: {
    card: 'summary_large_image',
    images: [shareImage]
  },
  verification: {
    google: 'W9kXDo2eosdiX2mg31jsNGBFNZZebdFua5yjWWl-Wg8'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased text-brown`}>
        <header className='absolute z-50 top-0 left-0 right-0'>
          <Navbar />
        </header>

        {children}
      </body>
      <GoogleAnalytics gaId='G-NCS6E6KCD7' />
    </html>
  )
}
