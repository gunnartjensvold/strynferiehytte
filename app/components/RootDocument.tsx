import '@/app/globals.css'
import Navbar from '@/app/components/Navbar'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import type { Content } from '@/app/content/types'

const inter = Inter({ subsets: ['latin'], preload: false })

const gaId = 'G-NCS6E6KCD7'

// Each language has its own root layout so that <html lang> matches the page
export default function RootDocument({ content, children }: { content: Content; children: React.ReactNode }) {
  return (
    <html lang={content.locale}>
      <body className={`${inter.className} antialiased text-brown`}>
        <header className='absolute z-50 top-0 left-0 right-0'>
          <Navbar content={content} />
        </header>

        {children}
      </body>
      {/* Load Google Analytics after the page has loaded, so it doesn't compete with the hero photo for bandwidth */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy='lazyOnload'
      />
      <Script
        id='google-analytics'
        strategy='lazyOnload'
      >
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </html>
  )
}
