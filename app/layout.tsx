import '@/app/globals.css'
import Navbar from '@/app/components/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stryn Ferie Hytte',
  description: 'Stryn Ferie Hytte - Book your next vacation at a beautiful cabin in Stryn, surrounded by beautiful Norwegian nature.',
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
