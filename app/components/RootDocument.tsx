import '@/app/globals.css'
import Navbar from '@/app/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import type { Content } from '@/app/content/types'

const inter = Inter({ subsets: ['latin'] })

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
      <GoogleAnalytics gaId='G-NCS6E6KCD7' />
    </html>
  )
}
