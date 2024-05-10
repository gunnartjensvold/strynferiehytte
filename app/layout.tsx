import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stryn Ferie Hytte',
  description: 'Stryn Ferie Hytte - The best cabin in western Norway'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className + ' antialiased'}>
        <header className='absolute z-50 top-0 left-0 right-0'>
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  )
}
